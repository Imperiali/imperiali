<script>
  import { onMount } from 'svelte';
  import { theme } from '$lib/stores/theme';
  import '../app.css';

  onMount(() => {
    theme.init();
  });
</script>

<slot />
