<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light px-4">
      <div class="container-fluid">
        <router-link class="navbar-brand fw-bolder" to="/">User Auth CRUD</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item" v-if="!authStore.token">
              <router-link class="nav-link fw-bolder" to="/login">Login</router-link>
            </li>
            <li class="nav-item" v-if="!authStore.token">
              <router-link class="nav-link fw-bolder" to="/signup">Sign Up</router-link>
            </li>
            <li class="nav-item" v-if="authStore.token">
              <router-link class="nav-link fw-bolder" to="/profile"><i class="fa-solid fa-user"></i> Profile</router-link>
            </li>
            <li class="nav-item" v-if="!authStore.token">
              <router-link class="nav-link fw-bolder" to="/allprofile">All Profiles</router-link>
            </li>
            <li class="nav-item" v-if="authStore.token">
              <button class="nav-link btn fw-bolder" @click="logout"><i class="fa-solid fa-right-from-bracket"></i> Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import { useAuthStore } from './store';
import { useRouter } from 'vue-router';

export default {
  name: 'App',
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();

    const logout = () => {
      authStore.logout();
      router.push('/login');
    };

    return { authStore, logout };
  },
};
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
}

#app {
  text-align: center;
  color: #2c3e50;
}

.navbar {
  margin-bottom: 20px;
}
</style>
