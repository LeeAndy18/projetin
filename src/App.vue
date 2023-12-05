<template>
  <div id="app">

    <router-view v-if="produtos"
    :baseURL= "baseURL"
    :produtos = "produtos"
    :nome = "nome">
    @fetchData= "fetchData"
    </router-view>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      baseURL : "http://localhost:8090/api/",
      produtos : null,
      nome: "Caro Admin",
    }
  },
  methods: {
    async fetchData() {
      //api chamar todas as buscas des produits.
      await axios.get(this.baseURL + "produtos")
      .then(res => {
        this.produtos = res.data
      }).catch((err)=> console.log('err',err));
    }
  },
  mounted() {
    this.fetchData();
  }
};

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
