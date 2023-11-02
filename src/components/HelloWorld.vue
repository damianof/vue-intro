<template>
  <div class="flex flex-col">
    <h1>Message: {{ msg }}</h1>

    <button type="button" @click="increment">count is [{{ count }}]</button>
  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)

const increment = () => {
  count.value += 1
}

</script>
