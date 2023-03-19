<template>
  <ProtectedComponent>
    <BodyWrapper>
      <AppBar :title-app-bar="selectedBlog?.title"></AppBar>
      <div class="w-full flex flex-col">
        <div class="container w-10/12 md:w-8/12 my-5 mx-auto">
          <div class="w-full p-5 bg-white border border-emerald-500 rounded-lg">
            <div class="text-sm text-gray-500">
              {{ selectedBlog?.createdAt }}
            </div>
            <div class="text-emerald-800 text-4xl font-light">
              {{ selectedBlog?.title }}
            </div>
            <div class="my-10">
              {{ selectedBlog?.content }}
            </div>
          </div>

          <div class="w-full flex flex-col gap-4 my-20">
            <h1 class="text-2xl text-emerald-800 font-semibold">Other Posts</h1>
            <div class="flex flex-col md:flex-row gap-4">
              <div
                v-for="blog in blogs.filter(
                  (blog) => blog.id !== selectedBlog?.id
                )"
                v-bind:key="blog.id"
                class="w-full md:w-4/13 lg:4/12 p-5 bg-white border border-emerald-500 rounded-lg hover:shadow-lg"
              >
                <h1 class="text-lg text-emerald-500 font-semibold">
                  {{ blog.title }}
                </h1>
                <div class="flex flex-col">
                  <!-- description about blog page. to access this blog page need an authentication -->
                  <p class="">
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
              <div
                class="w-full md:w-4/13 lg:4/12 p-5 bg-white border border-emerald-500 rounded-lg hover:shadow-lg"
              >
                <h1 class="text-lg text-emerald-500 font-semibold">Blog 4</h1>
                <div class="flex flex-col">
                  <!-- description about blog page. to access this blog page need an authentication -->
                  <p class="">
                    {{ String(blogs[2].content).substring(0, 100) }}...
                  </p>
                  <!-- navigate link to blog page -->
                  <NuxtLink
                    :to="`/blog/blog-4`"
                    class="text-emerald-500 mt-5 hover:underline hover:underline-offset-4"
                  >
                    Go to Blog Page
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BodyWrapper>
  </ProtectedComponent>
</template>

<script setup lang="ts">
import ProtectedComponent from "~~/src/components/ProtectedComponent.vue";
import AppBar from "~~/src/components/app-bar/app-bar.vue";
import BodyWrapper from "~~/src/components/wrapper/BodyWrapper.vue";
import { useRouter } from "vue-router";
import { blogs } from "~~/src/mock/blog";
const router = useRouter();

const { slug } = router.currentRoute.value.params;
const selectedBlog = blogs.find((blog) => blog.slug === slug);
if (!Boolean(selectedBlog)) {
  showError({
    statusCode: 404,
    message: `Page ${router.currentRoute.value.path}`,
    fatal: false,
  });
}

onMounted(() => {
  console.log({ selectedBlog });
});
</script>
