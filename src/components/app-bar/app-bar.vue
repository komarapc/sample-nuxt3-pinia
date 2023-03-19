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
    <div
      v-if="store.isAuthenticated"
      class="flex items-center justify-between bg-emerald-500 pl-6 pr-2 py-1 rounded-full space-x-2 shadow-lg"
    >
      <div class="text-emerald-50">{{ store.user.email }}</div>
      <button class="w-10 h-10 bg-white rounded-full mr-10" @click="logout">
        <Icon name="ic:outline-logout" class="text-xl text-emerald-800" />
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import { useAuthStore } from "@/src/store/auth";
const store = useAuthStore();
const router = useRouter();
const routeName = router.currentRoute.value.name;

const props = defineProps({
  titleAppBar: {
    type: String,
    default: "",
  },
});
const logout = () => {
  store.logout();
  router.push({ name: "login" });
};
</script>
