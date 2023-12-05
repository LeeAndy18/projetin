<template>
    <div style="font-size: 3rem; font-weight: bold;">
      <h4 margin="40px">Projeto e-commerce</h4>
      Entrar
      <!--<form>
        <label for="username">Username:</label><br>
        <input type="text" id="username" name="username"><br>
        <label for="pwd">Password:</label><br>
        <input type="password" id="pwd" name="pwd">
      </form>-->
      <v-form style="width: 40%; margin: auto;"
        ref="formdodani"
        v-model="formValido"
      >
        <v-text-field v-model="dados.email" label="Email" :rules="[rules.required, rules.counter]" />
        <v-text-field v-model="dados.senha" type="password" label="Senha" :rules="[rules.counter]" />
  
        <!--<router-link to="/produtos" custom v-slot="{ navigate }">-->
        <v-btn @click="fetchDataAndNavigate" :disabled="!formValido">
          Entrar
        </v-btn>

      <!--</router-link>-->
        <ul>
          <router-link to="/daniel"><p style="font-size:16px;">Não possui conta? Cadastre-se!</p></router-link>
        </ul>
        <!--<v-btn @click="reset">
          Limpar
        </v-btn>-->
      </v-form>
    </div>
  </template>
  
  <script>
//import DanielView from './DanielView.vue';
import axios from 'axios';

  export default ({
    name: 'EntrarView',
    data() {
      return {
        rules:{
          required: (value) => !!value || 'Campo obrigatório.',
          counter: (value) => value && value.length > 1 || 'Digite pelo menos 2 Caracteres.',
        },
        dados: {
          email: null,
          senha: null,
        },
        formValido: false,
      };
    },
    methods: {
      validate() {
        this.$refs.formdodani.validate();
        //<router-link to="/about">About</router-link>
        
      },
      reset() {
        this.$refs.formdodani.reset();
      },
      entrar() {
        
      },
      fetchDataAndNavigate() {
     // Objeto JSON que você deseja enviar no corpo da requisição
      // var jsonData = {
      //   email: 'ambroiseleeandy@gmail.com',
      //   senha: '123456'
      // };
      // Configuração do cabeçalho da requisição
      // const headers = {
      //   'Content-Type': 'application/json', // Indica que o corpo é JSON
      //   'Authorization': 'Bearer SeuTokenJWT', // Exemplo de um token de autorização
      //   'email': 'ambroiseleeandy@gmail.com',
      //   'senha': '123456'
      //   // Outros cabeçalhos, se necessário
      // };

      // Faça a requisição GET usando Axios
      axios.post('http://localhost:8090/api/logar/', [] ,{
      headers: {
          'Content-Type': 'application/json',
          'email': this.dados.email,
          'senha': this.dados.senha
      }
      })
        .then(res => {
          const permissao = res.data.permissao;
          const email = res.data.email;
          const nome = res.data.nome;
          console.log(permissao);
          console.log(email);
          console.log(nome);
          // Navegue para outra rota e passe os dados como parâmetro
          this.$router.push({
            name: 'produtos',
            params: { nome },
          });
        })
        .catch(error => {
          console.error('Erro ao obter dados:', error);
        });
      }
    },
  })
  </script>
  