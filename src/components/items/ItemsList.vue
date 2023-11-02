<template>
  <div class="flex flex-row space-x-2">
    <CardItem 
      v-for="item in items" 
      :key="item.id" 
      :item="item"/>
  </div>
</template>

<script setup lang="ts">
import CardItem from './CardItem.vue'
defineProps<{ items: any }>()

</script>

