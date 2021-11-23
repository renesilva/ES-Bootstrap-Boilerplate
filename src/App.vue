<template>
  <div>
    <div class="container">
      <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <router-link
          to="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <i class="bi bi-bootstrap-fill me-2"></i>
          <span class="fs-4">Simple header</span>
        </router-link>
        <ul class="nav nav-pills">
          <template v-for="(navOption, index) in navOptions">
            <li class="nav-item" :key="index">
              <router-link
                class="nav-link"
                :class="this.$route.path === navOption.route ? 'active' : ''"
                :to="navOption.route"
                >{{ navOption.text }}
              </router-link>
            </li>
          </template>
        </ul>
      </header>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div>
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// console.log(this.$route.path);
export default {
  data() {
    return {
      navOptions: [
        {
          route: '/',
          text: 'Inicio',
        },
        {
          route: '/acerca-de',
          text: 'Acerca de',
        },
      ],
    };
  },
  methods: {},
  computed: {},
  watch: {},
  mounted() {},
  // Se pueden utilizar estos hooks para el ciclo de vida
  // beforeCreate, created, beforeMount, mounted, beforeUpdate, updated
  // activated, deactivated, beforeUnmount, unmounted
};
</script>

<style scoped></style>