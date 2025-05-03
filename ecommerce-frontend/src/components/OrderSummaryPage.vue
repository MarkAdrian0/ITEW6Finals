<template>
  <div class="container mt-5">
    <h2 class="text-center mb-4">Order Summary</h2>
    <div class="alert alert-success">
      <p>Your order has been placed successfully!</p>
      <p><strong>Total:</strong> ${{ totalPrice }}</p>
    </div>
    <router-link to="/" class="btn btn-primary">Go Back to Products</router-link>
  </div>
</template>

<script>
export default {
  computed: {
    totalPrice() {
      return this.$store.getters.cartTotal;
    }
  }
};
</script>
