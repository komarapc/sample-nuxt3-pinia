<template>
  <title>Blog Pages</title>
  <ProtectedComponent>
    <BodyWrapper>
      <AppBar :title-app-bar="`Blogs`" />
      <div class="w-full flex flex-col items-center">
        <div
          class="container w-10/12 md:w-8/12 flex flex-col md:flex-row gap-4"
        >
          <div
            v-for="blog in blogs"
            :key="blog.id"
            class="w-full md:w-4/13 lg:4/12 p-5 bg-white border border-emerald-500 rounded-lg hover:shadow-lg"
          >
            <h1 class="text-lg text-emerald-500 font-semibold">
              {{ blog.title }}
            </h1>
            <div class="flex flex-col">
              <!-- description about blog page. to access this blog page need an authentication -->
              <p class="text-gray-500">
                {{ String(blog.content).substring(0, 100) }}...
              </p>
              <!-- navigate link to blog page -->
              <NuxtLink
                :to="`/blog/${blog.slug}`"
                class="text-emerald-500 mt-5 hover:underline hover:underline-offset-4"
              >
                Go to Blog Page
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </BodyWrapper>
  </ProtectedComponent>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import ProtectedComponent from "~~/src/components/ProtectedComponent.vue";
import AppBar from "~~/src/components/app-bar/app-bar.vue";
import BodyWrapper from "~~/src/components/wrapper/BodyWrapper.vue";
import { blogs } from "~~/src/mock/blog";

const router = useRouter();

onMounted(() => {
  // console.log({ blogs });
});
</script>
