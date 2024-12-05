import {Employee} from "@/classes/Employee"

export const getFromLocaleStorage = (key: string): Array<any> => {
    return JSON.parse(<string>localStorage.getItem(key))
}

export const saveArrayToLocaleStorage = (key: string, list: Array<any>): void => {
    localStorage.setItem(key, JSON.stringify(list))
}

export const saveToLocaleStorage = (key: string, employee: Employee): void => {
    const data = getFromLocaleStorage(key)

    if (data && data.length) {
        data.push(employee)
        localStorage.setItem(key, JSON.stringify(data))
    } else {
        localStorage.setItem(key, JSON.stringify([employee]))
    }
}
