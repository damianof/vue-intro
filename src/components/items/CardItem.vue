<template>
  <div class="break-inside bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 max-w-72 w-full" style="cursor: auto;">
    <div>
      <div class="relative mb-2">
        <div class="w-full h-3 bg-pink-200">
          <div class="bg-pink-500 h-3 " 
            :style="`width: ${item.percentOfTotal * 100}%`"></div>
        </div>
      </div>
      <div class="flex items-center text-gray-900 dark:text-gray-100">
        <span>{{ item.name }} </span>

        <span class="ml-4">[{{ `${item.percentOfTotal}` }}]</span>
        
      </div>
    </div>
    <p class="mt-2 text-right">
      <span v-show="!state.editing" 
        class="text-3xl text-black dark:text-white font-bold spacing-sm cursor-pointer"
        @click.self="startEditing">{{ item.currentValue }}</span>
      <input type="number" class="text-right" 
        v-show="state.editing" 
        ref="refEditedValue" 
        v-model="state.editedValue" 
        @keyup.enter="endEditing" 
        @blur.self="endEditing"/>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watchEffect, nextTick } from 'vue'
import { ICardItem } from '../../models'

const props = defineProps<{ item: ICardItem }>()
const emits = defineEmits<{
  (e: 'valueChanged', params: {
    id: number | string, 
    newValue: number
  }): void
}>()

const refEditedValue = ref<HTMLInputElement>(null)

const state = reactive({
  editing: false,
  editedValue: props.item.currentValue
})

watchEffect(() => {
  const newValue = state.editedValue
  emits('valueChanged', {
    id: props.item.id,
    newValue: newValue
  })
})

const startEditing= () => {
  state.editing = true
  nextTick(() => {
    refEditedValue.value.focus()
  })
}

const endEditing= () => {
  state.editing = false
}

</script>

