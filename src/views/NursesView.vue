<template>
  <v-container class="pt-0">
    <AppHeader/>

    <v-card color="white">
      <EmployeeTable :position="NURSE"/>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
import AppHeader from '@/components/AppHeader.vue'
import EmployeeTable from '@/components/EmployeeTable.vue'

import {NURSE} from '@/helpers/constants'

</script>

<style scoped>

</style>
