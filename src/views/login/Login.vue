<template>
  <div class="container">
    <v-form ref="login" v-model="valid">
      <v-text-field v-model="form.name" :counter="10" :rules="errors.nameRules" label="Name" required></v-text-field>
      <v-text-field v-model="form.email" :rules="errors.emailRules" label="E-mail" required></v-text-field>
      <v-checkbox v-model="form.checkbox" :rules="errors.checkboxRules" label="Do you agree?" required></v-checkbox>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="submit">Submit</v-btn>
    </v-form>
  </div>
</template>

<script src="./Login.js"></script>
<style src="./Login.css"></style>
