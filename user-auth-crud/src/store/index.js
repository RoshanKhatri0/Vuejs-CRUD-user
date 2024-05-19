import { defineStore } from 'pinia';
import axios from 'axios';

const apiUrl = 'http://localhost:3000';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('token') || ''
  }),
  actions: {
    async login(credentials) {
      try {
        const response = await axios.post(`${apiUrl}/auth/login`, credentials);
        this.token = response.data.token;
        localStorage.setItem('token', this.token);
        this.user = response.data.user;
      } catch (error) {
        console.error('Login failed:', error);
        throw new Error('Login failed. Please try again.');
      }
    },
    async signup(data) {
      try {
        await axios.post(`${apiUrl}/auth/signup`, data);
      } catch (error) {
        console.error('Signup failed:', error);
        throw new Error('Signup failed. Please try again.');
      }
    },
    async fetchProfile() {
      try {
        const response = await axios.get(`${apiUrl}/auth/profile`, {
          headers: { Authorization: `Bearer ${this.token}` }
        });
        this.user = response.data;
      } catch (error) {
        console.error('Failed to fetch profile:', error);
        throw new Error('Failed to fetch profile. Please try again.');
      }
    },
    async updateProfile(data) {
      try {
        const response = await axios.put(`${apiUrl}/auth/profile`, data, {
          headers: { Authorization: `Bearer ${this.token}` }
        });
        this.user = response.data;
      } catch (error) {
        console.error('Failed to update profile:', error);
        throw new Error('Failed to update profile. Please try again.');
      }
    },
    async deleteAccount() {
      try {
        await axios.delete(`${apiUrl}/auth/profile`, {
          headers: { Authorization: `Bearer ${this.token}` }
        });
        this.user = null;
        this.token = '';
        localStorage.removeItem('token');
      } catch (error) {
        console.error('Failed to delete account:', error);
        throw new Error('Failed to delete account. Please try again.');
      }
    },
    logout() {
      this.user = null;
      this.token = '';
      localStorage.removeItem('token');
    }
  }
});
