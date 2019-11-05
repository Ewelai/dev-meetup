// import Login from "../../views/login/Login.vue";
export default {
  components: {
    // "app-login": Login
  },
  data: () => {
    return {
      msg: 'Home title',
      env: process.env.VUE_APP_ROOT_API,
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
    }
  },
  // data: () => ({
  //     msg: 'Home title'
  // })
}