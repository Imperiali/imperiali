<script>
  import { onMount, onDestroy } from 'svelte';

  export let recommendations = [];
  
  let currentIndex = 0;
  let cardsPerView = 3;
  let autoplayInterval;
  let isPaused = false;

  $: totalSlides = Math.ceil(recommendations.length / cardsPerView);
  $: canGoPrev = currentIndex > 0;
  $: canGoNext = currentIndex < totalSlides - 1;

  function updateCardsPerView() {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) {
        cardsPerView = 1;
      } else if (window.innerWidth < 1024) {
        cardsPerView = 2;
      } else {
        cardsPerView = 3;
      }
    }
  }

  function goToPrev() {
    if (canGoPrev) {
      currentIndex--;
    }
  }

  function goToNext() {
    if (canGoNext) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
  }

  function goToSlide(index) {
    currentIndex = index;
  }

  function startAutoplay() {
    if (autoplayInterval) clearInterval(autoplayInterval);
    autoplayInterval = setInterval(() => {
      if (!isPaused) {
        goToNext();
      }
    }, 5000);
  }

  function stopAutoplay() {
    if (autoplayInterval) {
      clearInterval(autoplayInterval);
    }
  }

  onMount(() => {
    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    startAutoplay();
  });

  onDestroy(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', updateCardsPerView);
    }
    stopAutoplay();
  });
</script>

<div 
  class="relative"
  on:mouseenter={() => isPaused = true}
  on:mouseleave={() => isPaused = false}
>
  <div class="overflow-hidden">
    <div 
      class="flex transition-transform duration-500 ease-in-out gap-6"
      style="transform: translateX(-{currentIndex * 100}%)"
    >
      {#each recommendations as recommendation}
        <div 
          class="flex-shrink-0"
          style="width: calc((100% - {(cardsPerView - 1) * 1.5}rem) / {cardsPerView})"
        >
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

  {#if canGoPrev}
    <button
      on:click={goToPrev}
      class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors z-10"
      aria-label="Previous recommendations"
    >
      <svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  {/if}

  {#if canGoNext}
    <button
      on:click={goToNext}
      class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors z-10"
      aria-label="Next recommendations"
    >
      <svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  {/if}

  <div class="flex justify-center gap-2 mt-8">
    {#each Array(totalSlides) as _, index}
      <button
        on:click={() => goToSlide(index)}
        class="w-2.5 h-2.5 rounded-full transition-all {currentIndex === index ? 'bg-primary-600 dark:bg-primary-500 w-8' : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'}"
        aria-label="Go to slide {index + 1}"
      />
    {/each}
  </div>
</div>
