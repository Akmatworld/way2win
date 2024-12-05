<template>
  <v-container class="pt-0">
    <AppHeader/>

    <v-card color="white" class="pa-10">
      <h1>Добавления нового сотрудника</h1>
      <v-divider class="my-10" />
      <v-text-field
          v-model="firstName"
          placeholder="Фамилия"
      ></v-text-field>


      <v-text-field
          v-model="secondName"
          placeholder="Имя"
      ></v-text-field>

      <v-text-field
          v-model="lastName"
          placeholder="Отчество"
      ></v-text-field>

      <v-select
          v-model="department"
          label="Выбрать отделение"
          :items="departmentList"
      ></v-select>

      <v-radio-group inline v-model="position">
        <v-radio
            label="Врач"
            :value="DOCTOR"
        ></v-radio>
        <v-radio
            label="Медсестра"
            :value="NURSE"
        ></v-radio>
      </v-radio-group>

      <v-checkbox
          v-if="isDoctor"
          v-model="isHeadOfDepartment"
          label="Заведующий отделения"
      ></v-checkbox>

      <div class="d-flex justify-center">
        <v-btn
            color="indigo"
            @click="add"
        >
          Добавить
        </v-btn>
      </div>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
import {computed, ref} from 'vue'

import AppHeader from '@/components/AppHeader.vue'

import {useNotification} from '@/compositions/useToast'
import {useEmployee} from '@/compositions/useEmployeeData'

import {DOCTOR, NURSE, departmentList} from '@/helpers/constants'

import {Doctor, Nurse} from '@/classes/Employee'

const { success } = useNotification()
const {saveEmployee} = useEmployee()

// data
let firstName = ref<string>('')
let secondName = ref<string>('')
let lastName = ref<string>('')
let department = ref<string>('')
let position = ref<string>('')
let isHeadOfDepartment = ref<boolean>(false)

// computed
const isDoctor = computed((): boolean => {
  return position.value === DOCTOR
})

// methods
function add (): void {
  if (position.value === DOCTOR) {
    const doctor = new Doctor(
        firstName.value,
        secondName.value,
        lastName.value,
        position.value,
        department.value,
        isHeadOfDepartment.value
    )
    saveEmployee(doctor)
  } else {
    const nurse = new Nurse(
        firstName.value,
        secondName.value,
        lastName.value,
        position.value,
        department.value
    )
    saveEmployee(nurse)
  }
  clear()
  success('Successfully added')
}
function clear (): void {
  firstName.value = ''
  secondName.value = ''
  lastName.value = ''
  position.value = ''
  department.value = ''
  isHeadOfDepartment.value = false
}
</script>

<style scoped>
</style>
