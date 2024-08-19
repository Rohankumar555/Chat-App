const express=require("express");
const app=express();
const bodyParser = require('body-parser');
const url = require("url");
const path=require("path");
const fs= require("fs");
const dotenv=require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require('cors');
dotenv.config({ path: path.resolve(__dirname, './secret.env') });
const corsOption = {
    origin: ['http://localhost:3000'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token']
}
app.use(cors(corsOption))
require('./connection/db')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());  //app to use cookie parser
app.use(express.json());
app.use(express.urlencoded({extended:false}));
// app.use(express.static(static_path));

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server is running at port no ${PORT}`);
})

const Registeruser=require('./models/user');
const chats=require('./models/chats');
const auth=require('./middlewares/auth');
const user_signup=require('./Controllers/signup');
const users_search=require('./Controllers/search');


app.post('/login',user_signup.signup);
app.get('/search',auth,users_search.search)