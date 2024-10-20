<template>
    <div id="carouselExampleCaptions" class="relative" @mouseenter="pause" @mouseleave="play">
      <div class="relative h-[90vh] overflow-hidden">
        <!-- Slide 1 and 2 looped -->
        <div
          v-for="(slide, index) in carouselSlides"
          :key="index"
          class="carousel-item absolute inset-0 transition-opacity duration-700"
          :class="{ 'opacity-100': activeSlide === index, 'opacity-0': activeSlide !== index }"
        >
          <img :src="slide.image" class="w-full h-full object-cover" :alt="'Slide ' + (index + 1) + ' Image'" />
          <div class="absolute inset-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60">
            <div class="container flex flex-col items-start justify-center p-4 md:p-8 lg:px-56">
              <div>
                <h5 class="text-white text-xs md:text-lg uppercase mb-3 font-semibold">{{ slide.subtitle }}</h5>
                <h1 class="text-white text-3xl md:text-4xl lg:text-6xl mb-4 font-bold">{{ slide.title }}</h1>
                <div class="flex gap-3 items-start justify-start">
                  <div v-for="(tag, tagIndex) in slide.tags" :key="tagIndex" class="flex items-center">
                    <p class="text-white font-bold text-sm md:text-lg lg:text-xl mb-4">{{ tag }}</p>
                    <div v-if="tagIndex !== slide.tags.length - 1" class="rounded-full bg-orange-600 h-4 w-4 md:h-6 md:w-6"></div>
                  </div>
                </div>
                <br>
                <NuxtLink :to="slide.link" class="py-3 px-6 md:py-5 md:px-10 bg-orange-600 hover:bg-orange-700 text-white">
                  {{ slide.buttonText }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Carousel buttons -->
      <div class="px-8 md:px-16">
        <button @click="prevSlide" class="w-10 h-10 md:w-16 md:h-16 absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full">
          &#10094;
        </button>
        <button @click="nextSlide" class="w-10 h-10 md:w-16 md:h-16 absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full">
          &#10095;
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import carouselSlides from '~/Data/carousel.json'; // Adjust the path based on your project
  
  export default {
    data() {
      return {
        carouselSlides,  // Import JSON data
        activeSlide: 0,
        interval: null,
      };
    },
    methods: {
      nextSlide() {
        this.activeSlide = (this.activeSlide + 1) % this.carouselSlides.length;
      },
      prevSlide() {
        this.activeSlide = (this.activeSlide - 1 + this.carouselSlides.length) % this.carouselSlides.length;
      },
      startAutoSlide() {
        this.interval = setInterval(this.nextSlide, 5000);
      },
      pause() {
        clearInterval(this.interval);
      },
      play() {
        this.startAutoSlide();
      },
    },
    mounted() {
      this.startAutoSlide();
    },
    beforeDestroy() {
      clearInterval(this.interval);
    },
  };
  </script>
  
  <style scoped>
  /* Add any additional styles */
  </style>
  