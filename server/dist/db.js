"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class DB {
    constructor() {
        this.data = this.readFromJson();
    }
    readFromJson() {
        const data = fs.readFileSync(__dirname + '/data.json');
        return JSON.parse(data.toString());
    }
    writeToJson() {
        fs.writeFileSync(__dirname + '/data.json', JSON.stringify(this.data));
    }
    getUsers() {
        return this.data;
    }
    createUser(user) {
        return new Promise((resolve) => {
            setTimeout(() => {
                user.id = this.data.users[this.data.users.length - 1].id + 1;
                this.data.users.push(user);
                this.writeToJson();
                resolve(user);
            }, 500);
        });
    }
    deleteUser(userId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const userIndex = this.data.users.findIndex(u => u.id == userId);
                this.data.users.splice(userIndex, 1);
                this.writeToJson();
                resolve({ status: "ok" });
            }, 500);
        });
    }
    updateUser(user) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const userIndex = this.data.users.findIndex(u => u.id === user.id);
                this.data.users[userIndex] = user;
                this.writeToJson();
                resolve(true);
            }, 500);
        });
    }
}
exports.db = new DB();
//# sourceMappingURL=db.js.map