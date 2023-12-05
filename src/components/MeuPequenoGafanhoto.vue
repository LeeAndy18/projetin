<template>
  <v-container>
    Olhando pro nada e pensando em {{ texto }}.
    <br />
    Esse texto tem um tamanho {{ tamanhoDoTexto }}
    <br />
    <v-btn @click="mudarTexto">
      Altera de dentro pra fora
    </v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'MeuPequenoGafanhoto',
  props: {
    assunto: {
      type: String,
      required: false,
      default: 'tudo',
    },
  },
  computed:{
    tamanhoDoTexto() {
      return this.texto.length;
    },
  },
  watch:{
    assunto(novoValor) {
      clearTimeout(this.timeout);
      setTimeout(() => {
        this.texto = novoValor;
      }, 1000);
    },
  },
  data() {
    return {
      texto: this.assunto,
      timeout: null,
    };
  },
  methods: {
    mudarTexto() {
      this.$emit('mudandoTexto', '');
    },
  },
}
</script>