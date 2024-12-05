import {Employee} from "@/classes/Employee"

export interface Link {
    name: string
    url: string
}
export interface Features {
    title: string
    icon: string
}
export interface Notification {
    success: (msg: string) => void
    error: (msg: string) => void
}
export interface SaveEmployee {
    saveEmployee: (employee: Employee) => void,
    getEmployees: () => Array<any>,
    updateEmployee: (listOfEmployee: Array<any>) => void
}
export interface Actions {
    title: string
    code: number
}
interface IEmployee {
    id: string
    firstName: string
    secondName: string
    lastName: string
    position: string
    department: string
}
export interface Nurse extends IEmployee{}
export interface Doctor extends IEmployee {
    isHeadOfDepartment: boolean
}
