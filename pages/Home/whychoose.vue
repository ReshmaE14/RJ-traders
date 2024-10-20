<template>
    <div class="container mx-auto py-10 px-4 sm:px-10 lg:px-24">
      <div class="grid lg:grid-cols-2 gap-8">
        <!-- Text Section -->
        <div class="wow fadeInUp" data-wow-delay="0.1s">
          <div class="border-l-4 border-orange-600 pl-4 mb-8">
            <h6 class="text-gray-500 text-lg uppercase mb-2 font-bold">{{ section.title }}</h6>
            <h1 class="text-3xl sm:text-4xl font-bold mb-0">{{ section.subtitle }}</h1>
          </div>
          <p class="mb-8 text-gray-600 animate-fadeIn">{{ section.description }}</p>
          
          <!-- Features List -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div v-for="(feature, index) in section.features" :key="index" class="wow fadeIn" :data-wow-delay="(index + 1) * 0.1 + 's'">
              <div class="flex items-center mb-4 animate-fadeIn">
                <i :class="feature.icon + ' fa-2x text-orange-600 mr-3'"></i>
                <h5 class="font-bold text-2xl">{{ feature.title }}</h5>
              </div>
              <p class="text-gray-600 animate-fadeIn">{{ feature.description }}</p>
            </div>
          </div>
        </div>
  
        <!-- Image Section -->
        <div class="w-full relative overflow-hidden h-80 sm:h-96">
          <img
            class="absolute inset-0 w-full h-full pt-14 pl-10 object-cover transition-transform duration-700 transform translate-y-10 opacity-0 animate-fadeIn"
            :src="section.images.main"
            alt="About Us"
          />
          <div class="relative overflow-hidden h-full transition-transform duration-700 ease-in-out transform">
            <img class="absolute inset-0 w-full h-full object-cover" :src="section.images.feature" alt="Feature Image" />
            <div class="absolute top-0 left-0 bg-white p-4 h-36 w-36 sm:h-48 sm:w-48">
              <div class="bg-orange-600 text-white text-center h-full flex flex-col justify-center animate-slide-up">
                <h1 class="text-3xl sm:text-4xl font-bold">{{ section.images.experience.years }}</h1>
                <h2 class="text-xl sm:text-2xl">{{ section.images.experience.text }}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import sectionData from '~/Data/whychoose.json'; // Adjust the path to your JSON file
  
  export default {
    data() {
      return {
        section: sectionData.section // Load the section data
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add any specific styles for this component here */
</style>