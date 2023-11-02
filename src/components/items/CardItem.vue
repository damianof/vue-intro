<template>
  <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 max-w-72 w-full" style="cursor: auto;">
    <div>
      <div class="relative mb-2">
        <div class="w-full h-3 bg-pink-200">
          <div class="bg-pink-500 h-3 " 
            style="width: 45%"></div>
        </div>
      </div>
      <div class="flex items-center text-gray-900 dark:text-gray-100" style="cursor: auto;">
        <span>{{ item. name }}</span>
        
      </div>
    </div>
    <p class="mt-2 text-3xl font-bold spacing-sm text-black text-right dark:text-white" style="cursor: auto;">
      {{ item.value }}
    </p>
  </div>
</template>

<script setup lang="ts">

defineProps<{ item: any }>()

</script>

