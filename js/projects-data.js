/**
 * Base de Datos de Proyectos - Freiddelee Sosa
 * Permite agregar, editar o filtrar proyectos fácilmente.
 */
const projectsData = [
  {
    id: 1,
    title: "TaskFlow Manager",
    category: "js",
    categoryName: "JavaScript ES6+",
    description: "Aplicación interactiva de gestión de proyectos y tareas con arrastre (Drag & Drop), almacenamiento en LocalStorage y métricas de productividad en tiempo real.",
    fullDescription: "TaskFlow Manager es una solución web dinámica creada puramente con Vanilla JavaScript, HTML5 y CSS3. Incorpora soporte para filtros de prioridad, estados personalizables, persistencia de datos en el navegador y un diseño adaptable a cualquier pantalla.",
    image: "assets/images/project-1.svg",
    tags: ["JavaScript", "HTML5", "CSS Grid", "LocalStorage", "Drag & Drop"],
    liveUrl: "#",
    githubUrl: "https://github.com",
    featured: true
  },
  {
    id: 2,
    title: "ShopVibe E-Commerce UI",
    category: "ui",
    categoryName: "Diseño Web UI/UX",
    description: "Tienda virtual moderna con catálogo interactivo, filtro dinámico de productos, carrito de compras en vivo con cálculo de totales y diseño ultra responsivo.",
    fullDescription: "ShopVibe demuestra la implementación de interfaces de usuario vanguardistas: micro-interacciones, animaciones CSS fluidas, modal de visualización rápida de productos y lógica de carrito de compras implementada con JavaScript modular.",
    image: "assets/images/project-2.svg",
    tags: ["HTML5 Semántico", "CSS Flexbox", "JavaScript", "Micro-interacciones"],
    liveUrl: "#",
    githubUrl: "https://github.com",
    featured: true
  },
  {
    id: 3,
    title: "MeteoView Clima & Pronóstico",
    category: "js",
    categoryName: "JavaScript ES6+",
    description: "Plataforma meteorológica que consume APIs públicas para mostrar el estado del tiempo en vivo para Barquisimeto y ciudades del mundo.",
    fullDescription: "Construida con Vanilla JS aprovechando Async/Await y la Fetch API. Incluye geolocalización, búsqueda predictiva de ciudades, gráficos de temperatura y cambio de temas día/noche según la hora local de la ciudad consultada.",
    image: "assets/images/project-3.svg",
    tags: ["JavaScript ES6+", "Fetch API", "Async/Await", "Responsive UI"],
    liveUrl: "#",
    githubUrl: "https://github.com",
    featured: true
  },
  {
    id: 4,
    title: "Simulador de Algoritmos UCLA",
    category: "ucla",
    categoryName: "Proyecto Académico UCLA",
    description: "Visualizador interactivo de estructuras de datos y algoritmos de ordenamiento desarrollado durante la carrera de Informática en la UCLA.",
    fullDescription: "Herramienta didáctica creada para la comunidad de estudiantes de informática de la UCLA en Barquisimeto. Permite observar paso a paso la ejecución de algoritmos como BubbleSort, Quicksort, pilas y colas con animaciones gráficas en el DOM.",
    image: "assets/images/project-4.svg",
    tags: ["JavaScript", "Algoritmos", "DOM Manipulation", "UCLA", "CSS3"],
    liveUrl: "#",
    githubUrl: "https://github.com",
    featured: true
  }
];

