<template>
  <div class="grid sm:grid-cols-5 grid-cols-3 grid-fol gap-2">
    <CardItem 
      v-for="item in items" 
      :key="item.id" 
      :item="item" 
      @valueChanged="valueChanged" />
  </div>
</template>

<script setup lang="ts">
import { ICardItem } from '../../models'
import CardItem from './CardItem.vue'

defineProps<{ items: ICardItem[] }>()
const emits = defineEmits<{
  (e: 'valueChanged', params: {
    id: number | string, 
    newValue: number
  }): void
}>()

const valueChanged = (args: any) => {
  emits('valueChanged', args)
}

</script>

