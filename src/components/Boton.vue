<template>
  <button @click='botonClick' class='my-3 btn btn-secondary'>Botón</button>
</template>
<script>
export default {
  data() {
    return {
      mensaje: 'Hola!',
    };
  },
  methods: {
    botonClick() {
      console.log('click');
    },
  },
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
