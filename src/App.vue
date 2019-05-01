<template>
  <v-app class="app">
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

    <v-content class="mx-4 mb-4" >
      <router-view class="black-trasnparent"></router-view>
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

<style scoped lang="scss">
  .app {
    background-image: url("https://i.pinimg.com/564x/47/6d/fa/476dfa75622329da791339ff34dc92a6.jpg");
  }
  .black-trasnparent{
    background-color: rgba(0, 0, 0, 0.7);
  }

</style>