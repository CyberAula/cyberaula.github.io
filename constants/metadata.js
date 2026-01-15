export const metadataByPage = {
  home: {
    en: {
      title: "Cyberaula UPM - Innovation and education",
      description: "Cyberaula is an educational innovation group within the UPM (Polytechnic University of Madrid) that drives and promotes innovation in teaching and education in telematics through active methods, games, escape rooms and artificial intelligence to improve motivation and learning. ",
      keywords: "cyberaula, educational innovation, innovation, education, artificial intelligence, escape rooms, telematics, gamification",
    },
    es: {
      title: "Cyberaula UPM - Innovación educativa",
      description: "Cyberaula es un grupo de innovación educativa dentro de la UPM (Universidad Politécnica de Madrid) impulsa y promueve la innovación en la enseñanza y la educación en telemática mediante métodos activos, juegos, salas de escape e inteligencia artificial para mejorar la motivación y el aprendizaje. ",
      keywords: "cyberaula, innovación educativa, innovación, educación, inteligencia artificial, salas de escape, telemática, gamificación",
    },
  },
  about: {
    en: {
      title: "About Cyberaula UPM",
      description: "Learn about ... project, our mission and partners.",
      keywords: "about",
    },
    es: {
      title: "Sobre Cyberaula UPM",
      description: "Conoce el proyecto ... nuestra misión y nuestros partners",
      keywords: "Sobre nosotros",
    },
  },
    team: {
    en: {
      title: "Team - Cyberaula UPM",
      description: "Meet our team ... currently working on the ...",
      keywords: "team"
    },
    es: {
      title: "Equipo - Cyberaula UPM",
      description: "Conoce a nuestro equipo, que trabaja actualmente en el proyecto...",
      keywords: "equipo",
    },
  },
  research: {
    en: {
      title: "Research - Cyberaula UPM",
      description: "Explore ... research publications and scientific contributions",
      keywords: "research, publications"
    },
    es: {
      title: "Investigación - Cyberaula UPM",
      description: "Explora ... nuestras publicaciones y contribuciones científicas",
     keywords: "publicaciones, investigación",
    },
  },
  events: {
    en: {
      title: "Events and news - Cyberaula UPM",
      description: "Discover ... workshops and participatory design activities across Europe",
      keywords: "events,news",
    },
    es: {
      title: "Eventos y noticias - Cyberaula UPM",
      description: "Descubre ... talleres, eventos y noticias ....",
			keywords: "eventos, noticias",
    },
  },
  tools: {
    en: {
      title: "Tools - Cyberaula UPM",       
        description: "Discover ... tools and resources developed by Cyberaula UPM",
        keywords: "tools, resources, programs, software",
    },              

    es: {
        title: "Herramientas - Cyberaula UPM",
        description: "Descubre ... herramientas y recursos desarrollados por Cyberaula UPM",
        keywords: "herramientas, recursos, programas, softwware",
    },
  },
  contact: {
    en: {
      title: "Contact us - Cyberaula UPM",
      description: "Get in touch with us for enquiries or possible colaborations. In the CyberAula group we are open to work together with other groups or educational institutions, as well as the participation in european or national projects ",
      keywords: "contact",
    },
    es: {
      title: "Contacto - Cyberaula UPM",
      description: "Ponte en contacto con nosotros para cualquier consulta o posibilidad de colaboración. En el grupo CyberAula estamos abiertos a colaborar con grupos e instituciones educativas, y a la participación en proyectos europeos y nacionales.",
      keywords: "contacto",
    },
  },
};

// Función helper para obtener metadata por página e idioma
export function getPageMetadata(page, lang = 'en') {
  return metadataByPage[page]?.[lang] || metadataByPage[page]?.en || {
    en: {
      title: "Boiler EN",
      description: "Boiler description EN",
      keywords: "Boiler keywords EN",
    },
  };
}