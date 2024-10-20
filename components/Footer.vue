<template>
  <footer class="bg-gray-900 text-white  py-10 px-5">
    <div class="container mx-auto px-4">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- APEX Section -->
        <div>
          <div class="flex items-center  text-2xl font-bold">
            <i class="fa fa-building text-yellow-500 text-4xl mr-2"></i>
            <span>RJ Building Demolisher</span>
          </div>
          <p class="text-gray-400 mt-4">
            At RJ Building Demolishers, we provide safe & efficient demolition services for 
            residential, commercial, and industrial buildings. 
          </p>
        </div>

        <!-- Address Section -->
        <div>
          <h5 class="text-lg font-semibold ">Address</h5>
          <p class="text-gray-400 mt-4">
            <i class="fas fa-map-marker-alt"></i> NO: 134, Sri Krishna Nagar 1st Main Rd, VRS Nagar, Sri Krishna Nagar, Alapakkam, Maduravoyal, Chennai, Tamil Nadu 600095
          </p>
          <p class="text-gray-400 mt-2">
            <i class="fas fa-phone"></i> +91 95001 64300
          </p>
          <p class="text-gray-400 mt-2">
            <i class="fas fa-envelope"></i> rjtraderschn@gmail.com
          </p>
        </div>

        <!-- Quick Links Section -->
        <div>
        <h5 class="text-lg font-semibold">Quick Links</h5>
        <ul class="mt-4 space-y-2">
          <li><NuxtLink to="/Home/about" class="text-gray-400 hover:text-yellow-500">> About Us</NuxtLink></li>
           <li><NuxtLink to="/Home/contactus" class="text-gray-400 hover:text-yellow-500">> Contact Us</NuxtLink></li>
           <li><NuxtLink to="/Home/services" class="text-gray-400 hover:text-yellow-500">> Our Services</NuxtLink></li>
           <li><NuxtLink to="/Home/terms" class="text-gray-400 hover:text-yellow-500">> Terms & Conditions</NuxtLink></li>
         </ul>
       </div>

        <!-- social Section -->


        <div>
          <h5 class="text-lg font-semibold">Social Links</h5>
      
            <ul class="flex space-x-4 mt-4">
            <li>
              <a href="#" class="flex items-center justify-center w-12 h-12 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 transition">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center justify-center w-12 h-12 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 transition">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center justify-center w-12 h-12 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 transition">
                <i class="fab fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center justify-center w-12 h-12 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 transition">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        
        </div>
      </div>
    </div>

    <!-- Footer Bottom Section with Full Underline Only -->
    <div class="container mx-auto px-4 mt-10">
      <hr class="border-t border-yellow-500" />
      <div class="flex justify-between text-gray-400 text-sm mt-6">
        <p>&copy; RJ Building Demolisher, All Rights Reserved.</p>
        <p>Designed by Collabrain Systems</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>