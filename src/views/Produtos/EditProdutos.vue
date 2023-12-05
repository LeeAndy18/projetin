<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h3 class="pt-3">Editar Produtos</h3>

                </div>
            </div>
            <div class="row">
                <div class="col-3"></div>
                <div class="col-6">
                    <form>
                        <div class="from-group">
                            <label>Nome</label>
                            <input type="text" class="form-control" v-model="produto.nome"/>
                        </div>
                        <div class="from-group">
                            <label>Descrição</label>
                            <textarea type="text" class="form-control" v-model="produto.description"/>
                        </div>
                        <div class="from-group">
                            <label>Preço</label>
                            <input type="text" class="form-control" v-model="produto.preco" />
                        </div>
                        <div class="from-group">
                            <label>Image</label>
                            <input type="text" class="form-control" v-model="produto.imagem"/>
                        </div>
                        <div class="from-group">
                            <label>Local. Estoque</label>
                            <input type="text" class="form-control" v-model="produto.estoque"/>
                        </div>
                        <div class="from-group">
                            <label>Peso</label>
                            <input type="text" class="form-control" v-model="produto.peso"/>
                        </div>
                        <button type="button" class="btn btn-primary" @click="editProdutos"> Salvar </button>
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
            produto: null,
            id: null,
        }
    },
    props: ["baseURL", "produtos"],
    methods: {
        editProdutos() {
            console.log(this.ProdutoNome, this.description)
                const newProduto = {
                    nome : this.produto.nome,
                    description : this.produto.description,
                    preco : this.produto.preco,
                    categoria : "Teste",
                    imagem : this.produto.imagem,
                    estoque : this.produto.estoque,
                    peso : this.produto.peso,
                    disponibilidade : this.produto.disponibilidade,
                };
                const baseURL = "http://localhost:8090/api/"

                axios({
                    method: 'put',
                    url : `${baseURL}/produto/${this.id}`,
                    data: JSON.stringify(newProduto),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(response=> {
                    this.$emit("fetchData");
                    this.$router.push({name: 'produtos'})
                    sweetalert({
                        text: 'Produto Alterado com Sucesso!',
                        icon: 'success',
                    })
                    console.log(response.data)
                    
                }).catch(err=>{
                    console.log(err);
                })
        }
    },
    mounted() {
        this.id = this.$route.params.id;
        this.produto = this.produtos.find(produto => produto.id == this.id)
    }
};
</script>

<style scoped>

</style>