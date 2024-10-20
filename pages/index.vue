<template>
  <div>
    <carousel />
    <about />
    <facts />
    <whychoose />
    <services />
    <team />
    <Testimonials />
  </div>
</template>



<script>
import services from './Home/services.vue';
import Testimonials from './Home/Testimonials.vue';
import facts from './Home/facts.vue'
import whychoose from './Home/whychoose.vue';
import carousel from './Home/carousel.vue';

import team from './Home/team.vue';
import about from './Home/about.vue';
export default {
  components: { services, Testimonials, facts, whychoose, carousel, team, about },
  name: 'index',
  data() {
    return {
      activeSlide: 0,
      interval: null,
      currentIndex: 0,

    };
  },

};
</script>