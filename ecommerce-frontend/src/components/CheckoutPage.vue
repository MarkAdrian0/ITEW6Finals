<template>
  <div class="container mt-5">
    <h2 class="text-center mb-4">Checkout</h2>
    <form @submit.prevent="checkout">
      <div class="form-group mb-3">
        <label for="address">Shipping Address</label>
        <input type="text" id="address" class="form-control" v-model="address" required />
      </div>
      <button type="submit" class="btn btn-primary btn-block">Complete Order</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      address: ''
    };
  },
  methods: {
    checkout() {
      if (!this.$store.state.user) {
        alert("You must be logged in to proceed!");
        this.$router.push({ name: 'Login' });
        return;
      }
      this.$store.commit('clearCart');
      this.$router.push({ name: 'OrderSummary' });
    }
  }
};
</script>
