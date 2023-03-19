<template>
  <slot></slot>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { useAuthStore } from "../store/auth";
const authStore = useAuthStore();
const router = useRouter();
if (!authStore.isAuthenticated) {
  router.push("/login");
}

if (authStore.isAuthenticated && router.currentRoute.value.path === "/login") {
  router.push("/dashboard");
}
onMounted(() => {
  // action after mounted
  // console.log("ProtectedComponent mounted");
});
</script>
