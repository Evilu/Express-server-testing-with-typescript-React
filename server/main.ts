import * as express from "express";
import * as cors from "cors"
import {usersRouter} from "./userRouter";
const app = express();

app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
    res.send('AYE! server is running ye sea rat');
});

app.use('/contacts', usersRouter);


app.listen(4000, function(){
    console.log('server is running on:' +
        'http://localhost:4000/');
});