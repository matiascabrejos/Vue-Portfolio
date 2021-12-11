<template>
  <div class="h-screen">
    <wrapper-grid></wrapper-grid>
    <another-grid></another-grid>
  </div>
</template>

<style scoped>
div {
  background-color: #0e1118;
}
</style>

<script>
import AnotherGrid from './AnotherGrid.vue';
import WrapperGrid from "./WrapperGrid.vue";
export default {
  components: { WrapperGrid, AnotherGrid },
};
</script>
