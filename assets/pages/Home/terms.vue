<template>
<div>
      <bannar page="Terms and Conditions" />



    <div class="container mx-auto py-10 px-4 sm:px-10 lg:px-24">
      <div class="grid lg:grid-cols-1 gap-8">
        <!-- Text Section -->
        <div class="wow fadeInUp" data-wow-delay="0.1s">
          <div class="border-l-4 border-orange-600 pl-4 mb-8">
            <h6 class="text-gray-500 text-lg uppercase mb-2 font-bold">Terms and Conditions</h6>
            <h1 class="text-3xl sm:text-4xl font-bold mb-0">"Safely Demolishing, Building a Cleaner Future"</h1>
          </div>
          <p class="mb-8 text-gray-600 animate-fadeIn">
            By using RJ Building Demolishers' services, you agree to these Terms and Conditions. We offer various demolition services with pricing subject to change based on project specifics. A formal quote will be provided, and a deposit may be required, with the balance due upon completion.
          </p>
          <!-- Features List -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <!-- Feature 1 -->
            <div class="wow fadeIn" data-wow-delay="0.1s">
              <div class="flex items-center mb-4 animate-fadeIn">
                <i class="fa fa-check fa-2x text-orange-500 mr-3"></i>
                <h6 class="font-bold text-2xl">Acceptance of Terms</h6>
              </div>
              <p class="text-gray-600 animate-fadeIn">By accessing or using the services provided by RJ Building Demolishers, you agree to be bound by these Terms and Conditions. If you do not agree, please refrain from using our services.</p>
            </div>

            <!-- Feature 2 -->
            <div class="wow fadeIn" data-wow-delay="0.2s">
              <div class="flex items-center mb-4 animate-fadeIn">
                <i class="fa fa-check fa-2x text-orange-600 mr-3"></i>
                <h6 class="font-bold text-2xl">Services Provided</h6>
              </div>
              <p class="text-gray-600 animate-fadeIn">RJ Building Demolishers offers demolition services, including residential, commercial, and industrial demolitions. Detailed services will be outlined in the service agreement prior to the commencement of any project.</p>
            </div>

            <!-- Feature 3 -->
            <div class="wow fadeIn" data-wow-delay="0.3s">
              <div class="flex items-center mb-4 animate-fadeIn">
                <i class="fa fa-check fa-2x text-orange-600 mr-3"></i>
                <h6 class="font-bold text-2xl">Quotes and Pricing</h6>
              </div>
              <p class="text-gray-600 animate-fadeIn">All pricing is subject to change based on project specifics and additional services requested. A formal quote will be provided before any work begins, and changes to the scope may incur additional charges</p>
            </div>

            <!-- Feature 4 -->
            <div class="wow fadeIn" data-wow-delay="0.4s">
              <div class="flex items-center mb-4 animate-fadeIn">
                <i class="fa fa-check fa-2x text-orange-600 mr-3"></i>
                <h6 class="font-bold text-2xl">Payment Terms</h6>
              </div>
              <p class="text-gray-600 animate-fadeIn">A deposit may be required to secure services, with the balance due upon project completion unless otherwise agreed upon. Payment methods will be specified in the service agreement</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    </div>



</template>

<script>
import bannar from './bannar.vue';

export default {
  components: {
    bannar
  }
};


</script>