<template>
  <div>
    <v-toolbar>
      <v-toolbar-title class="headline text-uppercase">
        <router-link to="/" exact class="black--text link">
          <span>Dev</span>
          <span class="font-weight-light">Meetups</span>
        </router-link>
      </v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-toolbar-items>
        <v-btn text>Link 1</v-btn>
        <v-btn text>Link 2</v-btn>
        <v-btn text>Link 3</v-btn>
      </v-toolbar-items>

      <template v-if="$vuetify.breakpoint.smAndUp">
        <v-btn rounded color="primary" dark>
          <router-link to="/login" exact class="white--text link">Sign Up</router-link>
        </v-btn>
      </template>
    </v-toolbar>
  </div>
</template>

<script src="./Header.js"></script>

<style scoped>
  .link {
    text-decoration: none;
  }
</style>


