<script setup lang="ts">
import { reactive } from 'vue'

import HelloWorld from './components/HelloWorld.vue'
import ItemsList from './components/items/ItemsList.vue'

const state = reactive({
  items: [{
    id: 1,
    name: "Item 1",
    value: 2345.56,
    selected: false
  }, {
    id: 2,
    name: "Item 2",
    value: 534.2,
    selected: false
  }, {
    id: 3,
    name: "Item 3",
    value: 99.431,
    selected: false
  }]
})

</script>

<template>
  <div class="space-y-4">
    <div class="home flex border-2 border-red-500">
      <HelloWorld msg="Vite + Vue" />
    </div>

    <section class="">
      <ItemsList :items="state.items" />
    </section>
  </div>
</template>
