<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h3 class="pt-3">Adicionar Produtos</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-3"></div>
                <div class="col-6">
                    <form>
                        <div class="from-group">
                            <label>Nome</label>
                            <input type="text" class="form-control" v-model="ProdutoNome"/>
                        </div>
                        <div class="from-group">
                            <label>Descrição</label>
                            <textarea type="text" class="form-control" v-model="description"/>
                        </div>
                        <div class="from-group">
                            <label>Preço</label>
                            <input type="number" class="form-control" v-model="preco" />
                        </div>
                        <div class="from-group">
                            <label>Image</label>
                            <input type="text" class="form-control" v-model="imageUrl"/>
                        </div>
                        <div class="from-group">
                            <label>Local. Estoque</label>
                            <input type="number" class="form-control" v-model="estoque"/>
                        </div>
                        <div class="from-group">
                            <label>Peso</label>
                            <input type="text" class="form-control" v-model="peso"/>
                        </div>
                        <button type="button" class="btn btn-primary" @click="addProdutos"> Enviar </button>
                    </form>
                </div>
                <div class="col-3"></div>
            </div>
        </div>
    </div>
</template>

<script>
const axios = require("axios");
const sweetalert = require("sweetalert");
export default {
    data() {
        return {
            ProdutoNome: "",
            description: "",
            preco: "",
            imageUrl:"",
            estoque:"",
            peso:"",
            disponibilidade:1,
        }
    },
    methods: {
        addProdutos() {
            console.log(this.ProdutoNome, this.description)
                const newProduto = {
                    nome : this.ProdutoNome,
                    description : this.description,
                    preco : this.preco,
                    categoria : "Teste",
                    imagem : this.imageUrl,
                    estoque : this.estoque,
                    peso : this.peso,
                    disponibilidade : this.disponibilidade,
                };
                const baseURL = "http://localhost:8090/api/"

                axios({
                    method: 'post',
                    url : `${baseURL}/produto`,
                    data: JSON.stringify(newProduto),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(response=> {
                    this.$emit("fetchData");
                    this.$router.push({name: 'produtos'})
                    sweetalert({
                        text: 'Produto adicionado com Sucesso!',
                        icon: 'success',
                    })
                    console.log(response.data)
                    
                }).catch(err=>{
                    console.log(err);
                })
        }
    }
};
</script>

<style scoped>

</style>