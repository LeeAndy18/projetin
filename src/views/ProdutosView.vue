<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h5 margin="40px"> Bem vindo {{ nome }}</h5>
                <h3 class="pt-3">Lista de Produtos </h3>
                <router-link :to="{name : 'addProdutos'}">
                    <button class="btn btn-primary"> Adicionar Produto </button>
                </router-link>
            </div>
        </div>
        <div class="row">
            <div v-for="produto of produtos" v-bind:key="produto.id" class="col-xl-4 col-md-6 col-12 pt-3 d-flex">
                <ProdutoBox :produto="produto"> </ProdutoBox> 
            </div>
        </div>

<!--        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">New message</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label">Recipient: {{ idDelete }}</label>
                        <input type="text" class="form-control" id="recipient-name">
                    </div>
                    <div class="form-group">
                        <label for="message-text" class="col-form-label">Message:</label>
                        <textarea class="form-control" id="message-text"></textarea>
                    </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Send message</button>
                </div>
                </div>
            </div>
        </div>-->
        
    </div>


  </template>
  
<script>

import ProdutoBox from '../components/ProdutoBox.vue';
//import axios from 'axios';
//import CardView from './CardView.vue';

  export default ({
    name: "ProdutosView",
    components: { ProdutoBox },
    props: ["nome","baseUrl","produtos"],
    data() {
        return {
            rules: {
                required: (value) => !!value || "Campo obrigatório.",
                counter: (value) => value && value.length > 1 || "Digite pelo menos 2 Caracteres.",
            },
            formValido: false,
            //produtos: null,
            baseURL: "http://localhost:8090/api/",
            //idDelete: null,
            //dialog : false,
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
        onShowModal() {

        }
        // async fetchDataAndNavigate() {
        //     // Faça a requisição GET usando Axios
        //     await axios.get(`${this.baseURL}produtos`)
        //         .then(response => {
        //         this.produtos = response.data;
        //         console.log(this.produtos);
        //     })
        //         .catch(error => {
        //         console.error("Erro ao obter dados:", error);
        //     });
        // }
    },
     //mounted() {
    //     this.fetchDataAndNavigate();
    //        this.onShowModal;
    // }
})
</script>
  