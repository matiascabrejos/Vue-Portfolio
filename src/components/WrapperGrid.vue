<template>
  <div class="wrapper-small md:px-10">
    <div class="mt-16">
      <div
        class="
          flex
          justify-center
          items-center
          text-base
          font-semibold
          text-gray-600
        "
      >
        <h4 class="text-center">Featured Projects</h4>
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
