<template>
  <div class="wrapper-small my-5">
    <div class="project-card md:flex mt-8">
      <div class="img max-w-lg md:max-w-sm mx-auto">
        <img src="assets/JMSpEWc.png" class="rounded-xl" alt="" />
      </div>
      <div class="flex flex-col justify-between max-w-lg mx-auto">
        <div class="txt md:px-5 lg:px-0">
          <h2 class="text-xl font-semibold text-white">Travelify</h2>
          <span
            class="
              font-semibold
              text-white
              bg-opacity-25
              dark:bg-opacity-40 dark:text-gray-300
              text-sm
              rounded
              dark:bg-primary
              mr-1
              px-1
            "
          >
            # Python
          </span>
          <p class="text-base text-white my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio fuga
            consequuntur earum maiores suscipit alias atque quod aut.
          </p>
        </div>
        <div>
          <div class="md:px-5 lg:px-0 py-3">
            <a
              href="#"
              class="
                bg-indigo-600
                hover:bg-indigo-700
                px-3
                py-2
                text-sm text-gray-200
                font-semibold font-medium
                rounded-full
              "
              >See Project</a
            >
            <a href="#" class="ml-6 text-indigo-600 hover:underline"
              >Source Code</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="project-card md:flex mt-16">
      <div class="img max-w-lg md:max-w-sm mx-auto">
        <img src="assets/n5gi1pq.png" class="rounded-xl" alt="" />
      </div>
      <div class="flex flex-col justify-between max-w-lg mx-auto">
        <div class="txt md:px-5 lg:px-0">
          <h2 class="text-xl font-semibold text-white">Encryption</h2>
          <span
            class="
              font-semibold
              text-white
              bg-opacity-25
              dark:bg-opacity-40 dark:text-gray-300
              text-sm
              rounded
              bg-red-900
              dark:bg-primary
              mr-1
              px-1
            "
          >
            # Python
          </span>
          <p class="text-base text-white my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio fuga
            consequuntur earum maiores suscipit alias atque quod aut.
          </p>
        </div>
        <div>
          <div class="md:px-5 lg:px-0 py-3">
            <button
              class="rounded py-2 px-4 text-white font-semibold text-sm btn-one"
            >
              <i class="fas fa-laptop"></i>
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
              <i class="devicon-github-original"></i>
              Source Code
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
</style>
