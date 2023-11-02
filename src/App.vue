<script setup lang="ts">
import { useItemsStore } from './composables'
import HelloWorld from './components/HelloWorld.vue'
import ItemsList from './components/items/ItemsList.vue'

const itemsStore = useItemsStore()

const onAddItemClicked = () => {
  const newItem = {
    id: -1,
    name: "Item 4",
    costBasis: 78,
    currentValue: 1198.1,
    numberOfShares: 23,
    netGain: 0
  }
  itemsStore.addItem(newItem)
}

const valueChanged = (params: { id: string | number, newValue: number }) => {
  itemsStore.updateItemValue(params)
}
</script>

<template>
  <div class="space-y-4">

    <div v-if="false" class="home flex border-2 border-red-500">
      <HelloWorld msg="Vite + Vue" />
    </div>

    <div class="break-inside bg-white dark:bg-green-700 border border-gray-200 dark:border-gray-800 rounded-lg p-4 max-w-72 w-full" 
      style="cursor: auto;">
      <div>
        <div class="flex items-center justify-between text-gray-900 dark:text-gray-100">
          <span>Total</span>

          <p class="text-3xl font-bold spacing-sm text-black text-right dark:text-white">
            {{ itemsStore.state.totals.total }}
          </p>
        </div>
      </div>
    </div>

    <div class="home flex border-2 border-red-500">
      <button type="button" @click="onAddItemClicked">Add</button>
    </div>

    <section class="">
      <ItemsList :items="itemsStore.state.items" 
        @valueChanged="valueChanged"/>
    </section>
  </div>
</template>
