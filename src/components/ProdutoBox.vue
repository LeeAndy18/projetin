<template>
    <div class="card w-100 h-100" style="margin-top: 5px;">
        <div class="embed-responsive embed-responsive-16by9">
            <img class="card-img-top embed-responsive-item" :src="produto.imagem" alt="Card image cap">
        </div>
        <div class="card-body">
            <h5 class="card-title">{{produto.nome}}</h5>
            <p class="card-text">{{produto.description}}</p>
            <p class="card-text">R$ {{produto.preco}}</p>
            <router-link :to="{name: 'editProdutos', params: {id: produto.id}}">
                <button class="btn btn-primary">Editar</button>
            </router-link>

            <div style="margin-bottom: 16px;" ></div>

            <router-link :to="{name: 'modal', params: {idDelete: produto.id}}">
                <button class="btn btn-primary">Deletar</button>
            </router-link>
            
        </div>
    </div>
</template>


<script>

//import { defineComponent } from '@vue/composition-api';
export default {
    name: "ProdutoBox",
    props: ["produto"],
    methods: {},

}

</script>

<style scoped>
    .card-img-top{
        object-fit: cover;
    }
</style>