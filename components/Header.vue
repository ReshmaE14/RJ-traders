<template>
 
  <div class="sticky-bannar">
    <!-- Topbar Start -->
    <div class="topbar bg-gray-100 p-2 hidden md:flex">
      <div class="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
        <!-- Left Section -->
        <div class="flex flex-wrap justify-center md:justify-start space-x-4">
          <div class="flex items-center space-x-2">
            <i class="fa fa-phone-alt text-gray-500"></i>
            <span class="text-sm text-gray-700">+91 9500164300</span>
          </div>
          <div class="flex items-center space-x-2">
            <i class="far fa-envelope-open text-gray-500"></i>
            <span class="text-sm text-gray-700">rjtraderschn@gmail.com</span>
          </div>
          <div class="flex items-center space-x-2">
            <i class="far fa-clock text-gray-500"></i>
            <span class="text-sm text-gray-700">Mon - Fri : 09 AM - 09 PM</span>
          </div>
        </div>

        <!-- Right Section: Social Media Icons -->
        <div class="flex items-center space-x-3">
          <a href="#" class="btn-square">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="btn-square">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="btn-square">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="#" class="btn-square">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
    <!-- Topbar End -->

    <!-- Navbar Start -->
    <nav class="navbar bg-white shadow-lg">
      <div class="container mx-auto flex justify-between items-center px-4 h-full">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center">
          <i class="fa fa-building text-yellow-500 text-3xl lg:text-5xl mr-2"></i>
          <h1 class="text-3xl lg:text-3xl font-bold text-gray-800">RJ TRADERS</h1>
        </NuxtLink>

        <!-- Mobile Menu Button -->
        <button @click="toggleMenu" class="lg:hidden text-gray-800 focus:outline-none">
          <i class="fas fa-bars text-2xl" v-if="!isMenuOpen"></i>
          <i class="fas fa-times text-2xl" v-else></i> <!-- Close icon -->
        </button>

        <!-- Menu Links -->
        <div
          :class="['lg:flex items-center', { hidden: !isMenuOpen, 'block': isMenuOpen }]"
          class="absolute lg:relative bg-white shadow-lg lg:shadow-none w-full lg:w-auto top-16 left-0 lg:top-0 p-4 lg:p-0 z-20 transition-all duration-300 ease-in-out"
        >
          <div class="flex flex-col lg:flex-row lg:space-x-6">
            <NuxtLink to="/" class="nav-link" exact-active-class="text-yellow-500" @click="closeMenu">Home</NuxtLink>
            <NuxtLink to="/Home/about" class="nav-link" @click="closeMenu">About Us</NuxtLink>
            <NuxtLink to="/Home/services" class="nav-link" @click="closeMenu">Our Services</NuxtLink>
            <NuxtLink to="/Home/contactus" class="nav-link" @click="closeMenu">Contact Us</NuxtLink>
          </div>
        </div>
      </div>
    </nav>
    <!-- Navbar End -->

    <!-- Slot for the rest of the pages -->
    <nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      isMobile: false, // Variable to check if in mobile view
    };
  },
  mounted() {
    this.checkViewport();
    window.addEventListener('resize', this.checkViewport); // Listen for window resize
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkViewport); // Clean up the event listener
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false; // Close menu when a link is clicked
    },
    checkViewport() {
      this.isMobile = window.innerWidth < 768; // Check if in mobile view
      if (!this.isMobile) {
        this.isMenuOpen = false; // Close menu if switching to desktop
      }
    },
  },
};
</script>

<style scoped>
/* Sticky Wrapper: Only apply sticky on larger screens */
@media (min-width: 768px) {
  .sticky-bannar {
    position: sticky;
    top: 0;
    z-index: 50;
  }
}

/* Navbar Styling */
.navbar {
  height: 80px;
  display: flex;
  align-items: center;
}

/* Adjust padding for smaller devices */
@media (max-width: 768px) {
  .navbar {
    padding: 10px;
  }
  .nav-link {
    padding: 12px 0;
    text-align: center;
  }
}

/* Topbar Styling */
.topbar {
  height: 40px;
  display: flex;
  align-items: center;
  z-index: 50;
}

/* Hide topbar on smaller screens */
@media (max-width: 768px) {
  .topbar {
    display: none; /* Ensure topbar is hidden on mobile devices */
  }
}

/* Button styling for social media icons */
.btn-square {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
}
.btn-square:hover {
  background-color: #fbbf24;
  color: white;
}

/* Keep hamburger icon always visible */
.hamburger-icon {
  position: absolute;
  right: 16px; /* Adjust the position as needed */
}
</style>
