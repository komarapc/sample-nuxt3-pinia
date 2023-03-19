<template>
  <div class="w-full min-h-screen bg-emerald-50 flex flex-col">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "BodyWrapper",
  mounted: function () {
    // console.log("BodyWrapper mounted");
  },
};
</script>
