<template>
  <div class="container">
    <v-form ref="login" v-model="valid" class="container-box">
      <v-text-field v-model="form.name" :counter="10" :rules="errors.nameRules" label="Name" required></v-text-field>
      <v-text-field v-model="form.email" :rules="errors.emailRules" label="E-mail" required></v-text-field>
      <v-row>
        <v-col cols="12" sm="6" class="d-flex flex-row align-center">
          <v-btn :disabled="!valid" color="success" class="mr-4" @click="submit">Submit</v-btn>
        </v-col>
        <v-col cols="12" sm="6" class="d-flex flex-row justify-end align-center">
          <v-checkbox v-model="form.checkbox" :rules="errors.checkboxRules" label="Do you agree?" required></v-checkbox>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script src="./Login.js"></script>

<style scoped>
  .container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .container-box {
    padding: 50px;
    border: 1px solid grey;
    width: 500px;
  }
</style>
