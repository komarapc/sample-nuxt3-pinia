<template>
  <title>Welcome back</title>
  <BodyWrapper>
    <div
      class="w-full min-h-screen flex flex-col items-center justify-center space-y-5"
    >
      <div>
        <h1 class="text-4xl text-emerald-700">Welcome Back</h1>
      </div>
      <div class="w-96 p-5 bg-white border border-emerald-500 rounded-lg">
        <div class="flex flex-col space-y-3">
          <form action="" class="flex flex-col space-y-3">
            <div class="flex flex-col">
              <label class="text-gray-500">Email</label>
              <input
                type="text"
                class="w-full border border-gray-300 rounded-lg p-2 outline-none"
                autocomplete="off"
                placeholder="Enter your email"
                v-model="state.email"
              />
            </div>
            <div class="flex flex-col">
              <label class="text-gray-500">Password</label>
              <input
                type="password"
                class="w-full border border-gray-300 rounded-lg p-2 outline-none"
                autocomplete="off"
                placeholder="Enter your password"
                v-model="state.password"
              />
            </div>
          </form>
          <!-- note -->
          <div
            class="flex flex-col bg-emerald-50 p-2 rounded border border-emerald-500"
          >
            <span class="text-emerald-800 font-bold">Note: </span>
            <span class="text-emerald-800">
              This is a demo app, so you can login with any email and password.
            </span>
          </div>
          <div class="flex flex-col">
            <button
              class="w-full bg-emerald-500 text-white rounded-lg p-2 hover:bg-emerald-600"
              @click="login"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  </BodyWrapper>
</template>
]
<script lang="ts" setup>
import { useRouter } from "vue-router";
import { useAuthStore } from "~~/src/store/auth";
import BodyWrapper from "~~/src/components/wrapper/BodyWrapper.vue";
import { nanoid } from "nanoid";

const router = useRouter();

const authStore = useAuthStore();
const state = reactive({
  email: "",
  password: "",
});

const login = () => {
  if (state.email === "" || state.password === "") {
    return;
  } else {
    authStore.login({
      email: state.email,
      id: nanoid(),
    });
    router.push("/");
  }
};

onMounted(() => {
  console.log(router.currentRoute.value);
  if (authStore.isAuthenticated) router.push("/");
});
</script>
