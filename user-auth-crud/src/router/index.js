import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Signup from '../views/Signup.vue';
import Profile from '../views/Profile.vue';
import AllProfiles from '../views/AllProfile.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/signup', name: 'Signup', component: Signup },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/allprofile', name: 'AllProfiles', component: AllProfiles },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
