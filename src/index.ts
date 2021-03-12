import { IUser, IPerson } from "./Types/Models";

/**
 *
 * creates a new User object
 * @export
 * @class User
 */
export class User {

	/**
	 *
	 * shuffle a given array of numbers
	 * @private
	 * @static
	 * @param {number[]} array
	 * @return {*}  {number[]}
	 * @memberof User
	 */
	private static Shuffle(array: number[]): number[] {
		let cur = array.length;
		let temp, rand;

		while (0 !== cur) {
			rand = Math.floor(Math.random() * cur);
			cur -= 1;

			temp = array[cur];
			array[cur] = array[rand];
			array[rand] = temp;
		}
		return array;
	}

	/**
	 *
	 * generates a uid
	 * @private
	 * @static
	 * @return {*}  {Promise<number>}
	 * @memberof User
	 */
	private static async Uid(): Promise<number> {
		return new Promise((resolve, reject) => {
			try {
				const _arr: number[] = Array.from(String(Date.now()), Number);
				const _rand: number[] = User.Shuffle(_arr);
				const uid = Number(_rand.join(""));
				return resolve(uid);
			} catch (error) {
				return reject(error);
			}
		});
	}

	/**
	 *
	 * subscribes a new user object
	 * @static
	 * @param {IPerson} user
	 * @return {*}  {Promise<IUser>}
	 * @memberof User
	 */
	public static async Subscribe(user: IPerson): Promise<IUser> {
		try {
			return {
				created: new Date,
				uid: await User.Uid(),
				person: {
					name: user.name,
					age: user.age,
					nickname: user.nickname ?? null
				}
			};
		} catch (error) {
			throw new Error(error);
		}
	}
}
