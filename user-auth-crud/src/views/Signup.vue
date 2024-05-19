<template>
  <div class="container-fluid d-flex align-items-center justify-content-center login">
    <div class="card1">
      <div class="card2">
        <form class="form" @submit.prevent="submitSignup">
          <p id="heading">SignUp</p>
          <div class="field">
            <svg viewBox="0 0 16 16" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg" class="input-icon">
              <path d="M15.11 13H14.38L11.77 5.87C11.62 5.42 11.21 5.13 10.73 5.13H8.43C7.95 5.13 7.54 5.42 7.39 5.87L4.78 13H4.05C3.47 13 3 13.47 3 14.05V15C3 15.55 3.45 16 4 16H9C9.55 16 10 15.55 10 15V14.05C10 13.47 9.53 13 8.95 13H8.22L8.7 11.69H11.29L11.77 13H11.04C10.47 13 10 13.47 10 14.05V15C10 15.55 10.45 16 11 16H14C14.55 16 15 15.55 15 15V14.05C15 13.47 14.53 13 13.95 13H13.22L15.11 13ZM10.84 9.16H7.16L8.32 6.42L10.84 9.16Z"/>
            </svg>
            <input v-model="formData.name" class="input-field" type="text" placeholder="Name" required />
          </div>
          <div class="field">
            <svg viewBox="0 0 16 16" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg"
              class="input-icon">
              <path
                d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z">
              </path>
            </svg>
            <input v-model="formData.email" type="email" class="input-field" placeholder="Email" autocomplete="off"
              required />
          </div>

          <div class="field">
            <svg viewBox="0 0 16 16" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg"
              class="input-icon">
              <path
                d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z">
              </path>
            </svg>
            <input type="password" class="input-field" placeholder="Password" v-model="formData.password" required />
          </div>
          <div class="btn my-3">
            <button class="button1" type="submit">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SignUp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </button>
            <router-link to="/login"><button class="button2">Login</button></router-link>
          </div>

        </form>
      </div>
    </div>

  </div>

</template>

<script>
import { useAuthStore } from '../store';
import { useToast } from 'vue-toastification';

export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        password: ''
      }
    };
  },
  methods: {
    async submitSignup() {
      const toast = useToast();
      try {
        await useAuthStore().signup(this.formData);
        toast.success('Signup successful!');
        this.$router.push('/login');
      } catch (error) {
        toast.error('Signup failed. Please try again.');
      }
    }
  }
};
</script>
