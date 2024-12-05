<template>
  <v-container class="pt-0">
    <AppHeader/>

    <v-card class="pa-10">
      <h1 class="text-center">Добро пожаловать в нашу систему учёта медицинского персонала!</h1>
      <v-divider class="my-5"/>
      <h2>Наши возможности:</h2>
      <v-list density="compact">
        <v-list-item
            v-for="(item, i) in items"
            :key="i"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
import AppHeader from '@/components/AppHeader.vue'

import { Features } from "@/types/interfaces"

const items: Features[] = [
  {
    title: 'Добавление нового сотрудника.',
    icon: 'mdi-plus'
  },
  {
    title: 'Изменение данных сотрудника.',
    icon: 'mdi-update'
  },
  {
    title: 'Удаление сотрудника из базы данных.',
    icon: 'mdi-delete-empty-outline'
  }
]
</script>

<style scoped>
</style>
