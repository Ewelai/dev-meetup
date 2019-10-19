<template>
  <div class="container">
    <v-form ref="login" v-model="valid">
      <v-text-field v-model="form.firstName" :rules="rules.name" label="First Name" required></v-text-field>
      <v-text-field v-model="form.lastName" :rules="rules.name" label="Last Name" required></v-text-field>
      <v-text-field v-model="form.organization" :rules="rules.organization" label="Organization" required></v-text-field>
      <v-text-field v-model="form.position" :rules="rules.name" label="Position" required></v-text-field>
      <v-text-field v-model="form.phone" v-mask="masks.phone" :rules="rules.phone" label="Phone" required></v-text-field>
      <v-text-field v-model="form.email" :rules="rules.email" label="Email" required></v-text-field>
      <v-checkbox v-model="checkbox" :rules="rules.checkbox" label="Do you agree?" required></v-checkbox>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="submit">Submit</v-btn>
    </v-form>
  </div>
</template>

<script src="./Registration.js"></script>
<style src="./Registration.css"></style>