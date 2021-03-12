"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    static Subscribe(user) {
        return {
            now: new Date,
            person: { name: user.name, age: user.age }
        };
    }
}
module.exports = User;
//# sourceMappingURL=index.js.map