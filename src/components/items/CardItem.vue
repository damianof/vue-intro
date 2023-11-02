<template>
  <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 max-w-72 w-full" style="cursor: auto;">
    <a aria-label="Unsplash Downloads" target="_blank" rel="noopener noreferrer" href="https://stackdiary.com/">
      <div class="relative mb-2">
        <div class="w-full h-3 bg-pink-200">
          <div class="bg-pink-500 h-3 " 
            style="width: 45%"></div>
        </div>
      </div>
      <div class="flex items-center text-gray-900 dark:text-gray-100" style="cursor: auto;">
        <span>{{ item. name }}</span>
        <svg class="h-4 w-4 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="cursor: auto;">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
        </svg>
      </div>
    </a>
    <p class="mt-2 text-3xl font-bold spacing-sm text-black text-right dark:text-white" style="cursor: auto;">
      {{ item.value }}
    </p>
  </div>
</template>

<script setup lang="ts">

defineProps<{ item: any }>()

</script>

