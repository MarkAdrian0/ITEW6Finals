<template>
  <div class="container mt-5">
    <h2 class="text-center mb-4">Shopping Cart</h2>
    <div v-if="cartItems.length === 0" class="alert alert-info">Your cart is empty!</div>
    <div v-else>
      <div class="list-group">
        <div class="list-group-item" v-for="(item, index) in cartItems" :key="index">
          <div class="d-flex justify-content-between">
            <span>{{ item.name }} (x{{ item.quantity }})</span>
            <button @click="removeFromCart(index)" class="btn btn-danger btn-sm">Remove</button>
          </div>
        </div>
      </div>
      <div class="text-right mt-3">
        <h4>Total: ${{ totalPrice }}</h4>
        <router-link to="/checkout" class="btn btn-success">Proceed to Checkout</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cartItems() {
      return this.$store.state.cartItems;
    },
    totalPrice() {
      return this.$store.getters.cartTotal;
    }
  },
  methods: {
    removeFromCart(index) {
      this.$store.commit('removeFromCart', index);
    }
  }
};
</script>
