/** @type {import('tailwindcss').Config} */
export default {
  content:  [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
colors:{
  "mango-gold": "#ffc107",
  "dark-black": "#00000099"
},

fontFamily:{
  Roboto: "Roboto, Poppins"
},

container:{
  center: true,
  padding: "2rem",
},    


    },
  },


  css: [
    '@fortawesome/fontawesome-free/css/all.css'
  ],
  
  plugins: [],
  buildModules: [
    '@nuxtjs/fontawesome',
  ],
  fontawesome: {
    icons: {
      solid: ['faCheck'], // Include only the icons you need
    }
  }
  
}

