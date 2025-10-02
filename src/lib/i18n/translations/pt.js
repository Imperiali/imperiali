export default {
  nav: {
    about: 'Sobre',
    experience: 'Experiência',
    skills: 'Skills',
    projects: 'Projetos',
    recommendations: 'Recomendações',
    contact: 'Contato'
  },
  hero: {
    badge: 'Disponível para Freelance & Mentoria',
    title: 'Software Engineer',
    titleHighlight: 'Specialist',
    description: 'Engenheiro de software com foco em front-end e experiência fullstack. Comprometido em usar tecnologia para melhorar o mundo, facilitando processos e entregando soluções criativas e eficientes.',
    ctaPrimary: 'Entrar em Contato',
    ctaSecondary: 'Ver LinkedIn',
    location: 'Rio de Janeiro, RJ',
    currentRole: 'Accenture Song - Product Engineering Specialist'
  },
  about: {
    title: 'Sobre Mim',
    card1: {
      title: 'Tech Lead & Mentor',
      description: 'Liderança técnica em projetos complexos de modernização. Innovation Ambassador com foco em LLMs e aumento de produtividade (40%+).'
    },
    card2: {
      title: 'Fullstack Expert',
      description: 'Experiência sólida em React, Vue, Django, Node.js e Go. Arquitetura de microservices e integrações complexas.'
    },
    card3: {
      title: 'Inovação & IA',
      description: 'Pioneiro na adoção de LLMs no desenvolvimento. POCs e treinamentos com Cursor, Windsurf e arquiteturas multi-agente.'
    }
  },
  experience: {
    title: 'Experiência Profissional',
    present: 'Presente',
    timeline: [
      {
        role: 'Product Engineering Specialist',
        company: 'Accenture Song',
        period: 'Nov 2024 - Presente',
        description: 'Tech Lead em modernização de plataforma Sky/DirecTV (Vrio) com Django. Arquitetura de microservices para broadcasting com integrações complexas.',
        achievements: [
          'Tech Lead em modernização de plataforma Sky/DirecTV (Vrio) com Django',
          'Arquitetura de microservices para broadcasting com integrações UDP, TCP e SOAP',
          'Processamento assíncrono com Celery e APIs RESTful com Django Rest Framework',
          'Innovation Ambassador: Liderou adoção de LLMs com 40% de aumento de produtividade'
        ],
        technologies: ['Django', 'Python', 'Celery', 'UDP/TCP', 'SOAP', 'REST', 'Microservices', 'LLMs', 'Cursor']
      },
      {
        role: 'Senior Software Engineer',
        company: 'Iteris Consultoria e Software',
        period: 'Ago 2023 - Nov 2024',
        description: 'Desenvolvimento fullstack em projetos de grande escala para clientes como Modec e Globo. Foco em arquiteturas modernas e cloud.',
        achievements: [
          'Shape Digital (Modec): Fullstack em Python com clean architecture e React',
          'Globo (GAMA): Desenvolvimento em Go, Python e React para plataforma de mídia',
          'Implementação de infraestrutura GCP com Terraform',
          'Desenvolvimento de ferramentas AdTech'
        ],
        technologies: ['Python', 'Go', 'React', 'Terraform', 'GCP', 'Clean Architecture', 'AdTech']
      },
      {
        role: 'Fullstack Software Engineer',
        company: 'Hurb',
        period: 'Ago 2020 - Jul 2023',
        description: 'Desenvolvimento fullstack em plataforma de turismo. Modernização de checkout e implementação de arquiteturas avançadas.',
        achievements: [
          'Modernização completa do checkout em Next.js e microservices Node',
          'Desenvolvimento de módulo GraphQL para backend',
          'Implementação de Factory Pattern para páginas dinâmicas',
          'Integração com Google Maps API, Elasticsearch e mensageria NSQ/MongoDB'
        ],
        technologies: ['Next.js', 'Node.js', 'GraphQL', 'MongoDB', 'Elasticsearch', 'NSQ', 'Google Maps API', 'Microservices']
      },
      {
        role: 'FullStack Developer',
        company: 'Estante Virtual',
        period: 'Jul 2018 - Ago 2020',
        description: 'Desenvolvimento fullstack em marketplace de livros usados. Participação em aquisição por Magazine Luiza.',
        achievements: [
          'Sistema de onboarding durante aquisição por Magazine Luiza (Vue + Django)',
          'Desenvolvimento do admin da empresa do zero em Django',
          'Implementação de checkout white label com arquitetura hexagonal',
          'Migração de Livraria da Cultura para plataforma Vtex'
        ],
        technologies: ['Vue.js', 'Django', 'Python', 'Vtex', 'Hexagonal Architecture', 'MySQL']
      }
    ],
    accenture: {
      company: 'Accenture Song',
      role: 'Product Engineering Specialist',
      period: 'Nov 2024',
      items: [
        '<strong>Tech Lead</strong> em modernização de plataforma Sky/DirecTV (Vrio) com Django',
        'Arquitetura de microservices para broadcasting com integrações UDP, TCP e SOAP',
        'Processamento assíncrono com Celery e APIs RESTful com Django Rest Framework',
        '<strong>Innovation Ambassador:</strong> Liderou adoção de LLMs (40% aumento produtividade)'
      ]
    },
    iteris: {
      company: 'Iteris Consultoria e Software',
      role: 'Senior Software Engineer',
      period: 'Ago 2023 - Nov 2024',
      items: [
        '<strong>Shape Digital (Modec):</strong> Fullstack em Python (clean architecture) e React',
        '<strong>Globo (GAMA):</strong> Desenvolvimento em Go, Python e React',
        'Terraform para infraestrutura GCP e ferramentas AdTech'
      ]
    },
    hurb: {
      company: 'Hurb',
      role: 'Fullstack Software Engineer',
      period: 'Ago 2020 - Jul 2023',
      items: [
        'Modernização de checkout em <strong>Next.js</strong> e microservices <strong>Node</strong>',
        'Módulo <strong>GraphQL</strong> para backend e Factory Pattern para páginas dinâmicas',
        'Integração com Google Maps API, Elasticsearch e mensageria NSQ/MongoDB'
      ]
    },
    estante: {
      company: 'Estante Virtual',
      role: 'FullStack Developer',
      period: 'Jul 2018 - Ago 2020',
      items: [
        'Sistema de onboarding durante aquisição por Magazine Luiza (Vue + Django)',
        'Admin da empresa do zero em Django e checkout white label com arquitetura hexagonal',
        'Migração de Livraria da Cultura para plataforma Vtex'
      ]
    }
  },
  skills: {
    title: 'Stack Técnico',
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Database & Infra',
    integrations: 'Integrations & AI',
    methodologies: 'Metodologias & Arquiteturas'
  },
  projects: {
    title: 'Projetos em Destaque',
    subtitle: 'Alguns dos projetos que desenvolvi',
    viewCode: 'Ver Código',
    viewDemo: 'Ver Demo',
    viewMore: 'Ver Mais Projetos',
    items: [
      {
        title: 'Git Find',
        description: 'Aplicação web para buscar repositórios do GitHub e exibir detalhes como stars, forks e linguagens. Interface moderna com Vue.js e integração com GitHub API.',
        tech: ['Vue.js', 'GitHub API', 'JavaScript', 'CSS'],
        github: 'https://github.com/Imperiali/git-find',
        demo: null,
        icon: 'search'
      },
      {
        title: 'Weather App',
        description: 'Aplicação de previsão do tempo com interface intuitiva e dados em tempo real. Mostra temperatura, condições climáticas e previsões para múltiplas cidades.',
        tech: ['JavaScript', 'Weather API', 'HTML', 'CSS'],
        github: 'https://github.com/Imperiali/weather-app',
        demo: null,
        icon: 'weather'
      },
      {
        title: 'Great Places',
        description: 'App mobile Flutter para gerenciar lugares favoritos com recursos nativos do dispositivo. Utiliza câmera, localização e armazenamento local.',
        tech: ['Flutter', 'Dart', 'SQLite', 'Google Maps'],
        github: 'https://github.com/Imperiali/great-places',
        demo: null,
        icon: 'location'
      },
      {
        title: 'Shop App',
        description: 'Marketplace completo desenvolvido em Flutter com carrinho de compras, sistema de pedidos e gerenciamento de produtos. Interface moderna e responsiva.',
        tech: ['Flutter', 'Dart', 'Firebase', 'State Management'],
        github: 'https://github.com/Imperiali/shopapp',
        demo: null,
        icon: 'shopping'
      }
    ]
  },
  recommendations: {
    title: 'Recomendações',
    subtitle: 'O que colegas e líderes dizem sobre meu trabalho',
    linkedinButton: 'Ver mais no LinkedIn',
    items: [
      {
        name: 'Matheus Grilo',
        role: 'Front-End Engineer | React, Vue.js, Next.js',
        date: 'Agosto 2023',
        text: 'Trabalhar com o Igor na Estante Virtual foi uma experiência incrível! Sua dedicação e habilidades como desenvolvedor Front-End sempre foram admiráveis. Juntos, enfrentamos desafios complexos e entregamos soluções criativas. Sua paixão pela tecnologia e sua disposição em ajudar os colegas tornaram o ambiente de trabalho mais inspirador. Além disso, sua capacidade de análise e resolução de problemas foi fundamental para o sucesso de diversos projetos. Igor é um profissional talentoso e uma pessoa de grande coração. Tenho sorte de ter compartilhado essa jornada ao seu lado na Estante Virtual!'
      },
      {
        name: 'Leandro Pires de Souza',
        role: 'Software Engineer | React JS/Native | Next.js | Node JS | Typescript',
        date: 'Junho 2023',
        text: 'Igor é um profissional extremamente competente, empático, prático e crítico. Sempre capaz de fornecer ótimos pontos nas discussões sem medo de contrapor e defender suas ideias de forma racional e educada, sua habilidade comunicativa ajuda bastante em relação a isso. Ele consegue realizar entregas de forma rápida e prática, sempre prezando pela maior entrega de valor e menor esforço sem abrir mão de qualidade. Além de sua capacidade de manter o ambiente de trabalho leve com seu bom humor.'
      },
      {
        name: 'Daniela Rocha Silva',
        role: 'Backend Software Engineer @AvenueCode',
        date: 'Junho 2023',
        text: 'Imperiali, meu querido! Tive o prazer de trabalhar com ele por pelo menos um ano no time de Discovery (@Hurb) e posso afirmar que sua atitude crítica e assertiva é um diferencial. Sempre disposto a ajudar a equipe e a empresa, é um ótimo parceiro de desenvolvimento aos mais Juniores. É confiável, disponível e se destaca por sua habilidade de se comunicar de forma eficiente com diversas áreas, adaptando seu vocabulário técnico. Tenho certeza que será um valioso membro em qualquer equipe.'
      },
      {
        name: 'Haroldo Pina',
        role: 'Product Manager | Digital | e-Commerce | Agile',
        date: 'Setembro 2020',
        text: 'O Imperiali é um jovem profissional habilmente proativo e versátil. Em aproximadamente 8 meses que trabalhamos juntos na Estante Virtual demostrou facilidade em desenvolver tanto front-end como back-end. Destacava-se por não se limitar ao cumprimento das tarefas, por seu bom humor rotineiro e pelo seu perfil argumentador. Recomendo o trabalho do Imperiali.'
      },
      {
        name: 'Renato Freitas',
        role: 'Senior Frontend Developer | Tech Lead | React | Vue | Angular | Typescript',
        date: 'Setembro 2020',
        text: 'Foi um prazer trabalhar com o Igor. Dedicado e transparente, ele faz seu papel de desenvolvedor como ninguém. Um cara voltado ao Front e Back com grande curiosidade nas novas tendências de mercado e aprender.'
      },
      {
        name: 'Leonardo Nascimento',
        role: 'Senior Manager @ Capgemini Engineering | Automotive Embedded Software',
        date: 'Agosto 2020',
        text: 'I had the opportunity to teach several subjects to Igor while I was a professor at Instituto Infnet. He always stood out in his class, not only for the technical quality of the solutions presented, but also for the ease with which he interacted with all the other colleagues. He is a dedicated person who learns very easily. I definitely recommend Igor for any job.'
      },
      {
        name: 'Elomar Nascimento dos Santos',
        role: 'Senior Software Engineer at Fohr',
        date: 'Agosto 2020',
        text: 'Tive o prazer de trabalhar com o Igor por 2 anos, e foi uma ótima experiência. Além de ser um profissional com amplo domínio técnico, é alguém que está sempre disposto a aprender coisas novas, e zelar pela qualidade do produto. É também é uma pessoa extremamente fácil de lidar no aspecto humano, o que facilita bastante o dia a dia.'
      }
    ]
  },
  contact: {
    title: 'Vamos Trabalhar Juntos?',
    description: 'Estou disponível para projetos freelance, consultoria técnica e mentoria em desenvolvimento de software.',
    card1: {
      title: 'Freelance & Consultoria',
      description: 'Desenvolvimento de aplicações web modernas, arquitetura de sistemas, e modernização de legado.'
    },
    card2: {
      title: 'Mentoria Técnica',
      description: 'Orientação em carreira, code review, melhores práticas e adoção de novas tecnologias.'
    },
    emailButton: 'Enviar Email',
    linkedinButton: 'LinkedIn',
    locationText: 'Rio de Janeiro, RJ - Brasil',
    form: {
      title: 'Envie uma Mensagem',
      name: 'Nome',
      namePlaceholder: 'Seu nome completo',
      email: 'Email',
      emailPlaceholder: 'seu@email.com',
      service: 'Tipo de Serviço',
      serviceFreelance: 'Projeto Freelance',
      serviceMentoring: 'Mentoria',
      serviceConsulting: 'Consultoria',
      serviceOther: 'Outro',
      message: 'Mensagem',
      messagePlaceholder: 'Conte-me sobre seu projeto ou necessidade...',
      submit: 'Enviar Mensagem',
      sending: 'Enviando...',
      successMessage: 'Mensagem enviada com sucesso! Entrarei em contato em breve.',
      errorMessage: 'Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato pelo email.'
    }
  },
  footer: {
    rights: 'Todos os direitos reservados.'
  }
};
