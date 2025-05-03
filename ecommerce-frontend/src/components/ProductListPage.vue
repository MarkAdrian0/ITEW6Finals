<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Product Catalog</h1>
    <div class="row">
      <div class="col-md-4 mb-4" v-for="product in products" :key="product.id">
        <div class="card h-100 shadow-sm">
          <img :src="product.image" class="card-img-top" alt="Product Image">
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{ product.description }}</p>
            <div class="d-flex justify-content-between align-items-center">
              <span class="price">${{ product.price }}</span>
              <button @click="addToCart(product)" class="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  methods: {
    addToCart(product) {
      this.$store.commit('addToCart', product);
      this.$router.push({ name: 'Cart' }); // Redirect to cart
    }
  }
};
</script>
