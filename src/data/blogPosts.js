/**
 * Blog posts — edita o agrega entradas aquí.
 * content: array de bloques { type, text } | { type: 'list', items: [] }
 * Tipos disponibles: 'lead' | 'h2' | 'p' | 'list'
 */
export const blogPosts = [
  {
    id: 1,
    slug: 'app-movil-triplicar-ventas',
    title: '¿Cómo una app puede triplicar las ventas de tu negocio?',
    excerpt:
      'Descubre cómo una aplicación móvil personalizada puede convertirse en tu canal de ventas más rentable, y cuándo es el momento ideal para desarrollarla.',
    category: 'Apps',
    categoryColor: '#3b82f6',
    date: '10 Mar 2025',
    readTime: '5 min',
    content: [
      {
        type: 'lead',
        text: 'Para muchos dueños de negocio, tener una aplicación móvil todavía suena a algo exclusivo de las grandes corporaciones. Sin embargo, la realidad del mercado actual es muy diferente: las apps ya no son un lujo, son una ventaja competitiva al alcance de cualquier empresa que quiera crecer.',
      },
      {
        type: 'h2',
        text: 'El cambio en los hábitos del consumidor',
      },
      {
        type: 'p',
        text: 'Los usuarios modernos pasan más de 4 horas al día en sus smartphones. Compran, comparan, consultan y deciden desde sus dispositivos. Si tu negocio no tiene presencia directa en ese espacio, estás perdiendo clientes sin saberlo. Una app propia — a diferencia de redes sociales o marketplaces — crea un canal exclusivo donde solo existes tú.',
      },
      {
        type: 'h2',
        text: '¿Por qué una app genera más ventas?',
      },
      {
        type: 'p',
        text: 'No se trata solo de tener presencia digital. Una aplicación móvil bien construida aumenta las ventas por razones concretas:',
      },
      {
        type: 'list',
        items: [
          'Canal directo de venta sin comisiones a intermediarios.',
          'Notificaciones push que recuerdan promociones justo en el momento correcto.',
          'Programa de fidelización integrado que premia a tus clientes recurrentes.',
          'Proceso de compra más rápido y cómodo que cualquier sitio web.',
          'Datos de comportamiento para diseñar campañas personalizadas.',
        ],
      },
      {
        type: 'h2',
        text: 'Los resultados que hemos visto',
      },
      {
        type: 'p',
        text: 'Nuestros clientes que han optado por desarrollar su propia app han reportado, en promedio, un incremento de ventas del 40% en los primeros 6 meses de lanzamiento. La razón es simple: una app propia reduce la fricción entre el cliente y la compra. Menos pasos, más conversiones.',
      },
      {
        type: 'p',
        text: 'Un restaurante que desarrolló su app de pedidos dejó de pagar el 30% de comisión a plataformas de delivery y recuperó su inversión en menos de 4 meses. Un estudio de fitness aumentó su tasa de retención de clientes en un 60% gracias a un sistema de retos y logros dentro de la app.',
      },
      {
        type: 'h2',
        text: '¿Cuándo es el momento correcto?',
      },
      {
        type: 'p',
        text: 'Si tu negocio tiene una base de clientes recurrentes, procesos que se repiten con frecuencia o quieres diferenciarte de la competencia, ya es el momento. No esperes a ser "grande" para digitalizarte. La digitalización es lo que te hará grande.',
      },
      {
        type: 'p',
        text: 'La clave está en desarrollar una app con objetivos claros: ¿quieres aumentar la frecuencia de compra? ¿Reducir costos operativos? ¿Mejorar la experiencia del cliente? Cada objetivo define una app diferente, y en H2Lab comenzamos cada proyecto con esa pregunta fundamental.',
      },
    ],
  },

  {
    id: 2,
    slug: 'pos-vs-caja-registradora',
    title: 'POS vs. caja registradora: ¿qué necesita realmente tu negocio?',
    excerpt:
      'Analizamos las diferencias clave entre un sistema POS inteligente y una caja convencional, y cuándo vale la pena dar el salto.',
    category: 'Sistemas POS',
    categoryColor: '#f97316',
    date: '24 Feb 2025',
    readTime: '4 min',
    content: [
      {
        type: 'lead',
        text: 'Si tienes un negocio físico, en algún momento te has preguntado si vale la pena cambiar tu caja registradora por un sistema POS. La respuesta corta: sí. Pero entendamos exactamente por qué, y qué debes buscar antes de tomar esa decisión.',
      },
      {
        type: 'h2',
        text: '¿Qué es realmente un sistema POS?',
      },
      {
        type: 'p',
        text: 'Un sistema POS (Point of Sale) es mucho más que una caja registradora sofisticada. Es una plataforma de gestión que integra ventas, inventario, clientes y reportes en un solo lugar, accesible desde cualquier dispositivo conectado a internet. Es la diferencia entre saber cuánto vendiste hoy y saber por qué vendiste eso, a quién, y qué puedes hacer mañana para vender más.',
      },
      {
        type: 'h2',
        text: 'Las limitaciones reales de la caja tradicional',
      },
      {
        type: 'p',
        text: 'Una caja registradora hace una sola cosa: registrar ventas. Eso es todo. No te dice cuánto inventario te queda. No identifica a tus clientes frecuentes. No genera reportes para tomar decisiones estratégicas. No se integra con tus pedidos en línea. Básicamente, te da el resultado de lo que pasó, pero no te ayuda a mejorarlo.',
      },
      {
        type: 'h2',
        text: 'Lo que cambia con un POS inteligente',
      },
      {
        type: 'p',
        text: 'Con un sistema POS bien desarrollado y personalizado para tu negocio puedes:',
      },
      {
        type: 'list',
        items: [
          'Ver en tiempo real el inventario de todos tus puntos de venta.',
          'Identificar tus productos más rentables y los que más rotan.',
          'Crear perfiles de clientes y ofrecer descuentos personalizados.',
          'Generar reportes financieros automáticos sin trabajo manual.',
          'Aceptar múltiples métodos de pago sin hardware adicional.',
          'Funcionar sin conexión a internet en caso de fallas de red.',
        ],
      },
      {
        type: 'h2',
        text: 'El verdadero costo de no actualizarse',
      },
      {
        type: 'p',
        text: 'Muchos negocios calculan el costo de un POS y se detienen ahí. Pero raramente calculan el costo de no tenerlo: errores en inventario que generan pérdidas, tiempo del personal resolviendo diferencias en caja, decisiones de compra basadas en intuición en lugar de datos, y clientes que se van porque el competidor tiene una experiencia de pago más moderna.',
      },
      {
        type: 'h2',
        text: '¿Cuándo hacer el cambio?',
      },
      {
        type: 'p',
        text: 'Si manejas más de 50 transacciones al día, tienes más de un empleado atendiendo ventas, o estás pensando en abrir un segundo punto de venta, un POS deja de ser opcional. Es una inversión con retorno medible, no un gasto. En H2Lab desarrollamos sistemas POS a medida que se adaptan exactamente a tu operación, sin funciones que no necesitas y sin pagar por lo que nunca vas a usar.',
      },
    ],
  },

  {
    id: 3,
    slug: 'desarrollo-a-medida-vs-plataformas',
    title: 'Desarrollo a medida vs. plataformas genéricas: cuándo dar el salto',
    excerpt:
      'Las plataformas No-Code son útiles para empezar, pero llega un punto donde limitan tu crecimiento. Te explicamos exactamente cuándo y por qué hacer el cambio.',
    category: 'Desarrollo',
    categoryColor: '#8b5cf6',
    date: '5 Feb 2025',
    readTime: '6 min',
    content: [
      {
        type: 'lead',
        text: 'Wix, Shopify, WordPress, Notion... Las plataformas genéricas son una excelente puerta de entrada al mundo digital. Permiten lanzar rápido, con bajo costo inicial y sin conocimientos técnicos. Pero hay un punto de inflexión donde dejan de ser aliadas y se convierten en el mayor obstáculo para tu crecimiento.',
      },
      {
        type: 'h2',
        text: 'Las plataformas son perfectas... al principio',
      },
      {
        type: 'p',
        text: 'Si estás comenzando, usar una plataforma existente es la decisión inteligente. Validas tu idea, consigues tus primeros clientes y aprendes qué funciona sin invertir en tecnología que aún no necesitas. El problema llega cuando tu negocio empieza a crecer y la plataforma no crece contigo al mismo ritmo.',
      },
      {
        type: 'h2',
        text: 'Las 5 señales de que ya superaste tu plataforma',
      },
      {
        type: 'list',
        items: [
          'Pagas múltiples herramientas que deberían estar integradas en una sola.',
          'Tu equipo pierde horas a la semana resolviendo workarounds y parches.',
          'Hay funciones críticas para tu negocio que la plataforma simplemente no ofrece.',
          'Tus competidores ofrecen una experiencia digital más personalizada que la tuya.',
          'No puedes acceder directamente a tus propios datos para analizarlos como quieres.',
        ],
      },
      {
        type: 'h2',
        text: '¿Qué ganas realmente con desarrollo a medida?',
      },
      {
        type: 'p',
        text: 'Cuando desarrollas tu propio sistema, obtienes exactamente lo que necesitas, sin pagar por funciones que nunca usarás. Tu software crece contigo, se integra con tus otros sistemas y la propiedad intelectual es 100% tuya.',
      },
      {
        type: 'p',
        text: 'Pero más importante: nadie más tiene acceso a tus datos de negocio. Con las plataformas genéricas, tus datos viven en los servidores de otra empresa, que puede cambiar sus términos, subir sus precios o simplemente cerrar.',
      },
      {
        type: 'h2',
        text: 'El ROI real del desarrollo personalizado',
      },
      {
        type: 'p',
        text: 'El costo inicial del desarrollo a medida es mayor que pagar una suscripción mensual. Eso es un hecho. Pero el costo acumulado de licencias, integraciones forzadas, limitaciones de escalabilidad y tiempo perdido del equipo suele superar al desarrollo propio en un plazo de 2 a 3 años. Y eso sin contar el costo de oportunidad de lo que no pudiste construir por las limitaciones de la plataforma.',
      },
      {
        type: 'h2',
        text: 'No existe una respuesta única',
      },
      {
        type: 'p',
        text: 'La clave está en saber en qué etapa está tu negocio y qué necesita para llegar al siguiente nivel. No tiene sentido construir a medida algo que una plataforma ya resuelve bien. Pero tampoco tiene sentido seguir pagando restricciones cuando tu negocio está listo para algo más grande.',
      },
      {
        type: 'p',
        text: 'En H2Lab hacemos ese análisis contigo antes de escribir una sola línea de código. Si una plataforma te sirve mejor ahora, te lo decimos. Y cuando llegue el momento de construir algo propio, sabrás exactamente por qué y para qué.',
      },
    ],
  },
]
