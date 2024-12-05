<template>
  <v-dialog max-width="500" :model-value="isShow">
    <template v-slot:default="{ isActive }">
      <v-card title="Обновление данных">
        <v-card-text>
          <v-text-field
              v-model="firstName"
              placeholder="First Name"
          ></v-text-field>

          <v-text-field
              v-model="secondName"
              placeholder="Second Name"
          ></v-text-field>

          <v-text-field
              v-model="lastName"
              placeholder="Last Name"
          ></v-text-field>

          <v-select
              v-model="department"
              label="Выбрать отделение"
              :items="departmentList"
          ></v-select>

          <v-checkbox
              v-if="isDoctor"
              v-model="isHead"
              label="Заведующий отделения"
          ></v-checkbox>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
              text="Отмена"
              @click="close"
          ></v-btn>

          <v-btn
              text="Сохранить"
              @click="save"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script lang="ts" setup>
import {computed, ref} from 'vue'
import {Doctor, Nurse} from "@/types/interfaces"
import {departmentList, DOCTOR} from '@/helpers/constants'

// emits
const emits = defineEmits<{
  (e: 'save', value: Doctor | Nurse): void
  (e: 'close'): void
}>()

// props
const { isShow = false, employee } = defineProps<{
  isShow: boolean,
  employee: Doctor | Nurse
}>()

// data
const firstName = ref<string>(employee.firstName)
const secondName = ref<string>(employee.secondName)
const lastName = ref<string>(employee.lastName)
const position = ref<string>(employee.position)
const department = ref<string>(employee.department)
const isHead = ref<boolean>(false)

// computed
const isHeadOfDepartment = computed((): boolean => {
  return 'isHeadOfDepartment' in employee
})
const isDoctor = computed((): boolean => {
  return position.value === DOCTOR
})


if (isHeadOfDepartment.value) {
  isHead.value = employee.isHeadOfDepartment
}

// methods
function clear (): void {
  firstName.value = ''
  secondName.value = ''
  lastName.value = ''
  position.value = ''
  department.value = ''
  isHead.value = false
}
function save (): void {
  const newValue: Doctor | Nurse = {
    firstName: firstName.value,
    secondName: secondName.value,
    lastName: lastName.value,
    position: position.value,
    department: department.value
  }

  if (isHeadOfDepartment.value) {
    newValue.isHeadOfDepartment = isHead.value
  }

  emits('save', newValue)
  clear()
}
function close (): void {
  emits('close')
  clear()
}

</script>

<style scoped>

</style>
