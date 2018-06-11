"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const userRouter_1 = require("./userRouter");
const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
    res.send('AYE! server is running ye sea rat');
});
app.use('/contacts', userRouter_1.usersRouter);
app.listen(4000, function () {
    console.log('server is running on:' +
        'http://localhost:4000/');
});
//# sourceMappingURL=main.js.map