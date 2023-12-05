import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Entrar',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/daniel/:vezes?',
    name: 'daniel',
    component: () => import(/* webpackChunkName: "daniel" */ '../views/DanielView.vue')
  },
  {
    path: '/produtos',
    name: 'produtos',
    component: () => import(/* webpackChunkName: "daniel" */ '../views/ProdutosView.vue'),
    props: true, // Permite passar parâmetros como props
  },
  {
    path: '/admin/produtos/add',
    name: 'addProdutos',
    component: () => import(/* webpackChunkName: "daniel" */ '../views/Produtos/AddProdutos.vue'),
    //props: true, // Permite passar parâmetros como props
  },
  {
    path: '/admin/produtos/edit',
    name: 'editProdutos',
    component: () => import(/* webpackChunkName: "daniel" */ '../views/Produtos/EditProdutos.vue'),
    //props: true, // Permite passar parâmetros como props
  },
  {
    path: '/produtos/modal',
    name: 'modal',
    component: () => import(/* webpackChunkName: "daniel" */ '../views/Produtos/DeleteProdutos.vue'),
    //props: true, // Permite passar parâmetros como props
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
