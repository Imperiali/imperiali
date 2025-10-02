<script>
  import { t } from '$lib/i18n';
  import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';
  import RecommendationsCarousel from '$lib/components/RecommendationsCarousel.svelte';
  import ProjectIcons from '$lib/components/ProjectIcons.svelte';
  import ContactForm from '$lib/components/ContactForm.svelte';
  import Timeline from '$lib/components/Timeline.svelte';
</script>

<svelte:head>
  <title>Igor Imperiali - Software Engineer Specialist</title>
</svelte:head>

<div class="min-h-screen">
  <nav class="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm z-50">
    <div class="section-container py-4">
      <div class="flex justify-between items-center">
        <h1 class="text-2xl font-bold gradient-text">Igor Imperiali</h1>
        <div class="flex items-center gap-6">
          <div class="hidden md:flex items-center gap-6 text-gray-900 dark:text-gray-100">
            <a href="#about" class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">{$t('nav.about')}</a>
            <a href="#experience" class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">{$t('nav.experience')}</a>
            <a href="#skills" class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">{$t('nav.skills')}</a>
            <a href="#projects" class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">{$t('nav.projects')}</a>
            <a href="#recommendations" class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">{$t('nav.recommendations')}</a>
            <a href="#contact" class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">{$t('nav.contact')}</a>
          </div>
          <div class="flex items-center gap-4">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </div>
  </nav>
  <main class="pt-20">
    <section class="py-20 bg-gradient-to-br from-primary-50 via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div class="section-container">
        <div class="max-w-4xl">
          <div class="inline-block mb-4">
            <span class="px-4 py-2 bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
              {$t('hero.badge')}
            </span>
          </div>
          <h2 class="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            {$t('hero.title')}<br/>
            <span class="gradient-text">{$t('hero.titleHighlight')}</span>
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            {$t('hero.description')}
          </p>
          <div class="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              class="px-8 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
            >
              {$t('hero.ctaPrimary')}
            </a>
            <a 
              href="https://linkedin.com/in/igor-imperiali" 
              target="_blank"
              rel="noopener noreferrer"
              class="px-8 py-3 border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 rounded-lg font-medium hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors"
            >
              {$t('hero.ctaSecondary')}
            </a>
          </div>
          <div class="mt-8 flex flex-wrap gap-6 text-sm text-gray-600 dark:text-gray-400">
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{$t('hero.location')}</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>{$t('hero.currentRole')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="section-container">
        <h3 class="text-3xl font-bold mb-12 text-gray-900 dark:text-gray-100">{$t('about.title')}</h3>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h4 class="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{$t('about.card1.title')}</h4>
            <p class="text-gray-600 dark:text-gray-300">
              {$t('about.card1.description')}
            </p>
          </div>

          <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h4 class="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{$t('about.card2.title')}</h4>
            <p class="text-gray-600 dark:text-gray-300">
              {$t('about.card2.description')}
            </p>
          </div>

          <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 class="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{$t('about.card3.title')}</h4>
            <p class="text-gray-600 dark:text-gray-300">
              {$t('about.card3.description')}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="experience" class="py-20 bg-white dark:bg-gray-800">
      <div class="section-container">
        <h3 class="text-3xl font-bold mb-12 text-gray-900 dark:text-gray-100">{$t('experience.title')}</h3>
        <Timeline items={$t('experience.timeline')} />
      </div>
    </section>

    <section id="skills" class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="section-container">
        <h3 class="text-3xl font-bold mb-12 text-gray-900 dark:text-gray-100">{$t('skills.title')}</h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h4 class="text-lg font-bold mb-4 text-primary-600 dark:text-primary-400">{$t('skills.frontend')}</h4>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-full text-sm">React</span>
              <span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-full text-sm">Next.js</span>
              <span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-full text-sm">Vue.js</span>
              <span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-full text-sm">JavaScript</span>
              <span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-full text-sm">jQuery</span>
            </div>
          </div>

          <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h4 class="text-lg font-bold mb-4 text-primary-600 dark:text-primary-400">{$t('skills.backend')}</h4>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-full text-sm">Django</span>
              <span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-full text-sm">Python</span>
              <span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-full text-sm">Node.js</span>
              <span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-full text-sm">NestJS</span>
              <span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-full text-sm">Go</span>
              <span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-full text-sm">DRF</span>
            </div>
          </div>

          <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h4 class="text-lg font-bold mb-4 text-primary-600 dark:text-primary-400">{$t('skills.database')}</h4>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-full text-sm">MongoDB</span>
              <span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-full text-sm">Oracle</span>
              <span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-full text-sm">Docker</span>
              <span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-full text-sm">Terraform</span>
              <span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-full text-sm">GCP</span>
            </div>
          </div>

          <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h4 class="text-lg font-bold mb-4 text-primary-600 dark:text-primary-400">{$t('skills.integrations')}</h4>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-full text-sm">GraphQL</span>
              <span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-full text-sm">REST</span>
              <span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-full text-sm">Elasticsearch</span>
              <span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-full text-sm">Celery</span>
              <span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-full text-sm">LLMs</span>
              <span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-full text-sm">Cursor</span>
            </div>
          </div>
        </div>

        <div class="mt-12 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 p-8 rounded-xl">
          <h4 class="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">{$t('skills.methodologies')}</h4>
          <div class="flex flex-wrap gap-3">
            <span class="px-4 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg text-sm font-medium shadow-sm">Agile / Scrum</span>
            <span class="px-4 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg text-sm font-medium shadow-sm">Microservices</span>
            <span class="px-4 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg text-sm font-medium shadow-sm">Clean Architecture</span>
            <span class="px-4 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg text-sm font-medium shadow-sm">Hexagonal Architecture</span>
            <span class="px-4 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg text-sm font-medium shadow-sm">TDD</span>
          </div>
        </div>
      </div>
    </section>

    <section id="projects" class="py-20 bg-white dark:bg-gray-800">
      <div class="section-container">
        <div class="text-center mb-12">
          <h3 class="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">{$t('projects.title')}</h3>
          <p class="text-gray-600 dark:text-gray-300 text-lg">{$t('projects.subtitle')}</p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {#each $t('projects.items') as project}
            <div class="group relative bg-white dark:bg-gray-900 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 p-8">
              <div class="absolute top-8 right-8 opacity-5 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none">
                <ProjectIcons icon={project.icon} className="w-48 h-48 text-primary-600" />
              </div>
              
              <div class="relative z-10">
                <h4 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">{project.title}</h4>
                <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                
                <div class="flex flex-wrap gap-2 mb-6">
                  {#each project.tech as tech}
                    <span class="px-3 py-1.5 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-600">
                      {tech}
                    </span>
                  {/each}
                </div>

                <div class="flex gap-3">
                  {#if project.github}
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500 transition-all"
                    >
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      {$t('projects.viewCode')}
                    </a>
                  {/if}
                  {#if project.demo}
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-900 dark:bg-primary-600 text-white rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-primary-700 transition-colors"
                    >
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      {$t('projects.viewDemo')}
                    </a>
                  {/if}
                </div>
              </div>
            </div>
          {/each}
        </div>

        <div class="text-center mt-12">
          <a 
            href="https://github.com/Imperiali"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-primary-600 text-white rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            {$t('projects.viewMore')}
          </a>
        </div>
      </div>
    </section>

    <section id="recommendations" class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="section-container">
        <div class="text-center mb-12">
          <h3 class="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">{$t('recommendations.title')}</h3>
          <p class="text-gray-600 dark:text-gray-300 text-lg">{$t('recommendations.subtitle')}</p>
        </div>
        
        <div class="max-w-7xl mx-auto px-4 lg:px-12">
          <RecommendationsCarousel recommendations={$t('recommendations.items')} />
        </div>

        <div class="text-center mt-12">
          <a 
            href="https://www.linkedin.com/in/igor-imperiali/details/recommendations/" 
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            {$t('recommendations.linkedinButton')}
          </a>
        </div>
      </div>
    </section>

    <section id="contact" class="py-20 bg-white dark:bg-gray-800">
      <div class="section-container">
        <div class="text-center mb-16">
          <h3 class="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">{$t('contact.title')}</h3>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            {$t('contact.description')}
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div class="space-y-8">
            <div>
              <h4 class="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                {$t('contact.form.title')}
              </h4>
              <div class="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md">
                <ContactForm />
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <div class="bg-gradient-to-br from-primary-600 to-blue-600 text-white p-8 rounded-2xl shadow-md">
              <h4 class="text-xl font-bold mb-4">{$t('contact.card1.title')}</h4>
              <p class="text-blue-100 mb-6">
                {$t('contact.card1.description')}
              </p>
              <div class="flex flex-wrap gap-3">
                <span class="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-sm font-medium">Frontend</span>
                <span class="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-sm font-medium">Backend</span>
                <span class="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-sm font-medium">Fullstack</span>
              </div>
            </div>

            <div class="bg-gradient-to-br from-purple-600 to-indigo-600 text-white p-8 rounded-2xl shadow-md">
              <h4 class="text-xl font-bold mb-4">{$t('contact.card2.title')}</h4>
              <p class="text-purple-100 mb-6">
                {$t('contact.card2.description')}
              </p>
              <div class="flex flex-wrap gap-3">
                <span class="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-sm font-medium">Code Review</span>
                <span class="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-sm font-medium">Career</span>
                <span class="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-sm font-medium">Best Practices</span>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700">
              <h4 class="text-xl font-bold mb-6 text-gray-900 dark:text-gray-100">Outras Formas de Contato</h4>
              <div class="space-y-4">
                <a 
                  href="mailto:igor.imperiali@gmail.com"
                  class="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors group"
                >
                  <div class="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-primary-50 dark:group-hover:bg-primary-900/30 transition-colors">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p class="font-medium text-gray-900 dark:text-gray-100">Email</p>
                    <p class="text-sm text-gray-500 dark:text-gray-400">igor.imperiali@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="https://linkedin.com/in/igor-imperiali"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors group"
                >
                  <div class="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-primary-50 dark:group-hover:bg-primary-900/30 transition-colors">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="font-medium text-gray-900 dark:text-gray-100">LinkedIn</p>
                    <p class="text-sm text-gray-500 dark:text-gray-400">@igor-imperiali</p>
                  </div>
                </a>

                <div class="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <div class="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p class="font-medium text-gray-900 dark:text-gray-100">Localização</p>
                    <p class="text-sm text-gray-500 dark:text-gray-400">{$t('contact.locationText')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="bg-gray-900 text-gray-400 py-8">
    <div class="section-container">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; 2025 Igor Imperiali. {$t('footer.rights')}</p>
        <div class="flex gap-6">
          <a href="https://linkedin.com/in/igor-imperiali" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="mailto:igor.imperiali@gmail.com" class="hover:text-white transition-colors">
            Email
          </a>
        </div>
      </div>
    </div>
  </footer>
</div>
