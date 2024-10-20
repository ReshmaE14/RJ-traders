<template>
    <div class="py-10 bg-gray-50">
      <div class="container mx-auto py-10 px-4 sm:px-6 md:px-8 lg:px-24">
        <div class="flex flex-col lg:flex-row justify-between items-start mb-16">
          <div class="lg:w-1/2">
            <div class="border-l-4 border-orange-500 pl-4">
              <h6 class="text-gray-500 text-lg uppercase mb-2 font-bold">{{ team.title }}</h6>
              <h1 class="text-4xl font-bold mb-0">{{ team.title }}</h1>
            </div>
          </div>
          <div class="lg:w-1/2">
            <p class="mb-0 text-black">{{ team.description }}</p>
          </div>
        </div>
  
        <!-- Team Members Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(member, index) in team.members" :key="index">
            <div class="relative">
              <img class="w-full h-auto" :src="member.image" :alt=" `Team Member ${index + 1}`" />
              <div class="absolute bottom-4 left-4 w-full bg-white p-4 rounded-lg">
                <h5 class="text-lg font-semibold">{{ member.name }}</h5>
                <span class="text-gray-700">{{ member.role }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  import team from '~/Data/team.json'; // Adjust the path to your JSON file
  
  export default {
    components:{
      team
    },
    data() {
      return {
        team: team.teamSection // Load the team section data
      };
    },
  };
  </script>
  
