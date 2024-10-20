<template>
  <div>
      <!-- Content container with sliding animation -->
   
  <bannar page="contact" />

    <!-- Contact Section -->
    <div class="container mx-auto py-10 px-6 md:px-12 lg:px-24">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div 
          v-for="(contact, index) in contactData.contacts" 
          :key="index" 
          class="flex items-center space-x-4 md:space-x-6 lg:space-x-12 animate-slide-up"
        >
          <img 
            :src="contact.image" 
            :alt="contact.name" 
            class="w-36 h-46 md:w-48 lg:w-64 object-cover rounded-lg shadow-lg" 
          />
          <div>
            <h3 class="text-lg md:text-xl lg:text-2xl font-semibold">{{ contact.name }}</h3>
            <p class="text-gray-600 md:text-lg">{{ contact.role }}</p>
            <p class="mt-2 text-gray-700">{{ contact.description }}</p>
            <p class="mt-1 text-sm md:text-base">Call: {{ contact.phone }}</p>
            <p class="text-sm md:text-base">Email: {{ contact.email }}</p>
          </div>
        </div>

        <!-- Map Section -->
        <div class="relative h-72 sm:h-96 animate-slide-up">
          <iframe 
            class="absolute inset-0 w-full h-full rounded-lg" 
            :src="contactData.mapUrl" 
            frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0">
          </iframe>
        </div>

        <!-- Contact Form -->
        <div class="animate-slide-up">
          <div class="border-l-4 border-orange-500 pl-4 mb-5">
            <h6 class="text-sm uppercase text-gray-500 font-bold">Contact Us</h6>
            <h1 class="text-2xl sm:text-3xl font-bold">
              {{ contactData.form.title }}
            </h1>
          </div>
          <p class="mb-6 text-gray-700">{{ contactData.form.description }}</p>
          <form>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="form-group" v-for="(field, index) in contactData.form.fields" :key="index">
                <label :for="field.id" class="block text-sm font-medium">{{ field.label }}</label>
                <input 
                  v-if="field.type !== 'textarea'" 
                  :type="field.type" 
                  :id="field.id" 
                  class="w-full p-3 border rounded bg-gray-50" 
                />
                <textarea 
                  v-else 
                  :id="field.id" 
                  class="w-full p-3 border rounded bg-gray-50" 
                  rows="5">
                </textarea>
              </div>
            </div>
            <button type="submit" class="mt-4 px-5 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded">
              {{ contactData.form.buttonText }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import contactData from '~/Data/contact.json'; 
import bannar from './bannar.vue';

export default {
  components: { bannar },
  data() {
    return {
      contactData,
    };
  },
};
</script>