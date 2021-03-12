export interface IPerson {
	name: string,
	age: number,
	nickname?: string | null
}

export interface IUser {
	created: Date,
	uid: number,
	person: IPerson
}