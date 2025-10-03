export default {
  nav: {
    about: 'About',
    experience: 'Experience',
    skills: 'Skills',
    projects: 'Projects',
    recommendations: 'Recommendations',
    contact: 'Contact'
  },
  hero: {
    badge: 'Available for Freelance & Mentoring',
    title: 'Software Engineer',
    titleHighlight: 'Specialist',
    description: 'Software engineer focused on front-end with fullstack experience. Committed to using technology to improve the world, streamlining processes and delivering creative and efficient solutions.',
    ctaPrimary: 'Get in Touch',
    ctaSecondary: 'View LinkedIn',
    location: 'Rio de Janeiro, RJ',
    currentRole: 'Accenture Song - Product Engineering Specialist'
  },
  about: {
    title: 'About Me',
    card1: {
      title: 'Tech Lead & Mentor',
      description: 'Technical leadership in complex modernization projects. Innovation Ambassador focused on LLMs and productivity increase (40%+).'
    },
    card2: {
      title: 'Fullstack Expert',
      description: 'Solid experience in React, Vue, Django, Node.js and Go. Microservices architecture and complex integrations.'
    },
    card3: {
      title: 'Innovation & AI',
      description: 'Pioneer in adopting LLMs in development. POCs and training with Cursor, Windsurf and multi-agent architectures.'
    }
  },
  experience: {
    title: 'Professional Journey',
    subtitle: 'My journey in software development',
    present: 'Present',
    timeline: [
      {
        role: 'Product Engineering Specialist',
        company: 'Accenture Song',
        period: 'Nov 2024 - Present',
        description: 'Tech Lead in Sky/DirecTV (Vrio) platform modernization with Django. Microservices architecture for broadcasting with complex integrations.',
        achievements: [
          'Tech Lead in Sky/DirecTV (Vrio) platform modernization with Django',
          'Microservices architecture for broadcasting with UDP, TCP and SOAP integrations',
          'Asynchronous processing with Celery and RESTful APIs with Django Rest Framework',
          'Innovation Ambassador: Led LLMs adoption with 40% productivity increase'
        ],
        technologies: ['Django', 'Python', 'Celery', 'UDP/TCP', 'SOAP', 'REST', 'Microservices', 'LLMs', 'Windsurf']
      },
      {
        role: 'Senior Software Engineer',
        company: 'Iteris Consultoria e Software',
        period: 'Aug 2023 - Nov 2024',
        description: 'Fullstack development in large-scale projects for clients like Modec and Globo. Focus on modern architectures and cloud.',
        achievements: [
          'Shape Digital (Modec): Fullstack in Python with clean architecture and React',
          'Globo (GAMA): Development in Go, Python and React for media platform',
          'GCP infrastructure implementation with Terraform',
          'AdTech tools development'
        ],
        technologies: ['Python', 'Go', 'React', 'Terraform', 'GCP', 'Clean Architecture', 'AdTech']
      },
      {
        role: 'Fullstack Software Engineer',
        company: 'Hurb',
        period: 'Aug 2020 - Jul 2023',
        description: 'Fullstack development in tourism platform. Checkout modernization and implementation of advanced architectures.',
        achievements: [
          'Complete checkout modernization in Next.js and Node microservices',
          'Development of GraphQL module for backend',
          'Implementation of Factory Pattern for dynamic pages',
          'Integration with Google Maps API, Elasticsearch and NSQ/MongoDB messaging'
        ],
        technologies: ['Next.js', 'Node.js', 'GraphQL', 'MongoDB', 'Elasticsearch', 'NSQ', 'Google Maps API', 'Microservices']
      },
      {
        role: 'FullStack Developer',
        company: 'Estante Virtual',
        period: 'Jul 2018 - Aug 2020',
        description: 'Fullstack development in used books marketplace. Participation in acquisition by Magazine Luiza.',
        achievements: [
          'Onboarding system during Magazine Luiza acquisition (Vue + Django)',
          'Company admin development from scratch in Django',
          'White label checkout implementation with hexagonal architecture',
          'Migration of Livraria da Cultura to Vtex platform'
        ],
        technologies: ['Vue.js', 'Django', 'Python', 'Vtex', 'Hexagonal Architecture', 'MySQL']
      }
    ],
    accenture: {
      company: 'Accenture Song',
      role: 'Product Engineering Specialist',
      period: 'Nov 2024',
      items: [
        'Microservices architecture for broadcasting with UDP, TCP and SOAP integrations',
        'Asynchronous processing with Celery and RESTful APIs with Django Rest Framework',
        '<strong>Innovation Ambassador:</strong> Led LLMs adoption (40% productivity increase)'
      ]
    },
    iteris: {
      company: 'Iteris Consultoria e Software',
      role: 'Senior Software Engineer',
      period: 'Aug 2023 - Nov 2024',
      items: [
        '<strong>Shape Digital (Modec):</strong> Fullstack in Python (clean architecture) and React',
        '<strong>Globo (GAMA):</strong> Development in Go, Python and React',
        'Terraform for GCP infrastructure and AdTech tools'
      ]
    },
    hurb: {
      company: 'Hurb',
      role: 'Fullstack Software Engineer',
      period: 'Aug 2020 - Jul 2023',
      items: [
        'Checkout modernization in <strong>Next.js</strong> and <strong>Node</strong> microservices',
        '<strong>GraphQL</strong> module for backend and Factory Pattern for dynamic pages',
        'Integration with Google Maps API, Elasticsearch and NSQ/MongoDB messaging'
      ]
    },
    estante: {
      company: 'Estante Virtual',
      role: 'FullStack Developer',
      period: 'Jul 2018 - Aug 2020',
      items: [
        'Onboarding system during Magazine Luiza acquisition (Vue + Django)',
        'Company admin from scratch in Django and white label checkout with hexagonal architecture',
        'Migration of Livraria da Cultura to Vtex platform'
      ]
    }
  },
  skills: {
    title: 'Tech Stack',
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Database & Infra',
    integrations: 'Integrations & AI',
    methodologies: 'Methodologies & Architecture'
  },
  projects: {
    title: 'Featured Projects',
    subtitle: 'Some of the projects I\'ve developed',
    viewCode: 'View Code',
    viewDemo: 'View Demo',
    viewMore: 'View More Projects',
    items: [
      {
        title: 'Git Find',
        description: 'Web application to search GitHub repositories and display details such as stars, forks and languages. Modern interface with Vue.js and GitHub API integration.',
        tech: ['Vue.js', 'GitHub API', 'JavaScript', 'CSS'],
        github: 'https://github.com/Imperiali/git-find',
        demo: null,
        icon: 'search'
      },
      {
        title: 'Weather App',
        description: 'Weather forecast application with intuitive interface and real-time data. Shows temperature, weather conditions and forecasts for multiple cities.',
        tech: ['JavaScript', 'Weather API', 'HTML', 'CSS'],
        github: 'https://github.com/Imperiali/weather-app',
        demo: null,
        icon: 'weather'
      },
      {
        title: 'Great Places',
        description: 'Flutter mobile app to manage favorite places with native device features. Uses camera, location and local storage.',
        tech: ['Flutter', 'Dart', 'SQLite', 'Google Maps'],
        github: 'https://github.com/Imperiali/great-places',
        demo: null,
        icon: 'location'
      },
      {
        title: 'Shop App',
        description: 'Complete marketplace developed in Flutter with shopping cart, order system and product management. Modern and responsive interface.',
        tech: ['Flutter', 'Dart', 'Firebase', 'State Management'],
        github: 'https://github.com/Imperiali/shopapp',
        demo: null,
        icon: 'shopping'
      }
    ]
  },
  recommendations: {
    title: 'Recommendations',
    subtitle: 'What colleagues and leaders say about my work',
    linkedinButton: 'View more on LinkedIn',
    items: [
      {
        name: 'Matheus Grilo',
        role: 'Front-End Engineer | React, Vue.js, Next.js',
        date: 'August 2023',
        text: 'Working with Igor at Estante Virtual was an incredible experience! His dedication and skills as a Front-End developer were always admirable. Together, we faced complex challenges and delivered creative solutions. His passion for technology and willingness to help colleagues made the work environment more inspiring. Moreover, his ability to analyze and solve problems was fundamental to the success of several projects. Igor is a talented professional and a person with a big heart. I am lucky to have shared this journey with him at Estante Virtual!'
      },
      {
        name: 'Leandro Pires de Souza',
        role: 'Software Engineer | React JS/Native | Next.js | Node JS | Typescript',
        date: 'June 2023',
        text: 'Igor is an extremely competent, empathetic, practical and critical professional. Always able to provide great points in discussions without fear of opposing and defending his ideas in a rational and polite way, his communicative ability helps a lot in this regard. He is able to deliver quickly and practically, always aiming for the greatest delivery of value and least effort without sacrificing quality. In addition to his ability to keep the work environment light with his good humor.'
      },
      {
        name: 'Daniela Rocha Silva',
        role: 'Backend Software Engineer @AvenueCode',
        date: 'June 2023',
        text: 'Imperiali, my dear! I had the pleasure of working with him for at least a year on the Discovery team (@Hurb) and I can say that his critical and assertive attitude is a differential. Always willing to help the team and the company, he is a great development partner for Juniors. He is reliable, available and stands out for his ability to communicate efficiently with different areas, adapting his technical vocabulary. I am sure he will be a valuable member of any team.'
      },
      {
        name: 'Haroldo Pina',
        role: 'Product Manager | Digital | e-Commerce | Agile',
        date: 'September 2020',
        text: 'Imperiali is a skillfully proactive and versatile young professional. In approximately 8 months that we worked together at Estante Virtual, he demonstrated ease in developing both front-end and back-end. He stood out for not limiting himself to completing tasks, for his routine good humor and for his argumentative profile. I recommend Imperiali\'s work.'
      },
      {
        name: 'Renato Freitas',
        role: 'Senior Frontend Developer | Tech Lead | React | Vue | Angular | Typescript',
        date: 'September 2020',
        text: 'It was a pleasure working with Igor. Dedicated and transparent, he plays his role as a developer like no one else. A guy focused on Front and Back with great curiosity about new market trends and learning.'
      },
      {
        name: 'Leonardo Nascimento',
        role: 'Senior Manager @ Capgemini Engineering | Automotive Embedded Software',
        date: 'August 2020',
        text: 'I had the opportunity to teach several subjects to Igor while I was a professor at Instituto Infnet. He always stood out in his class, not only for the technical quality of the solutions presented, but also for the ease with which he interacted with all the other colleagues. He is a dedicated person who learns very easily. I definitely recommend Igor for any job.'
      },
      {
        name: 'Elomar Nascimento dos Santos',
        role: 'Senior Software Engineer at Fohr',
        date: 'August 2020',
        text: 'I had the pleasure of working with Igor for 2 years, and it was a great experience. In addition to being a professional with broad technical expertise, he is someone who is always willing to learn new things and care about product quality. He is also an extremely easy person to deal with on the human aspect, which makes everyday life much easier.'
      }
    ]
  },
  contact: {
    title: 'Let\'s Work Together?',
    description: 'I\'m available for freelance projects, technical consulting and mentoring in software development.',
    card1: {
      title: 'Freelance & Consulting',
      description: 'Modern web application development, system architecture, and legacy modernization.'
    },
    card2: {
      title: 'Technical Mentoring',
      description: 'Career guidance, code review, best practices and adoption of new technologies.'
    },
    emailButton: 'Send Email',
    linkedinButton: 'LinkedIn',
    locationText: 'Rio de Janeiro, RJ - Brazil',
    form: {
      title: 'Send a Message',
      name: 'Name',
      namePlaceholder: 'Your full name',
      email: 'Email',
      emailPlaceholder: 'your@email.com',
      service: 'Service Type',
      serviceFreelance: 'Freelance Project',
      serviceMentoring: 'Mentoring',
      serviceConsulting: 'Consulting',
      serviceOther: 'Other',
      message: 'Message',
      messagePlaceholder: 'Tell me about your project or need...',
      submit: 'Send Message',
      sending: 'Sending...',
      successMessage: 'Message sent successfully! I\'ll get back to you soon.',
      errorMessage: 'Error sending message. Please try again or contact me via email.'
    }
  },
  footer: {
    rights: 'All rights reserved.'
  }
};
