<script>
  import { locale, setLocale } from '$lib/i18n';

  const languages = [
    { code: 'pt', label: 'PT', flag: '🇧🇷' },
    { code: 'en', label: 'EN', flag: '🇺🇸' }
  ];

  function handleChange(code) {
    setLocale(code);
  }
</script>

<div class="flex gap-2 items-center">
  {#each languages as lang}
    <button
      on:click={() => handleChange(lang.code)}
      class="flex items-center gap-1 px-3 py-1.5 rounded-lg transition-all {$locale === lang.code ? 'bg-primary-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}"
      aria-label="Switch to {lang.label}"
    >
      <span class="text-sm font-medium">{lang.label}</span>
      <span class="text-lg">{lang.flag}</span>
    </button>
  {/each}
</div>
