const arreglarHora = (valor) => {
  if (valor < 10) {
    return '0' + valor;
  } else {
    return valor;
  }
};

// Vue Ejercicio Horas
const EjHoras = {
  data() {
    return {
      sumH: 2,
      sumM: 30,
      sumS: 30,
      horas: 0,
      minutos: 0,
      segundos: 0,
      mensaje: '',
    };
  },
  computed: {
    resultado() {
      let cS = 0;
      let cM = 0;

      let finalS = this.sumS + this.segundos;
      if (finalS >= 60) {
        finalS = finalS - 60;
        cS = 1;
      }

      let finalM = this.sumM + this.minutos + cS;
      if (finalM >= 60) {
        finalM = finalM - 60;
        cM = 1;
      }

      let finalH = this.sumH + this.horas + cM;
      if (finalH >= 12) {
        finalH = finalH - 12;
      }

      return [finalH, finalM, finalS];
    },
  },
  methods: {
    calcular() {
      this.mensaje =
        'La hora calculada es: ' +
        arreglarHora(this.resultado[0]) +
        ':' +
        arreglarHora(this.resultado[1]) +
        ':' +
        arreglarHora(this.resultado[2]);
    },
  },
};
Vue.createApp(EjHoras).mount('#ejercicio-horas');

// Vue Ejercicio Lista de Compras
const EjListaCompras = {
  data() {
    return {
      itemInput: '',
      items: ['Huevos', 'Leche'],
    };
  },
  methods: {
    adicionarItem() {
      if (this.itemInput !== '') {
        this.items.push(this.itemInput);
        this.itemInput = '';
        this.$refs.ejListaNombre.focus();
      }
    },
    eliminarItem(index) {
      this.items.splice(index, 1);
    },
  },
};
Vue.createApp(EjListaCompras).mount('#ejercicio-lista-compras');

// Vue Ejercicio Calculadora
const EjCalculadora = {
  data() {
    return {};
  },
  methods: {},
};
Vue.createApp(EjCalculadora).mount('#ejercicio-calculadora');
