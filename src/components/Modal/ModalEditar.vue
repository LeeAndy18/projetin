<template>
    <div>
      <v-dialog
        max-width="600px"
      >
        
        <v-btn flat slot="activator" class="success"
        >
        Open Dialog
        </v-btn>

        <v-card>
          <v-card-title class="text-h5">
            Use Google's location service?
          </v-card-title>
          <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green-darken-1"
              variant="text"
              @click="dialog = false"
            >
              Disagree
            </v-btn>
            <v-btn
              color="green-darken-1"
              variant="text"
              @click="dialog = false"
            >
              Agree
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </template>

  <script>
    export default {
    //   data () {
    //     return {
    //       dialog: true,
    //     }
    //   },
    }
  </script>