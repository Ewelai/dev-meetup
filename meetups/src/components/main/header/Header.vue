<template>
  <div>
    <v-toolbar>
      <v-toolbar-title class="headline text-uppercase">
        <span>Dev</span>
        <span class="font-weight-light">Meetups</span>
      </v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-toolbar-items>
        <v-btn text>Link 1</v-btn>
        <v-btn text>Link 2</v-btn>
        <v-btn text>Link 3</v-btn>
      </v-toolbar-items>

      <template v-if="$vuetify.breakpoint.smAndUp">
        <v-btn rounded color="primary" dark>Sign up</v-btn>
      </template>
    </v-toolbar>
  </div>
</template>

<script src="./Header.js"></script>

<style lang="css" scoped></style>


