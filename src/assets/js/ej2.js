const AppComponent = {
  data() {
    return {
      carousel: null,
      slides: [
        {
          image: 'assets/images/code-1.jpg',
          title: 'Primero!',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          image: 'assets/images/code-2.jpg',
          title: 'Segundo!',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          image: 'assets/images/code-3.jpg',
          title: 'Tercero!',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
      ],
    };
  },
  methods: {},
  computed: {},
  watch: {},
  mounted() {
    const carouselElement = document.querySelector('#carouselEj2');
    this.carousel = bootstrap.Carousel.getOrCreateInstance(carouselElement, {
      interval: 1000,
      ride: 'carousel',
    });
    this.carousel.cycle();
  },
};
const app = Vue.createApp(AppComponent);
const vm = app.mount('#app');

// También podemos crearlo de esta manera Vue.createApp(AppComponent).mount('#app');
