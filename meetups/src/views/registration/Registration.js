export default {
  data: () => ({
    form: {
      name: "",
      email: ""
    },
    rules: {
      name: [v => !!v || "Field is required"],
      email: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      checkbox: [v => !!v || "You must agree to continue!"],
      organization: [v => !!v || "Organization is required"],
      position: [v => !!v || "Position is required"],
      phone: [v => !!v || "Phone is required"],
    },
    masks: {
      phone: '+###(##)###-##-##'
    },
    checkbox: false,
    valid: true,
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