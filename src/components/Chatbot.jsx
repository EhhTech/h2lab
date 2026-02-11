import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Send, Bot, User } from 'lucide-react'
import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY)

const SYSTEM_PROMPT = `Eres el asistente virtual de H2Lab, una agencia de desarrollo de software a medida. Tu nombre es "H2Lab Asistente".

Información sobre H2Lab:
- Desarrollamos: apps móviles (iOS/Android), tiendas online (e-commerce), sistemas POS, chatbots con IA, y páginas web profesionales.
- Tecnologías: React, React Native, Flutter, Node.js, Python, Next.js, bases de datos SQL y NoSQL, AWS, Google Cloud.
- Proceso: escuchamos la idea → diseñamos solución → desarrollamos con tecnología de punta → acompañamos post-lanzamiento.
- Todos los proyectos incluyen garantía, soporte técnico y documentación.
- Tiempos: una app básica 4-6 semanas, sistemas complejos 3-4 meses.
- Contacto WhatsApp: +51 565 909 7415

Reglas:
- Responde siempre en español, de forma breve y profesional (máximo 2-3 oraciones).
- Sé amable y entusiasta sin ser excesivo.
- Si preguntan precios, di que depende del alcance y sugiere agendar una llamada.
- Si no sabes algo, sugiere contactar por WhatsApp.
- No inventes información que no tengas.`

const WELCOME_MESSAGE = {
  id: 'welcome',
  role: 'bot',
  text: '¡Hola! 👋 Soy el asistente virtual de H2Lab. ¿En qué puedo ayudarte? Puedo contarte sobre nuestros servicios, procesos o resolver tus dudas.',
}

const FALLBACK_RESPONSES = [
  'Disculpa, tuve un problema al procesar tu mensaje. ¿Podrías intentar de nuevo?',
  'Hubo un inconveniente técnico. Para atención inmediata, escríbenos por WhatsApp al +51 565 909 7415.',
]

const MODELS = ['gemini-2.0-flash', 'gemini-2.0-flash-lite', 'gemini-1.5-flash']

function buildHistory(conversationHistory) {
  return conversationHistory
    .filter((msg) => msg.id !== 'welcome')
    .map((msg) => ({
      role: msg.role === 'bot' ? 'model' : 'user',
      parts: [{ text: msg.text }],
    }))
}

async function tryModel(modelName, userMessage, history) {
  const model = genAI.getGenerativeModel({ model: modelName })
  const chat = model.startChat({
    history: [
      { role: 'user', parts: [{ text: SYSTEM_PROMPT }] },
      { role: 'model', parts: [{ text: 'Entendido. Soy el asistente virtual de H2Lab, listo para ayudar.' }] },
      ...history,
    ],
  })
  const result = await chat.sendMessage(userMessage)
  return result.response.text()
}

async function getAIResponse(userMessage, conversationHistory) {
  const history = buildHistory(conversationHistory)

  for (const modelName of MODELS) {
    try {
      return await tryModel(modelName, userMessage, history)
    } catch (err) {
      const msg = err?.message || ''
      const isQuota = msg.includes('429') || msg.includes('quota') || msg.includes('Resource has been exhausted')
      const isRetryable = isQuota || msg.includes('503') || msg.includes('unavailable')

      if (isRetryable && modelName !== MODELS[MODELS.length - 1]) {
        await new Promise((r) => setTimeout(r, 1500))
        continue
      }

      // Non-retryable errors (400 invalid key, 403 forbidden, etc.) — break immediately
      break
    }
  }

  return FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)]
}

function TypingIndicator() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '4px 0' }}>
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            delay: i * 0.15,
            ease: 'easeInOut',
          }}
          style={{
            width: 7,
            height: 7,
            borderRadius: '50%',
            background: '#bbb',
            display: 'block',
          }}
        />
      ))}
    </div>
  )
}

function ChatMessage({ message }) {
  const isBot = message.role === 'bot'

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      style={{
        display: 'flex',
        justifyContent: isBot ? 'flex-start' : 'flex-end',
        marginBottom: 12,
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: 10,
          maxWidth: '85%',
          flexDirection: isBot ? 'row' : 'row-reverse',
          alignItems: 'flex-end',
        }}
      >
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            background: isBot ? '#f3f3f3' : '#111',
          }}
        >
          {isBot ? (
            <Bot size={14} style={{ color: '#888' }} />
          ) : (
            <User size={14} style={{ color: '#fff' }} />
          )}
        </div>

        <div
          style={{
            padding: '12px 16px',
            borderRadius: isBot ? '18px 18px 18px 6px' : '18px 18px 6px 18px',
            background: isBot ? '#f5f5f5' : '#111',
            color: isBot ? '#333' : '#fff',
            fontSize: 13.5,
            lineHeight: 1.6,
            wordBreak: 'break-word',
          }}
        >
          {message.text}
        </div>
      </div>
    </motion.div>
  )
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([WELCOME_MESSAGE])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300)
    }
  }, [isOpen])

  const handleSend = async () => {
    const text = input.trim()
    if (!text || isTyping) return

    const userMsg = { id: Date.now(), role: 'user', text }
    const updatedMessages = [...messages, userMsg]
    setMessages(updatedMessages)
    setInput('')
    setIsTyping(true)

    const response = await getAIResponse(text, updatedMessages)
    setMessages((prev) => [
      ...prev,
      { id: Date.now() + 1, role: 'bot', text: response },
    ])
    setIsTyping(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            onClick={() => setIsOpen(true)}
            className="chatbot-bubble"
            style={{
              position: 'fixed',
              bottom: 20,
              right: 20,
              width: 56,
              height: 56,
              borderRadius: '50%',
              background: '#111',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 999,
              boxShadow: '0 6px 24px rgba(0,0,0,0.2)',
            }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
          >
            <MessageSquare size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            className="chatbot-panel"
            style={{
              position: 'fixed',
              zIndex: 1000,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              background: '#fff',
              border: '1px solid #e5e5e5',
              boxShadow: '0 16px 64px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.04)',
            }}
          >
            {/* Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '18px 22px',
                borderBottom: '1px solid #f0f0f0',
                flexShrink: 0,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 14,
                    background: '#111',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Bot size={18} style={{ color: '#fff' }} />
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#111' }}>
                    H2Lab Asistente
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 2 }}>
                    <span
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: '50%',
                        background: '#4ade80',
                        display: 'inline-block',
                      }}
                    />
                    <span style={{ fontSize: 11, color: '#aaa' }}>En línea</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#f5f5f5',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#888',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#eee')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#f5f5f5')}
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages area */}
            <div
              style={{
                flex: 1,
                overflowY: 'auto',
                padding: '20px 18px 12px',
                background: '#fafafa',
              }}
            >
              {messages.map((msg) => (
                <ChatMessage key={msg.id} message={msg} />
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    display: 'flex',
                    gap: 10,
                    alignItems: 'flex-end',
                    marginBottom: 12,
                  }}
                >
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: '#f3f3f3',
                      flexShrink: 0,
                    }}
                  >
                    <Bot size={14} style={{ color: '#888' }} />
                  </div>
                  <div
                    style={{
                      padding: '14px 18px',
                      borderRadius: '18px 18px 18px 6px',
                      background: '#f0f0f0',
                    }}
                  >
                    <TypingIndicator />
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input area */}
            <div
              style={{
                padding: '14px 16px',
                borderTop: '1px solid #f0f0f0',
                background: '#fff',
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  background: '#f7f7f7',
                  borderRadius: 16,
                  padding: '4px 6px 4px 16px',
                  border: '1.5px solid #ebebeb',
                  transition: 'border-color 0.2s',
                }}
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Escribe tu mensaje..."
                  style={{
                    flex: 1,
                    border: 'none',
                    background: 'transparent',
                    outline: 'none',
                    fontSize: 13.5,
                    color: '#111',
                    padding: '10px 0',
                  }}
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 12,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: input.trim() && !isTyping ? '#111' : '#ddd',
                    color: input.trim() && !isTyping ? '#fff' : '#aaa',
                    border: 'none',
                    cursor: input.trim() && !isTyping ? 'pointer' : 'default',
                    transition: 'all 0.2s',
                    flexShrink: 0,
                  }}
                >
                  <Send size={15} />
                </button>
              </div>
              <p style={{ textAlign: 'center', fontSize: 10, color: '#ccc', marginTop: 8 }}>
                Potenciado por IA — H2Lab
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
