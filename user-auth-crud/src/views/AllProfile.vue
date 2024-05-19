<template>
    <div>
      <h1>All Profiles</h1>
      <div v-if="profiles.length">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(profile, index) in profiles" :key="profile._id">
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ profile.name }}</td>
              <td>{{ profile.email }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else>
        <p>No profiles found.</p>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  export default {
    name: 'AllProfiles',
    setup() {
      const profiles = ref([]);
  
      const fetchProfiles = async () => {
        try {
          const response = await axios.get('http://localhost:3000/auth/allprofile');
          profiles.value = response.data;
        } catch (error) {
          console.error('Failed to fetch profiles:', error);
        }
      };
  
      onMounted(fetchProfiles);
  
      return {
        profiles,
      };
    },
  };
  </script>
  
  <style scoped>
  .table {
    width: 100%;
    margin-top: 20px;
    border-collapse: collapse;
  }
  
  .table th,
  .table td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  
  .table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #f2f2f2;
  }
  </style>
  