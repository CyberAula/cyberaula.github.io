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
 team: {
    en: {
      title: "Team - Cyberaula UPM",
      description: "Meet our team of professors and PhD candidates. We are currently working on educational innovation projects, developing tools and resources to improve teaching and learning in telematics.",
      keywords: "team"
    },
    es: {
      title: "Equipo - Cyberaula UPM",
      description: "Conoce a nuestro equipo formado por profesores y candidatos a doctorado. Trabajamos actualmente en proyectos de innovación educativa, desarrollando herramientas y recursos para mejorar la enseñanza y el aprendizaje en telemática.",
      keywords: "equipo",
    },
  },
  courses: {
    en: {
      title: "Courses - Cyberaula UPM",
      description: "Discover our latest free online courses (MOOCs) designed and launched recently. These courses cover key topics such as application development, programming technologies, databases, artificial intelligence, GitHub version control, and more. All our MOOCs are 100% free and open to learners worldwide. Stay tuned for upcoming editions and new learning opportunities!",
      keywords: "free online courses, MOOC, application development, programming technologies, databases, artificial intelligence, GitHub, version control, coding courses online, IT courses online, React, JavaScript, HTML, CSS, free courses, free online courses for software developers, MOOCs on application development,learn artificial intelligence online for free, GitHub version control course online, free programming MOOCs",
    },
    es: {
      title: "Cursos - Cyberaula UPM",
      description: "Descubre nuestros últimos cursos online gratuitos (MOOC) diseñados y lanzados recientemente. Estos cursos cubren temas clave como el desarrollo de aplicaciones, tecnologías de programación, bases de datos, inteligencia artificial, control de versiones GitHub y mucho más. Todos nuestros MOOC son 100 % gratuitos y están abiertos a estudiantes de todo el mundo. ¡Estate atento a las próximas ediciones y nuevas oportunidades de aprendizaje!",
     keywords: "cursos online gratuitos, MOOC, desarrollo de aplicaciones, tecnologías de programación, bases de datos, inteligencia artificial, GitHub, control de versiones, cursos de programación online, cursos de informática online, React, JavaScript, HTML, CSS, cursos gratuitos, Cursos online gratuitos para desarrolladores de software, MOOC sobre desarrollo de aplicaciones, aprende inteligencia artificial online gratis, curso online sobre control de versiones GitHub, MOOC gratuitos sobre programación.",
    },
  },
  projects: {
    en: {
      title: "Projects - Cyberaula UPM",
      description: "At Cyberaula, we participate in various European and national projects. These projects are related to educational innovation, the use of emerging technologies in teaching and learning, and the development of open educational resources.",
      keywords: "projects, national projects, european projects, educational innovation, emerging technologies, open educational resources, institutional collaboration",
    },
    es: {
      title: "Proyectos - Cyberaula UPM",
      description: "En Cyberaula participamos en diversos proyectos europeos y nacionales. Estos proyectos están relacionados con la innovación educativa, el uso de tecnologías emergentes en la enseñanza y el aprendizaje, y el desarrollo de recursos educativos abiertos.",
     keywords: "proyectos, proyectos nacionales, proyectos europeos, innovación educativa, tecnologías emergentes, recursos educativos abiertos, colaboración institucional",
    },
  },
  research: {
    en: {
      title: "Research - Cyberaula UPM",
      description: "Explore Cyberaula UPM research publications and scientific contributions. Our research focuses on educational innovation, gamification, serious games, escape rooms, artificial intelligence in education, telematics education, and research and development in education.",
      keywords: "research, publications, impact, escaperooms, learning, artificial intelligence, serious games, gamification, educational innovation, education, telematics",
    },
    es: {
      title: "Publicaciones - Cyberaula UPM",
      description: "Explora las publicaciones de investigación y las contribuciones científicas de Cyberaula UPM. Nuestra investigación se centra en la innovación educativa, la gamificación, los juegos serios, las salas de escape, la inteligencia artificial en la educación, la educación telemática y la investigación y el desarrollo en la educación.",
     keywords: "investigación, publicaciones, impacto, salas de escape, aprendizaje, inteligencia artificial, juegos serios, gamificación, innovación educativa, educación, telemática",
    },
  },
  events: {
    en: {
      title: "Events and news - Cyberaula UPM",
      description: "Discover workshops and participatory design activities.",
      keywords: "events,news",
    },
    es: {
      title: "Eventos y noticias - Cyberaula UPM",
      description: "Descubre talleres, eventos y noticias.",
			keywords: "eventos, noticias",
    },
  },
  tools: {
    en: {
      title: "Tools - Cyberaula UPM",       
        description: "Learn about the tools and resources developed by Cyberaula UPM. These tools are designed to improve the learning experience of strudents, and help teachers in the development of content and educational activities.",
        keywords: "tools, resources, programs, software",
    },              

    es: {
        title: "Herramientas - Cyberaula UPM",
        description: "Conoce las herramientas y recursos desarrollados por Cyberaula UPM. Estas herramientas están diseñadas para mejorar la experiencia de aprendizaje de los estudiantes y ayudar a los profesores en el desarrollo de contenidos y actividades educativas.",
        keywords: "herramientas, recursos, programas, softwware",
    },
  },
  contact: {
    en: {
      title: "Contact us - Cyberaula UPM",
      description: "Get in touch with us for enquiries or possible colaborations. In the CyberAula group we are open to work together with other groups or educational institutions, as well as the participation in european or national projects ",
      keywords: "contact, enquiry, collaboration, projects, educational institutions",
    },
    es: {
      title: "Contacto - Cyberaula UPM",
      description: "Ponte en contacto con nosotros para cualquier consulta o posibilidad de colaboración. En el grupo CyberAula estamos abiertos a colaborar con grupos e instituciones educativas, y a la participación en proyectos europeos y nacionales.",
      keywords: "contacto, consulta, colaboración, proyectos, instituciones educativas",
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