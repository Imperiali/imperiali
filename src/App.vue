<template>
  <v-app class="grey darken-2">
    <v-toolbar flat color="transparent">
      <v-toolbar-title class="headline text-uppercase">
        <router-link to="/" tag="span">
          <span class="white--text">Imperiali</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/about" tag="v-btn">
        <v-btn flat >
          <span class="mr-2 white--text">Sobre</span>
        </v-btn>
      </router-link>
      <router-link to="/work" tag="v-btn">
        <v-btn flat >
          <span class="mr-2 white--text">Trabalhos</span>
        </v-btn>
      </router-link>
      <router-link to="/contact" tag="v-btn">
        <v-btn flat >
          <span class="mr-2 white--text">Contato</span>
        </v-btn>
      </router-link>
    </v-toolbar>

    <v-content class="mx-4 mb-4">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

  export default {
    name: 'App',
    data () {
      return {
        //
      }
    }
  }
</script>
