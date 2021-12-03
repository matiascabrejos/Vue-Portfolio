<template>
  <div class="flex h-full text-center text-gray-700 dark:text-gray-200 m-8">
    <div class="m-auto">
      <h2 class="text-xl md:text-2xl lg:text-3xl font-semibold">
        <span class="font-normal dark:text-gray-300">
          Hey <span class="wave">👋</span>, I am </span
        >Matías
      </h2>
      <h3
        class="
          font-bold
          text-primary
          dark:text-primary
          text-2xl
          md:text-3xl
          lg:text-4xl
          text-focus-in
        "
      >
        a Front-End Developer
      </h3>
      <p class="text-lg lg:text-xl font-semibold">Fill text</p>

      <div class="mt-5">
        <more-test></more-test>
      </div>
    </div>
  </div>
</template>

<script>
import MoreTest from "./MoreTest.vue";
export default {
  components: { MoreTest },
};
</script>

<style scoped>
.text-focus-in {
  animation: text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}

@keyframes text-focus-in {
  0% {
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    filter: blur(0);
    opacity: 1;
  }
}

.wave {
  animation-name: wave-animation;  /* Refers to the name of your @keyframes element below */
  animation-duration: 2.5s;        /* Change to speed up or slow down */
  animation-iteration-count: infinite;  /* Never stop waving :) */
  transform-origin: 70% 70%;       /* Pivot around the bottom-left palm */
  display: inline-block;
}

@keyframes wave-animation {
    0% { transform: rotate( 0.0deg) }
   10% { transform: rotate(14.0deg) }  /* The following five values can be played with to make the waving more or less extreme */
   20% { transform: rotate(-8.0deg) }
   30% { transform: rotate(14.0deg) }
   40% { transform: rotate(-4.0deg) }
   50% { transform: rotate(10.0deg) }
   60% { transform: rotate( 0.0deg) }  /* Reset for the last half to pause */
  100% { transform: rotate( 0.0deg) }
}
</style>
