<template>

  <div class="container">
    <div class="row">
      <div class="col-12 content">
        <h1>{{ mensaje }} <i class="bi bi-arrow-right-circle"></i></h1>
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
          >
            Dropdown button
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  data() {
    return {
      mensaje: 'Hola!',
    };
  },
  methods: {},
  computed: {},
  watch: {},
  mounted() {
  },
  // Se pueden utilizar estos hooks para el ciclo de vida
  // beforeCreate, created, beforeMount, mounted, beforeUpdate, updated
  // activated, deactivated, beforeUnmount, unmounted
};
</script>

<style scoped>

</style>
