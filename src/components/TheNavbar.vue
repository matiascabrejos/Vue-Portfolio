<template>
  <div>
    <nav class="wrapper py-6">
      <div class="px-10 flex justify-between items-center">
        <div class="logo">
          <router-link to="/">
            <h1 class="text-2xl font-semibold text-gray-700">
              <span class="text-primary font-bold">mono</span>tone.
            </h1>
          </router-link>
        </div>

        <div class="navbar hidden md:block">
          <router-link class="nav-link hover:text-primary" to="test"
            >Portfolio</router-link
          >
          <router-link class="nav-link hover:text-primary" to="testing"
            >Blog</router-link
          >
          <router-link class="nav-link hover:text-primary" to="moretest"
            >About</router-link
          >
        </div>

        <div class="ml-3 flex md:hidden">
          <!-- Mobile menu button -->
          <button @click="toggle" class="flex-center rounded-md">
            <svg
              :class="[isOpen ? 'hidden' : 'block', 'h-6 w-6']"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
            <svg
              :class="[isOpen ? 'block' : 'hidden', 'h-6 w-6']"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
    <div :class="[isOpen ? '' : 'hidden', 'md:hidden']">
      <div class="px-2 pt-2 pb-3 sm:px-3 bg-primary">
        <router-link
          to="portfolio"
          class="mobile-link focus:outline-none"
          >Projects
        </router-link>
        <router-link
          to="blog"
          class="mt-1 mobile-link focus:outline-none"
          >Blog
        </router-link>
        <router-link
          to="about"
          class="mt-1 mobile-link focus:outline-none"
          >About
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },

  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
.mobile-link {
  @apply block px-3 py-2 text-lg rounded-md font-medium text-center;
  color: #57586e;
}

.nav-link {
  @apply ml-12 font-medium text-lg;
  color: #57586e;
}
.nuxt-link-exact-active {
  @apply text-red-600;
}
nav {
  background-color: #0e1118;
  border-bottom: 3px solid hsla(0, 0%, 94.5%, 0.2);
}

svg {
  color: #57586e;
}
</style>
