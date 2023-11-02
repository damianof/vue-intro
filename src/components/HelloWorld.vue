<template>
  <div class="flex flex-col">
    <h1>msg: {{ msg }}</h1>

    <button type="button" @click="increment">count is [{{ count }}]</button>
  </div>
</template>

<script lang="ts">

import { ref, defineComponent } from 'vue'

export default defineComponent({
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  setup() {
    // Reactive state
    const count = ref(0)

    // Functions that mutate state and trigger updates
    const increment = () => {
      count.value++
    }

    return {
      count,
      increment
    }
  }
})

</script>

<!-- <script setup lang="ts">
import { ref, reactive } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)

const increment = () => {
  count.value += 1
}

</script> -->
