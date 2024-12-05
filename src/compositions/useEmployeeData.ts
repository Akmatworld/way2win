import { saveToLocaleStorage, getFromLocaleStorage, saveArrayToLocaleStorage } from "@/helpers/utils"
import {SaveEmployee} from "@/types/interfaces"
import {Employee} from "@/classes/Employee"

import {LS_DATA} from "@/helpers/constants"

export const useEmployee = (): SaveEmployee => {
    const saveEmployee = (employee: Employee): void => {
        saveToLocaleStorage(LS_DATA, employee)
    }

    const updateEmployee = (listOfEmployee: Array<any>): void => {
        saveArrayToLocaleStorage(LS_DATA, listOfEmployee)
    }

    const getEmployees = (): Array<any> => {
        return getFromLocaleStorage(LS_DATA)
    }

    return {
        saveEmployee,
        getEmployees,
        updateEmployee
    }
}
