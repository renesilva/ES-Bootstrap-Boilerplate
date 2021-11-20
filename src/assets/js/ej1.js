const AppComponent = {
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
  methods: {
    calcular() {
      this.mensaje =
        'La hora calculada es: ' +
        this.arreglarHora(this.resultado[0]) +
        ':' +
        this.arreglarHora(this.resultado[1]) +
        ':' +
        this.arreglarHora(this.resultado[2]);
    },
    arreglarHora(valor) {
      if (valor < 10) {
        return '0' + valor;
      } else {
        return valor;
      }
    },
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
  watch: {},
};
const app = Vue.createApp(AppComponent);
const vm = app.mount('#app');

// También podemos crearlo de esta manera Vue.createApp(AppComponent).mount('#app');
