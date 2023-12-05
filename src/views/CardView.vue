<template>

<div style="margin-left: 30px;">
    <div>
        <template  style="margin-bottom: 20px;">
            <v-card 
            :loading="loading"
            class="mx-auto my-12"
            max-width="374"
            >
                <template slot="progress">
                    <v-progress-linear
                    color="deep-purple"
                    height="10"
                    indeterminate
                    ></v-progress-linear>
                </template>
            
                <v-img
                    height="250"
                    src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                ></v-img>
            
                <v-card-title>Cafe Badilico</v-card-title>
            
                <v-card-text>
                    <v-row
                    align="center"
                    class="mx-0"
                    >
                    <v-rating
                        :value="4.5"
                        color="amber"
                        dense
                        half-increments
                        readonly
                        size="14"
                    ></v-rating>
            
                    <div class="grey--text ms-4">
                        4.5 (413)
                    </div>
                    </v-row>
            
                    <div class="my-4 text-subtitle-1">
                    $ • Italian, Cafe
                    </div>
            
                    <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
                </v-card-text>
            
                <v-divider class="mx-4"></v-divider>
            
                <v-card-actions>
                    <v-btn
                    color="deep-purple lighten-2"
                    text
                    @click="reserve"
                    >
                    Adicionar ao carinho
                    </v-btn>
                </v-card-actions>
            </v-card>
        </template>
    </div >
        
</div>

</template>


<script>

//import DanielView from './DanielView.vue';

  export default ({
    name: 'CardView',
    props: {
      data:{
        type: String,
        default: "false"
      }
    },
    data() {
      return {
        rules:{
          required: (value) => !!value || 'Campo obrigatório.',
          counter: (value) => value && value.length > 1 || 'Digite pelo menos 2 Caracteres.',
        },
        dados: {
          nome: null,
          description: null,
          preco: null,
          categoria: null,
          imagem: null,
          estoque: null,
          peso: null,
          disponibilidade: null,
          aproduto: ['Lee','Herli','Car']
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
        
      }
    }

  })


</script>