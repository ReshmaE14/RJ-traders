<template>

<div>
<bannar page="services" />


  <div class="container mx-auto py-10 px-4 sm:px-10 lg:px-24">
    <div class="grid lg:grid-cols-2 items-end mb-8">
      <div class="wow fadeInUp" data-wow-delay="0.1s">
        <div class="border-l-4 border-orange-600 pl-4">
          <h6 class="text-gray-500 text-lg uppercase mb-2 font-bold">Our Services</h6>
          <h1 class="text-3xl font-bold mb-4">Construction And Renovation Solutions</h1>
        </div>
      </div>
      <div class="text-right wow fadeInUp" data-wow-delay="0.3s">
        <!-- Optional text or content -->
      </div>
    </div>

    <!-- Services List -->
    <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-8 justify-center">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="service-item bg-gray-100 overflow-hidden wow fadeInUp hover:text-orange-600 hover:bg-orange-100 transition duration-300"
        :data-wow-delay="`${0.1 + index * 0.2}s`"
      >
        <img
          :src="service.image"
          class="w-full h-64 object-cover hover:scale-105 transition duration-300"
          :alt="service.alt"
        />
        <div class="service-text p-4 hover:bg-orange-500 hover:text-white text-center">
          <h5 class="mb-3 font-bold text-2xl">{{ service.title }}</h5>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </div>
  </div>
</div>
 
</template>

<script>
import services from '~/Data/services.json' 
import bannar from './bannar.vue'


export default {
  components: { bannar },
  data() {
    return {
      services
    }
  }
}
</script>

