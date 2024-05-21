export class Skill {
    public id: number
    readonly name: string
    readonly logo: string
    readonly site: string

    constructor(id: number, name: string, logo: string, site: string) {
        this.id = id
        this.name = name
        this.logo = logo
        this.site = site
    }
}
