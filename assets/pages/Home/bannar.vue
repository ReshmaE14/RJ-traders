<template>
    <div class="relative py-16 bg-cover bg-center" :style="{ backgroundImage: `url(${content.backgroundImage})` }">
      <!-- Black background overlay -->
      <div class="absolute inset-0 bg-black bg-opacity-60"></div>
  
      <!-- Content container with sliding animation -->
      <div class="relative container mx-auto text-center px-4 py-5">
        <h1 class="text-3xl sm:text-4xl md:text-6xl text-white mb-4 animate-slide-in-down font-bold">{{ content.title }}</h1>
        <nav aria-label="breadcrumb" class="animate-slide-in-down">
          <ol class="flex justify-center space-x-2 text-white">
            <li class="breadcrumb-item">
              <NuxtLink to="/" class="hover:underline">Home / </NuxtLink>
            </li>
            <li class="text-primary">
              <span>{{ content.breadcrumb }}</span>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </template>
  
  <script>
  // Import the JSON file
  import bannar from '~/Data/banner.json';
  
  export default {
    props: {
      page: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        content: {}
      };
    },
    mounted() {
      this.loadbannar();
    },
    methods: {
      loadbannar() {
        this.content = bannar[this.page] || {};
      }
    }
  };
  </script>

  