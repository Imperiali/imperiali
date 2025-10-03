<script>
  export let items = [];
</script>

<div class="relative">
  <div class="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 via-blue-500 to-purple-600"></div>
  
  <div class="space-y-8 md:space-y-12">
    {#each items as item, index}
      <div class="relative pl-12 md:pl-20 group">
        <div class="absolute left-2 md:left-4 w-6 h-6 md:w-8 md:h-8 bg-white dark:bg-gray-800 border-2 md:border-4 border-primary-600 dark:border-primary-500 rounded-full group-hover:scale-125 transition-transform duration-300 flex items-center justify-center">
          <div class="w-2 h-2 md:w-3 md:h-3 bg-primary-600 dark:bg-primary-500 rounded-full"></div>
        </div>
        
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 p-4 md:p-6 border border-gray-100 dark:border-gray-700 group-hover:border-primary-300 dark:group-hover:border-primary-600">
          <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-4 mb-3">
            <div class="flex-1 min-w-0">
              <h4 class="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">{item.role}</h4>
              <p class="text-primary-600 dark:text-primary-400 font-semibold text-sm md:text-base">{item.company}</p>
            </div>
            <span class="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg text-xs md:text-sm font-medium self-start">
              <svg class="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {item.period}
            </span>
          </div>
          
          <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm md:text-base">{item.description}</p>
          
          {#if item.achievements && item.achievements.length > 0}
            <div class="space-y-1.5 md:space-y-2">
              {#each item.achievements as achievement}
                <div class="flex items-start gap-2">
                  <svg class="w-4 h-4 md:w-5 md:h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p class="text-gray-700 dark:text-gray-300 text-xs md:text-sm">{achievement}</p>
                </div>
              {/each}
            </div>
          {/if}
          
          {#if item.technologies && item.technologies.length > 0}
            <div class="flex flex-wrap gap-1.5 md:gap-2 mt-3 md:mt-4 pt-3 md:pt-4 border-t border-gray-100 dark:border-gray-700">
              {#each item.technologies as tech}
                <span class="px-2 md:px-3 py-0.5 md:py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium">
                  {tech}
                </span>
              {/each}
            </div>
          {/if}
        </div>
      </div>
    {/each}
  </div>
</div>
