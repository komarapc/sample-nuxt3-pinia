<template>
  <title>Counter Page</title>
  <BodyWrapper>
    <AppBar :title-app-bar="'Counter'" />
    <div class="flex flex-col w-full items-center space-y-5">
      <span class="text-2xl text-emerald-700">Total counter</span>
      <span
        class="text-8xl"
        :class="
          counterStore.count < 0
            ? 'text-red-500'
            : counterStore.count > 100
            ? 'text-emerald-700'
            : 'text-emerald-500'
        "
        >{{ counterStore.count }}</span
      >
      <!-- content -->
    </div>
    <div class="flex justify-center my-10 space-x-2">
      <button
        class="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-lg rounded"
        @click="counterStore.decrement(variable)"
      >
        decrement
      </button>
      <button
        class="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-lg rounded"
        @click="counterStore.increment(variable)"
      >
        Increment
      </button>
      <button
        class="px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-lg rounded"
        @click="counterStore.reset"
      >
        Reset
      </button>
    </div>
    <div class="flex flex-col items-center justify-center space-y-2">
      <label for="variable">Increment/Decrement by</label>
      <input
        id="variable"
        type="number"
        v-model="variable"
        class="text-center text-lg py-2 bg-white border border-emerald-500 outline-none rounded"
      />
    </div>
  </BodyWrapper>
</template>

<script setup lang="ts">
import AppBar from "~~/src/components/app-bar/app-bar.vue";
import BodyWrapper from "~~/src/components/wrapper/BodyWrapper.vue";
import { useCounterStore } from "~~/src/store/counter";
const counterStore = useCounterStore();

// state
const variable: number = 1;
</script>
