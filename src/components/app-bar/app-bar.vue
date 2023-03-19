<template>
  <div class="w-full h-20 flex px-5 items-center justify-between">
    <div class="flex items-center space-x-4">
      <div
        class="p-2 hover:text-emerald-500 cursor-pointer hover:bg-black/5 rounded-lg transition duration-300 ease-in-out"
        @click="$router.back()"
      >
        <!-- navigate back -->
        <Icon name="ic:outline-chevron-left" class="text-4xl" />
      </div>
      <h1 class="text-2xl font-semibold text-emerald-500 capitalize">
        {{ props.titleAppBar }}
      </h1>
    </div>
    <div>
      <!-- title -->
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const routeName = router.currentRoute.value.name;

const props = defineProps({
  titleAppBar: {
    type: String,
    default: "",
  },
});
onMounted(() => {
  // action after mounted
});
</script>
