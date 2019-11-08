import * as rules from '../../utils/validation.util';

export default {
  data: () => ({
    valid: true,
    showPassword: false,
    showConfirm: false,
    form: {
      checkbox: false,
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  }),

  computed: {
    rules() {
      return {
        nameRules: [
          rules.REQUIRED,
          rules.MAX_VALUE(5),
          rules.MIN_VALUE(2)
        ],
        emailRules: [
          rules.REQUIRED,
          rules.EMAIL
        ],
        passwordRules: [
          rules.REQUIRED,
          rules.SAME_PASSWORD(this.form.password)
        ],
        checkboxRules: [
          rules.CHECKBOX
        ]
      }
    }
  },

  methods: {
    submit() {
      if (this.$refs.login.validate()) {
        this.snackbar = true;
      }
    },
  },
}