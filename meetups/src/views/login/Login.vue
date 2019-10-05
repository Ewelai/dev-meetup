<template>
  <div class="container">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>
      <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
      <v-checkbox v-model="checkbox" :rules="checkboxRules" label="Do you agree?" required></v-checkbox>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="submit">Submit</v-btn>
    </v-form>
  </div>
</template>

<script src="./Login.js"></script>
<style src="./Login.css"></style>
