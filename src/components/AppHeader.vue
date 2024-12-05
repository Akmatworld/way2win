<template>
  <v-container class="pa-0">
    <v-card flat tile>
      <nav class="nav">
        <v-list
            bg-color="indigo"
            class="d-flex"
        >
          <v-list-item
              to="/"
              :active="false"
          >
            <v-icon
                icon="mdi-home-city-outline"
                size="50"
            />
          </v-list-item>
          <v-list-item
              v-for="(link, index) in links"
              :key="index"
              :to="link.url"
              :active="false"
          >
            {{ link.name }}
          </v-list-item>
        </v-list>
      </nav>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
import { Link } from "@/types/interfaces"

let links: Link[] = [
  { name: 'Add new employee', url: '/add-employees' },
  { name: 'Doctors', url: '/doctors' },
  { name: 'Nurses', url: '/nurses' }
]
</script>

<style scoped>
.nav a {
  color: #fff;
  text-decoration: none;
}
</style>
