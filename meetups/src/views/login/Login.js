export default {
  data: () => ({
    form: {
      name: "",
      email: ""
    },
    checkbox: false,
    valid: true,
    rules: {
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 10) || "Name must be less than 10 characters"
      ],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      checkboxRules: [v => !!v || "You must agree to continue!"]
    }
  }),

  methods: {
    submit() {
      console.log(this.form);
      if (this.$refs.login.validate()) {
        this.snackbar = true;
      }
    }
  }
};