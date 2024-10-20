<template>
  <div>
    <div class="container mx-auto py-10 px-4 sm:px-10 lg:px-24" v-if="aboutContent">
      <div class="flex flex-wrap">
        <!-- Image Section -->
        <div class="lg:w-1/2 w-full relative overflow-hidden h-80 sm:h-96">
          <img
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out transform"
            :src="aboutContent.image"
            alt="About Us"
          />
          <div class="relative overflow-hidden h-full transition-transform duration-700 ease-in-out transform">
            <div class="absolute top-0 left-0 bg-white p-4 h-36 w-36 sm:h-48 sm:w-48">
              <div class="bg-orange-600 text-white text-center h-full flex flex-col justify-center animate-slide-up">
                <h1 class="text-3xl sm:text-4xl font-bold">{{ aboutContent.experience.years }}</h1>
                <h2 class="text-xl sm:text-2xl">{{ aboutContent.experience.text }}</h2>
                <h5 class="text-md sm:text-lg">{{ aboutContent.experience.subtext }}</h5>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Text Section -->
        <div class="lg:w-1/2 w-full flex flex-col justify-center p-6">
          <div class="border-l-4 border-orange-500 pl-4 mb-5 animate-slide-up">
            <h6 class="text-gray-500 text-lg uppercase mb-2 font-bold">About Us</h6>
            <h1 class="text-2xl sm:text-3xl font-bold mb-0">{{ aboutContent.heading }}</h1>
          </div>
          <p v-for="(desc, index) in aboutContent.description" :key="index" class="mb-4 animate-slide-up">
            {{ desc }}
          </p>
          <div class="border-t pt-4 mt-4 animate-slide-up">
            <div class="flex flex-wrap -mx-2">
              <div
                v-for="(feature, index) in aboutContent.features"
                :key="index"
                class="flex items-center w-1/2 sm:w-1/3 px-2 mb-4"
              >
                <i class="fas fa-check fa-2x text-orange-500 mr-3"></i>
                <h6 class="mb-0">{{ feature }}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Loading...</p> <!-- Placeholder while the content loads -->
    </div>
    <team />
  </div>
  </template>
  
  <script>
  import aboutContent from '~/Data/about.json'; 
  import team from './team.vue';

  // Adjust the path if necessary
  
  export default {
  components: { team },
    data() {
      return {
        aboutContent: null // Initialize as null
      };
    },
    created() {
      // Assign JSON data on component creation
      this.aboutContent = aboutContent;
    }
  };
  </script>
  

  