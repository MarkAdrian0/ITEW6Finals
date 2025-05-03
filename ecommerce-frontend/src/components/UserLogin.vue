<template>
  <div class="container mt-5">
    <h2 class="text-center mb-4">Login</h2>
    <form @submit.prevent="login">
      <div class="form-group mb-3">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email" v-model="email" required>
      </div>
      <div class="form-group mb-3">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" v-model="password" required>
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      const user = {
        email: this.email,
        password: this.password
      };
      this.$store.commit('setUser', user);
      this.$router.push({ name: 'Home' });
    }
  }
};
</script>
