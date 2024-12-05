<template>
  <Modal
      v-if="isEdit"
      :is-show="isEdit"
      :employee="employee"
      @close="closeModal"
      @save="save"
  />

  <v-table v-if="employees.length">
    <thead>
      <tr>
        <th>
          №
        </th>
        <th class="text-left">
          ФИО
        </th>
        <th>
          Департамент
        </th>
        <th class="text-left">
          Позиция
        </th>
        <th v-if="position !== NURSE">
          Заведующий
        </th>
        <th>
          Действие
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
          v-for="(doctor, j) in employees"
          :key="j"
      >
        <td>{{ j + 1 }}</td>
        <td>{{ `${doctor.firstName} ${doctor.secondName} ${doctor.lastName}` }}</td>
        <td>{{ doctor.department }}</td>
        <td>{{ doctor.position }}</td>
        <td v-if="position !== NURSE">
          <v-icon
              v-if="doctor.isHeadOfDepartment"
              icon="mdi-check-circle-outline"
              size="25"
          />
        </td>
        <td class="text-right">
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn
                  color="bg-gray"
                  v-bind="props"
                  variant="plain"
                  icon="mdi-dots-vertical"
              ></v-btn>
            </template>
            <v-list
                density="compact"
                class="pa-0"
            >
              <v-list-item
                  v-for="(item, index) in actions"
                  :key="index"
                  density="compact"
                  class="cursor-pointer"
                  :value="item.code"
                  @click="action(item, doctor)"
              >
                {{ item.title }}
              </v-list-item>
            </v-list>
          </v-menu>
        </td>
      </tr>
    </tbody>
  </v-table>
  <div v-else class="d-flex justify-center py-10">
    Пусто
  </div>
</template>

<script lang="ts" setup>
import {computed, onMounted, ref} from "vue"

import {Actions, Doctor, Nurse} from "@/types/interfaces"

import {NURSE} from '@/helpers/constants'

import Modal from '@/components/Modal.vue'

import {useEmployee} from '@/compositions/useEmployeeData'
import {useNotification} from '@/compositions/useToast'
const {getEmployees, updateEmployee} = useEmployee()
const { success } = useNotification()

const { position } = defineProps<{
  position: string
}>()

// data
const actions: Actions[] = [
  { title: 'Удалить', code: 0 },
  { title: 'Редактировать', code: 1 }
]
const isEdit = ref<boolean>(false)
const id = ref<string>('')
const employees = ref<any>([])

// computed
const employee = computed(() => {
  return employees.value.find((value: Doctor | Nurse) => value.id === id.value)
})

// hooks
onMounted((): void => {
  updateDoctors()
})

// methods
function updateDoctors (): void {
  const listOfEmployees: Array<any> = getEmployees()

  if (listOfEmployees.length) {
    employees.value = listOfEmployees.filter((employee: Doctor | Nurse): boolean => {
      return employee.position === position
    })
  } else {
    employees.value = []
  }
}
function save (value: Doctor | Nurse): void {
  const newList = getEmployees().map((employee: Doctor | Nurse) => {
    if (id.value === employee.id) {
      employee.firstName = value.firstName
      employee.secondName = value.secondName
      employee.lastName = value.lastName
      employee.position = value.position
      employee.department = value.department
      employee.isHeadOfDepartment = value.isHeadOfDepartment
    }

    return employee
  })

  closeModal()
  updateEmployee(newList)
  updateDoctors()
}
function closeModal (): void {
  isEdit.value = false
}
function action (action: Actions, employee: Doctor | Nurse): void {
  id.value = employee.id

  if (action.code === 0) {
    let newList = getEmployees().filter((employee: Doctor | Nurse): boolean => {
      return employee.id !== id.value
    })

    updateEmployee(newList)
    updateDoctors()
    success('Successfully deleted')
  } else {
    isEdit.value = true
  }
}
</script>

<style scoped>

</style>
