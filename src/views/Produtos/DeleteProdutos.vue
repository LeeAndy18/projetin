<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h3 class="pt-3">Deletar Produtos</h3>
                    {{ id }}
                    Deseja realmente Excluir o Produto {{ produtos.nome }}
                </div>
            </div>
            <div class="row">
                <div class="col-3"></div>
                <div class="col-6">
                    <form>

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
                    deleted : '*',
                };
                const baseURL = "http://localhost:8090/api/"

                axios({
                    method: 'delete',
                    url : `${baseURL}/produto/${this.id}`,
                    data: JSON.stringify(newProduto),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(response=> {
                    this.$emit("fetchData");
                    this.$router.push({name: 'produtos'})
                    sweetalert({
                        text: 'Produto Deletado com Sucesso!',
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