<template>
  <div class="wrapper-small md:px-10">
    <div class="pt-16">
      <div class="flex justify-center items-center text-base font-semibold">
        <h4 class="text-center text-white">Featured Projects</h4>
      </div>

      <div>
        <projects-grid></projects-grid>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectsGrid from "./ProjectsGrid.vue";
export default {
  components: { ProjectsGrid },
};
</script>

<style scoped>
.wrapper-small {
  @apply max-w-screen-lg mx-auto px-6;
}
</style>
