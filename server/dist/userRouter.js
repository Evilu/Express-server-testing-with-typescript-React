"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const db_1 = require("./db");
exports.usersRouter = express.Router();
exports.usersRouter.get('/', (req, res) => {
    const users = db_1.db.getUsers();
    res.status(200).json(users);
});
// usersRouter.post('/', async (req, res) => {
//     const user = await db.createUser(req.body);
//     res.json(user);
// });
//
//
// usersRouter.put('/:id', async (req, res) => {
//     const update = await db.updateUser(req.body);
//     res.json(update);
// });
//
// usersRouter.delete('/:id', async (req, res) => {
//     const del = await db.deleteUser(req.params.id);
//     res.json(del);
// });
//
//
//# sourceMappingURL=userRouter.js.map