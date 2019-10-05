export default {
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    checkbox: false,
    checkboxRules: [
      v => !!v || 'You must agree to continue!'
    ]
  }),

  methods: {
    submit() {
      console.log(this.name)
      console.log(this.email)
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        this.$refs.form.reset();
      }
    },
  },
}