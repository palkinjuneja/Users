import express from 'express';
import mongoose from 'mongoose';
import route from './route/routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import User from './models/user.js';
import Project from './models/project.js';
const app = express();
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded(true));
app.use(cors());
app.use('/getUsers',route);

const PORT = 9000;
const dbHost ='mongodb+srv://admin:Admin@union.um26t.mongodb.net/Union?retryWrites=true&w=majority';
mongoose.connect(dbHost,{useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}).then( ()=>{
    app.listen(PORT, () => {
        console.log(`server is running sucessfully at ${PORT}`);
    });
}
).catch(error => {
    console.log(`Error: `,error.message);
})


