<template>
    <div class="container mx-auto py-10 px-6 md:px-12 lg:px-24">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Left side -->
        <div class="wow fadeInUp" data-wow-delay="0.1s">
          <div class="border-l-4 border-orange-500 pl-4 mb-5">
            <h6 class="text-gray-600 uppercase mb-2 text-sm md:text-base">Testimonial</h6>
            <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-0">What Our Happy Clients Say!</h1>
          </div>
          <p class="mb-4 text-sm md:text-base">
            Our clients trust us for our commitment to quality and efficiency
          </p>
          <div class="grid grid-cols-2 gap-4 mt-4">
            <div class="text-start">
              <div class="flex items-start justify-start lg:justify-start mb-2">
                <i class="fa fa-users text-orange-500 text-xl md:text-2xl"></i>
                <h1 class="ml-3 text-2xl md:text-3xl lg:text-4xl font-bold">123+</h1>
              </div>
              <h5 class="text-sm md:text-lg">Happy Clients</h5>
            </div>
            <div class="text-start">
              <div class="flex items-start justify-start lg:justify-start mb-2">
                <i class="fa fa-check text-orange-500 text-xl md:text-2xl"></i>
                <h1 class="ml-3 text-2xl md:text-3xl lg:text-4xl font-bold">123+</h1>
              </div>
              <h5 class="text-sm md:text-lg">Projects Done</h5>
            </div>
          </div>
        </div>
  
        <!-- Right side with testimonial and arrows -->
        <div class="wow fadeInUp flex flex-col items-center lg:items-start" data-wow-delay="0.5s">
          <img class="w-16 h-16 md:w-24 md:h-24 mb-4" :src="testimonials[currentIndex].image" alt="Client Image" />
          <div class="flex items-start">
            <div class="ml-0 md:ml-4">
              <p class="text-sm md:text-lg">{{ testimonials[currentIndex].quote }}</p>
              <div class="bg-orange-500 h-1 w-12 md:w-16 my-2 md:my-3"></div>
              <h5 class="text-base md:text-xl font-bold">{{ testimonials[currentIndex].name }}</h5>
              <span class="text-gray-500 text-xs md:text-sm">{{ testimonials[currentIndex].profession }}</span>
            </div>
          </div>
  
          <!-- Circular arrows for sliding -->
          <div class="flex justify-center space-x-4 mt-6">
            <button @click="prevTestimonial" class="bg-white border border-orange-500 text-orange-500 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
              <i class="fa fa-chevron-left"></i>
            </button>
            <button @click="nextTestimonial" class="bg-white border border-orange-500 text-orange-500 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
              <i class="fa fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import testimonials from '~/Data/testimonials.json' // Import the JSON file
  
  export default {
    data() {
      return {
        testimonials, // Load the testimonials data from JSON
        currentIndex: 0
      }
    },
    methods: {
      nextTestimonial() {
        this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
      },
      prevTestimonial() {
        this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
      }
    }
  }
  </script>
  

  