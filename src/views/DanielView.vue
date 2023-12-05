<template>
  <div style="font-size: 2rem; font-weight: bold;">
    <!--Quem viu que o daniel viu o view do vue 
    {{$route.params.vezes}} vezes.-->
      Cadastre-se
    <v-form style="width: 50%; margin: auto;"
      ref="formdodani"
      v-model="formValido"
    >
      <v-text-field v-model="dados.nome" label="Nome" :rules="[rules.required, rules.counter]" />
      <v-text-field v-model="dados.sobrenome" label="Sobrenome" :rules="[rules.counter]" />
      <v-text-field v-model="dados.apelido" label="Apelido" />
      <v-text-field v-model="dados.peso" label="Peso" type="number" />
      <v-text-field v-model="dados.altura" label="Altura" type="number" />

      <v-btn @click="validate" :disabled="!formValido">
        Salvar
      </v-btn>

      <!--<v-btn @click="reset">
        Limpar
      </v-btn>-->
    </v-form>
  </div>
</template>

<script>
export default ({
  name: 'DanielView',
  data() {
    return {
      rules:{
        required: (value) => !!value || 'Campo obrigatório.',
        counter: (value) => value && value.length > 1 || 'Que coisa pequena',
      },
      dados: {
        nome: null,
        sobrenome: null,
        apelido: null,
        peso: null,
        altura: null,
      },
      formValido: false,
    };
  },
  methods: {
    validate() {
      this.$refs.formdodani.validate();
    },
    reset() {
      this.$refs.formdodani.reset();
    },
  },
})
</script>
