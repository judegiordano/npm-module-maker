import "dotenv/config";

import { User } from "@/index";

const config = {
	NICKNAME: process.env.NICKNAME as string
};

describe("package tests", () => {

	it("should create a user object", async () => {
		const user = await User.Subscribe({ age: 24, name: "John", nickname: config.NICKNAME });
		expect(user.person.nickname).toBe("somerandomhash");
	});

	it("should create unique ids", async () => {
		const user1 = await User.Subscribe({ age: 24, name: "John" });
		const user2 = await User.Subscribe({ age: 24, name: "Ben" });
		expect(user1.uid).not.toEqual(user2.uid);
	});
});