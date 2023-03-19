<template>
  <title>NuxtJS Pinia</title>
  <BodyWrapper>
    <div class="flex flex-col items-center justify-center w-full min-h-screen">
      <div class="flex flex-row space-x-4">
        <h1 class="text-6xl text-emerald-500">NuxtJS</h1>
        <h1 class="text-6xl text-orange-500">Pinia</h1>
      </div>
      <h1 class="text-2xl text-emerald-800 font-light my-5">
        Example of Pinia state management
      </h1>
      <div class="flex flex-col md:flex-row space-x-3">
        <div
          class="w-96 p-5 bg-white border border-emerald-500 rounded-lg hover:shadow-lg"
        >
          <h1 class="text-lg text-emerald-500 font-semibold">Counter</h1>
          <div class="flex flex-col">
            <!-- description about counter using pinia state management -->
            <p class="text-gray-500">
              This counter is using Pinia state management. The counter value is
              stored in the store and can be accessed from any component.
            </p>
            <!-- navigate link to counter page -->
            <NuxtLink
              to="/counter"
              class="text-emerald-500 mt-5 hover:underline hover:underline-offset-4"
            >
              Go to Counter Page
            </NuxtLink>
          </div>
        </div>
        <div
          class="w-96 p-5 bg-white border border-emerald-500 rounded-lg hover:shadow-lg"
        >
          <h1 class="text-lg text-emerald-500 font-semibold">Blog</h1>
          <div class="flex flex-col">
            <!-- description about blog page. to access this blog page need an authentication -->
            <p class="text-gray-500">
              This blog page is using Pinia state management. The blog page is
              protected by <span class="font-bold">authentication</span>. You
              need to login to access this page.
            </p>
            <!-- navigate link to blog page -->
            <NuxtLink
              to="/blog"
              class="text-emerald-500 mt-5 hover:underline hover:underline-offset-4"
            >
              Go to Blog Page
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </BodyWrapper>
</template>

<script setup>
import BodyWrapper from "~~/src/components/wrapper/BodyWrapper.vue";
</script>
