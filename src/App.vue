<script setup lang="ts">
import { RouterView } from 'vue-router'
// import { ref } from 'vue'

// import NavBar from './components/NavBar.vue'
const menuItems = [
  { title: 'Home', path: '/', icon: 'home' },
  { title: 'Settings', path: '/settings', icon: 'home' },
  { title: 'Order Book', path: '/order-book', icon: 'home' }
]
</script>

<template>
  <v-app>
    <v-app-bar class="px-4 px-md-8" :elevation="1">
      <v-btn icon="mdi-beer-outline" to="/"> </v-btn>
      <v-spacer></v-spacer>
      <v-tabs class="d-none d-sm-flex">
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
          :title="item.title"
        >
        </v-list-item>
      </v-tabs>
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn class="d-xs-flex d-sm-none" icon="mdi-dots-vertical" v-bind="props"></v-btn>
        </template>
        <v-list class="mt-2">
          <v-list-item
            v-for="item in menuItems"
            :key="item.title"
            :to="item.path"
            :title="item.title"
          >
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <!-- <router-view></router-view> -->
    <v-main class="d-flex justify-center align-start ma-0 pa-0 h-screen">
      <v-sheet class="w-100" max-width="680">
        <router-view></router-view>
      </v-sheet>
    </v-main>
  </v-app>
</template>

<style lang="scss" scoped></style>
