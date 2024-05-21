import { Skill } from "./skill.model"

export class Developer {
    readonly lastName: string
    readonly firstName: string
    readonly age: number
    readonly gender: string
    readonly bio: string
    readonly skills: Skill[]

    constructor(lastName: string, firstName: string, age: number, gender: string, bio: string, skills: Skill[]) {
        this.lastName = lastName
        this.firstName = firstName
        this.age = age
        this.gender = gender
        this.bio = bio
        this.skills = skills
    }
}
