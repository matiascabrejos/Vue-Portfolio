<template>
  <div>
    <h1 class="text-center py-4">Stack</h1>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-8 h-8 animate-bounce mx-auto"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
        clip-rule="evenodd"
      />
    </svg>
    <div class="flex items-center justify-center">
      <div class="inline-grid lg:grid-cols-4 md:grid-cols-2 gap-10 py-6">
        <div class="flex items-center">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            class="animate-pulse"
          />
          <p class="pl-4">HTML</p>
        </div>
        <div class="flex items-center">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            class="animate-pulse"
          />
          <p class="pl-4">CSS</p>
        </div>
        <div class="flex items-center">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
            class="animate-pulse"
          />
          <p class="pl-4">SASS</p>
        </div>
        <div class="flex items-center">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
            class="animate-pulse"
          />
          <p class="pl-4">TAILWIND CSS</p>
        </div>
        <div class="flex items-center">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            class="animate-pulse"
          />
          <p class="pl-4">JAVASCRIPT</p>
        </div>
        <div class="flex items-center">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
            class="animate-pulse"
          />
          <p class="pl-4">VUEJS</p>
        </div>
        <div class="flex items-center">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg"
            class="animate-pulse"
          />
          <p class="pl-4">NUXTJS</p>
        </div>
        <div class="flex items-center">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            class="animate-pulse"
          />
          <p class="pl-4">GIT</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 74px;
  height: 74px;
}

i {
  font-size: 74px;
}
</style>
