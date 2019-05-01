<template>
  <v-app >
    <v-toolbar flat>
      <v-toolbar-title class="headline text-uppercase">
        <router-link to="/" tag="span">
          <span>Imperiali</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/about" tag="v-btn">
        <v-btn flat >
          <span class="mr-2">About</span>
        </v-btn>
      </router-link>
      <router-link to="/work" tag="v-btn">
        <v-btn flat >
          <span class="mr-2">Work</span>
        </v-btn>
      </router-link>
      <router-link to="/contact" tag="v-btn">
        <v-btn flat >
          <span class="mr-2">Contact</span>
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
