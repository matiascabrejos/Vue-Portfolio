<template>
  <div class="h-screen">
    <projects-grid></projects-grid>
  </div>
</template>

<style scoped>
/* div {
  background-color: #0e1118;
} */
</style>

<script>
import ProjectsGrid from "./ProjectsGrid.vue";
export default {
  components: { ProjectsGrid },
};
</script>
