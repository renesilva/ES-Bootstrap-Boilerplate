const AppComponent = {
  data() {
    return {};
  },
  methods: {},
  computed: {},
  watch: {},
};
const app = Vue.createApp(AppComponent);
const vm = app.mount('#app');

// También podemos crearlo de esta manera Vue.createApp(AppComponent).mount('#app');
// Se pueden utilizar estos hooks para el ciclo de vida
// beforeCreate, created, beforeMount, mounted, beforeUpdate, updated
// activated, deactivated, beforeUnmount, unmounted