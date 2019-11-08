<template>
  <div class="container">
    <v-card class="container-box">
      <div class="display-1 text-center mb-4">Sign Up</div>
      <v-form ref="login" v-model="valid">
        <v-text-field v-model="form.name" :rules="rules.nameRules" label="Name" required></v-text-field>
        <v-text-field v-model="form.email" :rules="rules.emailRules" label="E-mail" required></v-text-field>
        <v-text-field 
          :type="showPassword ? 'text' : 'password'" 
          @click:append="showPassword = !showPassword" 
          :append-icon="showPassword ? 'visibility' : 'visibility_off'" 
          v-model="form.password" 
          :rules="rules.passwordRules" 
          label="Password" 
          required>
        </v-text-field>
        <v-text-field 
          :type="showConfirm ? 'text' : 'password'" 
          @click:append="showConfirm = !showConfirm" 
          :append-icon="showConfirm ? 'visibility' : 'visibility_off'" 
          v-model="form.confirmPassword" 
          :rules="rules.passwordRules" 
          label="Confirm Password" 
          required>
        </v-text-field>
        <v-row>
          <v-col cols="12" sm="6" class="d-flex flex-row align-center">
            <v-btn :disabled="!valid" color="success" class="mr-4" @click="submit">Registration</v-btn>
          </v-col>
          <v-col cols="12" sm="6" class="d-flex flex-row justify-end align-center">
            <v-checkbox v-model="form.checkbox" :rules="rules.checkboxRules" label="Do you agree?" required></v-checkbox>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
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
    padding: 25px 50px;
    width: 500px;
  }
</style>
