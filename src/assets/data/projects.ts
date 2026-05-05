import iviHero from "../projects/iviHero.png";
import renacerHero from "../projects/renacerHero.png";
import travelToSpaceHero from "../projects/travelToSpaceHero.png";
import runnerDogHero from "../projects/runnerDogGame.png";
import deerTechServicesHero from "../projects/deerTechServicesHero.png";
import liliasBordadosHero from "../projects/liliasBordadosHero.png";

export const projectsInfo = [
  {
    tag: "EdTech & Management",
    title: "IVI Educa",
    description:
      "Ecosistema digital inteligente diseñado para optimizar la gestión académica y administrativa, facilitando la comunicación en tiempo real entre instituciones, docentes y alumnos.",
    photo: iviHero,
    buttons: [
      {
        link: "https://ivieduca.com",
        label: "Site",
        icon: "code",
        color: "blue",
      },
      {
        link: "https://www.youtube.com/@ivieduca5182",
        label: "Youtube",
        icon: "code",
        color: "red",
      },
    ],
  },
  {
    tag: "Social Impact / Real Estate",
    title: "Renacer: Vivienda Social",
    description:
      "Plataforma informativa para proyecto de vivienda de alto impacto social. facilita el acceso transparente a terrenos propios para familias de escasos recursos.",
    photo: renacerHero,
    buttons: [
      {
        link: "https://proyectoviviendarenacer.netlify.app/",
        label: "Live Demo",
        icon: "page",
        color: "blue",
      },
    ],
  },
  {
    tag: "SpaceTech",
    title: "TravelToSpace",
    description:
      "Simulador inmersivo de turismo orbital y exploración interplanetaria. Ofrece visualización de rutas astrodinámicas y experiencias interactivas para futuros viajeros del espacio.",
    photo: travelToSpaceHero,
    buttons: [
      {
        link: "https://travelto-space.netlify.app/",
        label: "Launch",
        icon: "code",
        color: "secondary",
      },
      {
        link: "https://github.com/DavidEspinozaRomero/space-travel",
        label: "Code",
        icon: "code",
        color: "secondary",
      },
    ],
  },
  {
    tag: "Web Gaming / Canvas",
    title: "Runner Dog Game",
    description:
      "Videojuego de navegador estilo endless runner optimizado para web. Cuenta con mecánicas de física fluida, sistema de puntaje dinámico y renderizado de alto rendimiento.",
    photo: runnerDogHero,
    buttons: [
      {
        link: "https://endlessrunnerdog.netlify.app/",
        label: "Code",
        icon: "code",
        color: "secondary",
      },
      {
        link: "https://github.com/DavidEspinozaRomero/angular-game-endless-runner-dog",
        label: "Demo",
        icon: "code",
        color: "secondary",
      },
    ],
  },
  {
    tag: "Enterprice",
    title: "DeerTechServices",
    description:
      "Empresa de Desarrollo de Software, Infraestructura y Tecnología de la Información, dedicada a la gestión de proyectos de desarrollo de software e infraestructura.",
    photo: deerTechServicesHero,
    buttons: [
      {
        link: "https://deertechservice.top/",
        label: "Site",
        icon: "page",
        color: "secondary",
      },
    ],
  },
  {
    tag: "E-Commerce & Branding",
    // tag: "E-Commerce & Showcase",
    title: "Lilia's Bordados",
    // description: "Catálogo digital y plataforma de exhibición para alta costura artesanal. Integra una interfaz visual elegante y optimizada para convertir visitantes en clientes mediante muestras interactivas.",
    description:
      "Showcase digital de alta gama para el sector textil artesanal. Una plataforma diseñada para convertir el arte tradicional del bordado en una experiencia visual premium y comercial.",
    photo: liliasBordadosHero,
    buttons: [
      {
        link: "https://liliasbordados.netlify.app",
        label: "Code",
        icon: "code",
        color: "secondary",
      },
    ],
  },
];