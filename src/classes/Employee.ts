import { v4 as uuidv4 } from 'uuid';

export class Employee {
    private id: string
    private firstName: string
    private secondName: string
    private lastName: string
    private position: string
    private department: string

    constructor(
        firstName: string,
        secondName: string,
        lastName: string,
        position: string,
        department: string
    ) {
        this.id = uuidv4()
        this.firstName = firstName
        this.secondName = secondName
        this.lastName = lastName
        this.position = position
        this.department = department
    }
}

export class Doctor extends Employee {
    private isHeadOfDepartment: boolean

    constructor(
        firstName: string,
        secondName: string,
        lastName: string,
        position: string,
        department: string,
        isHead: boolean
    ) {
        super(firstName, secondName, lastName, position, department)
        this.isHeadOfDepartment = isHead
    }
}
export class Nurse extends Employee {
    constructor(
        firstName: string,
        secondName: string,
        lastName: string,
        position: string,
        department: string
    ) {
        super(firstName, secondName, lastName, position, department)
    }
}
