import { createStore } from 'vuex'; // Correct import for Vue 3 and Vuex 4

const store = createStore({
  state() {
    return {
      cartItems: [],
      user: null, // For user authentication
      products: [
        { id: 1, name: 'Product 1', description: 'Description for product 1', price: 29.99, image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Product 2', description: 'Description for product 2', price: 39.99, image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Product 3', description: 'Description for product 3', price: 49.99, image: 'https://via.placeholder.com/150' },
        { id: 4, name: 'Product 4', description: 'Description for product 4', price: 59.99, image: 'https://via.placeholder.com/150' },
      ], // Sample products list
    };
  },
  mutations: {
    addToCart(state, product) {
      const existingProduct = state.cartItems.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cartItems.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(state, index) {
      state.cartItems.splice(index, 1);
    },
    clearCart(state) {
      state.cartItems = [];
    },
    setUser(state, user) {
      state.user = user;
    },
    logout(state) {
      state.user = null;
    },
  },
  actions: {
    login({ commit }, user) {
      commit('setUser', user);
    },
    logout({ commit }) {
      commit('logout');
    },
  },
  getters: {
    cartTotal(state) {
      return state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    },
    cartItemCount(state) {
      return state.cartItems.length;
    },
    isUserLoggedIn(state) {
      return !!state.user;
    },
  },
});

export default store;
