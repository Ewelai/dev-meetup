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

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text>Link 1</v-btn>
        <v-btn text>Link 2</v-btn>
        <v-btn text>Link 3</v-btn>
        <v-btn text>
          <router-link to="/login" exact class="black--text link">Sign Up</router-link>
        </v-btn>
      </v-toolbar-items>

      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on">
            <v-icon left>list</v-icon>
            Menu
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title>LO</v-list-item-title>
            <v-list-item-title>li</v-list-item-title>
            <v-list-item-title>kg</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar>
  </div>
</template>

<script src="./Header.js"></script>

<style scoped>
.link {
  text-decoration: none;
}
</style>


