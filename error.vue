<template>
  <title>Error</title>
  <BodyWrapper>
    <div
      class="flex flex-col w-full min-h-screen items-center justify-center h-full"
    >
      <div class="flex flex-col items-center justify-center space-y-5">
        <div class="text-8xl text-emerald-700">{{ error.statusCode }}</div>
        <div class="text-4xl font-light text-emerald-700">
          {{ error.statusMessage }}
        </div>
        <div
          class="bg-emerald-100 p-2 border border-emerald-500 rounded-lg text-2xl text-neutral-500"
        >
          {{ error.message }}
        </div>
      </div>
    </div>
  </BodyWrapper>
</template>
<script setup lang="ts">
import BodyWrapper from "./src/components/wrapper/BodyWrapper.vue";

interface ErrorProps {
  statusCode: number;
  message: string;
  statusMessage: string;
}

const props = defineProps({
  error: {
    type: Object as PropType<ErrorProps>,
    required: true,
  },
});
</script>
