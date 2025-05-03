import { createRouter, createWebHistory } from 'vue-router';
import ProductListPage from '../components/ProductListPage.vue';
import UserRegister from '../components/UserRegister.vue';
import UserLogin from '../components/UserLogin.vue';
import ShoppingCart from '../components/ShoppingCart.vue';
import CheckoutPage from '../components/CheckoutPage.vue';
import OrderSummaryPage from '../components/OrderSummaryPage.vue';
import AdminDashboardPage from '../components/AdminDashboardPage.vue';

const routes = [
  { path: '/', component: ProductListPage, name: 'Home' },
  { path: '/register', component: UserRegister, name: 'Register' },
  { path: '/login', component: UserLogin, name: 'Login' },
  { path: '/cart', component: ShoppingCart, name: 'Cart' },
  { path: '/checkout', component: CheckoutPage, name: 'Checkout' },
  { path: '/order-summary', component: OrderSummaryPage, name: 'OrderSummary' },
  { path: '/admin', component: AdminDashboardPage, name: 'AdminDashboard' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
