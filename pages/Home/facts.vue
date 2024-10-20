<template>
    <div class="container mx-auto my-5 p-0">
      <div class="flex flex-wrap">
        <div
          v-for="fact in facts"
          :key="fact.id"
          class="xl:w-1/4 md:w-1/2 sm:w-full wow fadeIn"
          :data-wow-delay="`${(fact.id - 1) * 0.2 + 0.1}s`"
        >
          <div class="relative">
            <img :src="fact.image" alt="fact.title" class="w-full h-auto" />
            <div
              class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-5 transform transition-transform duration-500 translate-x-10 opacity-0 animate-fadeIn"
            >
              <h1 class="text-9xl text-orange-600 font-bold">{{ fact.id }}</h1>
              <h4 class="text-white text-3xl font-bold mb-3">{{ fact.title }}</h4>
              <p class="text-white text-center">{{ fact.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import facts from '~/Data/facts.json';
  
  export default {
    data() {
      return {
        facts,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add any specific styling if needed */
</style>