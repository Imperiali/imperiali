<script>
  import emblaCarouselSvelte from 'embla-carousel-svelte';
  import Autoplay from 'embla-carousel-autoplay';
  
  export let recommendations = [];
  
  let emblaApi;
  let selectedIndex = 0;
  let scrollSnaps = [];
  let isMobile = false;
  
  const options = {
    loop: true,
    align: 'start',
    skipSnaps: false,
    slidesToScroll: 1,
    dragFree: false,
    containScroll: 'trimSnaps'
  };
  
  const plugins = [
    Autoplay({ delay: 5000, stopOnInteraction: false })
  ];
  
  function onInit(event) {
    emblaApi = event.detail;
    scrollSnaps = emblaApi.scrollSnapList();
    updateSelectedIndex();
    
    emblaApi.on('select', updateSelectedIndex);
    emblaApi.on('reInit', () => {
      scrollSnaps = emblaApi.scrollSnapList();
      updateSelectedIndex();
    });
  }
  
  function updateSelectedIndex() {
    if (emblaApi) {
      selectedIndex = emblaApi.selectedScrollSnap();
    }
  }
  
  function scrollPrev() {
    if (emblaApi) emblaApi.scrollPrev();
  }
  
  function scrollNext() {
    if (emblaApi) emblaApi.scrollNext();
  }
  
  function scrollTo(index) {
    if (emblaApi) emblaApi.scrollTo(index);
  }
  
  function updateBreakpoint() {
    if (typeof window !== 'undefined') {
      isMobile = window.innerWidth < 768;
    }
  }
  
  import { onMount, onDestroy } from 'svelte';
  
  onMount(() => {
    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);
  });
  
  onDestroy(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', updateBreakpoint);
    }
  });
</script>

<div class="relative">
  <div 
    class="embla overflow-hidden" 
    use:emblaCarouselSvelte="{{ options, plugins }}" 
    on:emblaInit={onInit}
  >
    <div class="embla__container flex gap-6">
      {#each recommendations as recommendation}
        <div class="embla__slide flex-[0_0_100%] md:flex-[0_0_calc(50%-1.5rem)] lg:flex-[0_0_calc(33.333%-1rem)] min-w-0 px-2 md:px-0">
          <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow h-full">
            <div class="flex items-start gap-4 mb-4">
              <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                <span class="text-primary-600 dark:text-primary-400 text-xl font-bold">{recommendation.name.charAt(0)}</span>
              </div>
              <div class="flex-1">
                <h4 class="font-bold text-gray-900 dark:text-gray-100">{recommendation.name}</h4>
                <p class="text-sm text-gray-600 dark:text-gray-300">{recommendation.role}</p>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">{recommendation.date}</p>
              </div>
            </div>
            <div class="relative">
              <svg class="w-8 h-8 text-primary-200 absolute -top-2 -left-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed pl-6">{recommendation.text}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <button
    on:click={scrollPrev}
    class="absolute {isMobile ? 'left-2' : 'left-0 -translate-x-4'} top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors z-10"
    aria-label="Previous recommendations"
  >
    <svg class="w-5 h-5 md:w-6 md:h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
    </svg>
  </button>

  <button
    on:click={scrollNext}
    class="absolute {isMobile ? 'right-2' : 'right-0 translate-x-4'} top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors z-10"
    aria-label="Next recommendations"
  >
    <svg class="w-5 h-5 md:w-6 md:h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>
  </button>

  <div class="flex justify-center gap-2 mt-8">
    {#each scrollSnaps as _, index}
      <button
        on:click={() => scrollTo(index)}
        class="w-2.5 h-2.5 rounded-full transition-all {selectedIndex === index ? 'bg-primary-600 dark:bg-primary-500 w-8' : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'}"
        aria-label="Go to slide {index + 1}"
      />
    {/each}
  </div>
</div>

<style>
  .embla {
    cursor: grab;
  }
  
  .embla:active {
    cursor: grabbing;
  }
</style>
