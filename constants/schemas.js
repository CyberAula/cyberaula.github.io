// Schema.org Structured Data para SEO semántico
// https://schema.org/

export const baseOrganizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': 'Cyberaula UPM',
  'url': 'https://cyberaula.github.io/',
  'logo': 'https://cyberaula.github.io/assets/img/group-logo.png',
  'description': 'Cyberaula is an educational innovation group within the UPM (Polytechnic University of Madrid) that drives and promotes innovation in teaching and education in telematics through active methods, games, escape rooms and artificial intelligence to improve student\'smotivation and learning.',
  'sameAs': [ //SEO Description is the same for social media
    'https://https:/x.com/cyberaula',
    'https://www.youtube.com/@CyberAula',
    'https://github.com/CyberAula/'
  ],
  'foundingDate': '2021',
  
  // keywords example
  'knowsAbout': [
    'Educational Innovation',
    'Gamification',
    'Serious Games',
    'Escape Rooms',
    'Artificial Intelligence in Education',
    'Telematics Education',
    'Research and Development in Education',

  ]
};

export const homePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  'name': 'Cyberaula UPM - Home',
  'url': 'https://cyberaula.github.io/',
  'description': 'Cyberaula is an educational innovation group within the UPM (Polytechnic University of Madrid) that drives and promotes innovation in teaching and education in telematics through active methods, games, escape rooms and artificial intelligence to improve student\'smotivation and learning.',
  'publisher': baseOrganizationSchema,
  'author': baseOrganizationSchema
};

export const teamPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'TeamPage',
  'name': 'Team - Cyberaula UPM',
  'url': 'https://cyberaula.github.io/team',
  'description': "Meet our team of professors and PhD candidates. We are currently working on educational innovation projects, developing tools and resources to improve teaching and learning in telematics.",
  'mainEntity': baseOrganizationSchema
};

export const researchPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  'name': 'Research Publications - Cyberaula UPM',
  'url': 'https://cyberaula.github.io/research',
  'description': 'Explore Cyberaula UPM research publications and scientific contributions. Our research focuses on educational innovation, gamification, serious games, escape rooms, artificial intelligence in education, telematics education, and research and development in education.',
  'publisher': baseOrganizationSchema,
  'author': baseOrganizationSchema
};
export const coursesPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  'name': 'Courses - Cyberaula UPM',
  'url': 'https://cyberaula.github.io/courses',
  'description': 'Discover our latest free online courses (MOOCs) designed and launched recently. These courses cover key topics such as application development, programming technologies, databases, artificial intelligence, GitHub version control, and more. All our MOOCs are 100% free and open to learners worldwide.',
  'organizer': baseOrganizationSchema
};
export const projectsPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  'name': 'Projects - Cyberaula UPM',
  'url': 'https://cyberaula.github.io/projects',
  'description': 'At Cyberaula, we participate in various European and national projects. These projects are related to educational innovation, the use of emerging technologies in teaching and learning, and the development of open educational resources.',
  'organizer': baseOrganizationSchema
};

export const toolsPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  'name': 'Tools - Cyberaula UPM',
  'url': 'https://cyberaula.github.io/tools',
  'description': 'Discover Cyberaula UPM tools and resources developed to improve learning experience of students and help teachers in the development of content and educational activities.',
  'organizer': baseOrganizationSchema
};

export const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  'name': 'Contact us - Cyberaula UPM',
  'url': 'https://cyberaula.github.io/about',
  'description': 'Get in touch with us for enquiries or possible collaborations. In the CyberAula group we are open to work together with other groups or educational institutions, as well as the participation in european or national projects',
  'organizer': baseOrganizationSchema
};

// Breadcrumb List Schema
export function createBreadcrumbSchema(breadcrumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url
    }))
  };
}

// Event Schema para un evento específico
export function createEventSchema(event) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    'name': event.name,
    'description': event.description,
    'url': event.url,
    'startDate': event.startDate,
    'endDate': event.endDate,
    'eventStatus': 'https://schema.org/EventScheduled',
    'eventAttendanceMode': 'https://schema.org/MixedEventAttendanceMode',
    'location': {
      '@type': 'Place',
      'name': event.location,
      'address': {
        '@type': 'PostalAddress',
        'addressCountry': event.country
      }
    },
    'organizer': baseOrganizationSchema
  };
}

// Article Schema para publicaciones
export function createArticleSchema(article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    'headline': article.title,
    'description': article.abstract || article.description,
    'url': article.url,
    'author': {
      '@type': 'Person',
      'name': article.author
    },
    'datePublished': article.publishDate,
    'dateModified': article.modifiedDate || article.publishDate,
    'keywords': article.keywords,
    'publisher': baseOrganizationSchema
  };
}

