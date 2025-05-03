<template>
  <div class="container mt-5">
    <h2 class="text-center mb-4">Register</h2>
    <form @submit.prevent="register">
      <div class="form-group mb-3">
        <label for="username">Username</label>
        <input type="text" class="form-control" id="username" v-model="username" required>
      </div>
      <div class="form-group mb-3">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email" v-model="email" required>
      </div>
      <div class="form-group mb-3">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" v-model="password" required>
      </div>
      <button type="submit" class="btn btn-primary">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: ''
    };
  },
  methods: {
    register() {
      const user = {
        username: this.username,
        email: this.email,
        password: this.password
      };
      this.$store.commit('setUser', user);
      this.$router.push({ name: 'Home' }); // Redirect to Home after registration
    }
  }
};
</script>
