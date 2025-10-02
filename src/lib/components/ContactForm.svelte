<script>
  import { onMount } from 'svelte';
  import emailjs from '@emailjs/browser';
  import { t, locale } from '$lib/i18n';
  import { env } from '$env/dynamic/public';

  let formData = {
    name: '',
    email: '',
    service: 'freelance',
    message: ''
  };

  let isSubmitting = false;
  let submitStatus = null;
  let form;

  async function handleSubmit(e) {
    e.preventDefault();
    isSubmitting = true;
    submitStatus = null;

    try {
      await emailjs.sendForm(
        env.PUBLIC_EMAILJS_SERVICE_ID,
        env.PUBLIC_EMAILJS_TEMPLATE_ID,
        form,
        env.PUBLIC_EMAILJS_PUBLIC_KEY
      );

      await emailjs.sendForm(
        env.PUBLIC_EMAILJS_SERVICE_ID,
        env.PUBLIC_EMAILJS_AUTOREPLY_ID,
        form,
        env.PUBLIC_EMAILJS_PUBLIC_KEY
      );
      
      submitStatus = 'success';
      formData = { name: '', email: '', service: 'freelance', message: '' };
    } catch (error) {
      console.error('Error sending email:', error);
      submitStatus = 'error';
    } finally {
      isSubmitting = false;
      setTimeout(() => {
        submitStatus = null;
      }, 5000);
    }
  }
</script>

<form bind:this={form} on:submit={handleSubmit} class="space-y-6">
  <div class="grid md:grid-cols-2 gap-6">
    <div>
      <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        {$t('contact.form.name')} *
      </label>
      <input
        type="text"
        id="name"
        name="name"
        bind:value={formData.name}
        required
        class="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-500 focus:border-transparent outline-none transition-all"
        placeholder={$t('contact.form.namePlaceholder')}
      />
    </div>

    <div>
      <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        {$t('contact.form.email')} *
      </label>
      <input
        type="email"
        id="email"
        name="email"
        bind:value={formData.email}
        required
        class="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-500 focus:border-transparent outline-none transition-all"
        placeholder={$t('contact.form.emailPlaceholder')}
      />
    </div>
  </div>

  <div>
    <label for="service" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
      {$t('contact.form.service')} *
    </label>
    <select
      id="service"
      name="service"
      bind:value={formData.service}
      required
      class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
    >
      <option value="freelance">{$t('contact.form.serviceFreelance')}</option>
      <option value="mentoring">{$t('contact.form.serviceMentoring')}</option>
      <option value="consulting">{$t('contact.form.serviceConsulting')}</option>
      <option value="other">{$t('contact.form.serviceOther')}</option>
    </select>
  </div>

  <div>
    <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
      {$t('contact.form.message')} *
    </label>
    <textarea
      id="message"
      name="message"
      bind:value={formData.message}
      required
      rows="6"
      class="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
      placeholder={$t('contact.form.messagePlaceholder')}
    ></textarea>
  </div>

  {#if submitStatus === 'success'}
    <div class="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-start gap-3">
      <svg class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <p class="text-green-800 dark:text-green-300 text-sm">{$t('contact.form.successMessage')}</p>
    </div>
  {/if}

  {#if submitStatus === 'error'}
    <div class="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-start gap-3">
      <svg class="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <p class="text-red-800 dark:text-red-300 text-sm">{$t('contact.form.errorMessage')}</p>
    </div>
  {/if}

  <button
    type="submit"
    disabled={isSubmitting}
    class="w-full px-8 py-4 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
  >
    {#if isSubmitting}
      <svg class="animate-spin w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      {$t('contact.form.sending')}
    {:else}
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
      {$t('contact.form.submit')}
    {/if}
  </button>
</form>
