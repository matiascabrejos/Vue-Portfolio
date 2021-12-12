<template>
  <div class="mt-16">
    <div
      class="
        flex
        justify-center
        items-center
        text-base
        font-semibold
        text-white
        dark:text-gray-300
      "
    >
      <h2 class="text-center">Featured blogs</h2>
      <IconDoubleDown class="h-4 w-4" />
    </div>

    <div class="wrapper-small my-5">
      <div class="project-card md:flex mt-10">
        <div class="img max-w-lg md:max-w-sm mx-auto m-2">
          <router-link to="/">
            <img src="assets/n5gi1pq.png" class="rounded-xl" alt="" />
          </router-link>
        </div>
        <div class="flex flex-col justify-between max-w-lg mx-auto">
          <div class="txt md:px-5 lg:px-0">
            <router-link to="/">
              <h2 class="text-xl font-semibold text-white dark:text-gray-100">
                Travelify
              </h2>
            </router-link>
            <div class="flex flex-col justify-between max-w-lg mx-auto"></div>
            <span
              class="
                font-semibold
                text-white
                bg-opacity-25
                dark:bg-opacity-40 dark:text-gray-300
                text-sm
                rounded
                bg-gray-200
                dark:bg-primary
                mr-1
                px-1
              "
            >
              #Python
            </span>
            <p class="text-base text-white dark:text-gray-200 my-1">
              By reading this article, I would suppose that you know enough to
              decide whether you will use GraphQl in your next Django project or
              not.
            </p>
            <div>
              <div class="md:px-5 lg:px-0 pt-7 pb-6 flex justify-center lg:justify-start md:justify-start">
                <button
                  class="
                    rounded
                    py-2
                    px-4
                    text-white
                    font-semibold
                    text-sm
                    btn-one
                  "
                >
                  <i class="fa fa-laptop"></i>
                  See Project
                </button>
                <button
                  class="
                    rounded
                    py-2
                    px-4
                    text-white
                    ml-6
                    font-semibold
                    text-sm
                    btn-two
                  "
                >
                  <i class="fa fa-github"></i>
                  Source Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  @apply max-w-screen-xl mx-auto;
}

.wrapper-small {
  @apply max-w-screen-lg mx-auto px-6;
}

.flex-center {
  @apply flex justify-center items-center;
}

.btn-one {
  background: #17b5cb;
  border: 2px solid #17b5cb;
  font-family: Rajdhani, sans-serif;
}

.btn-two {
  background: transparent;
  color: #17b5cb;
  border: 2px solid #17b5cb;
  font-family: Rajdhani, sans-serif;
}

span {
  background: #17b5cb;
}

i {
  font-size: 16px;
  margin-right: 4px;
}
</style>
