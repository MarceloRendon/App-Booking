//Express
const express = require('express');
const app = express();

const cors = require('cors');

//MongoDB connection
const { default: mongoose } = require('mongoose');
const User = require('./models/User.js');
require('dotenv').config();

//bcrypt
const bcrypt = require('bcryptjs');
const bcryptSalt = bcrypt.genSaltSync(10); //Salt

//token cookies
const jwt = require('jsonwebtoken');
//random typed token
const jwtSecret = 'lk1j4oiawSADUIH83rja';

app.use(express.json());

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}))

//MongoBD connect
mongoose.connect(process.env.MONGO_URL)


//URLs API
app.get('/test', (req,res) => {
    res.json('test ok');
});

app.post('/register', async (req,res) => {
    const {name, email, password} = req.body;

    try{
        // User = module
        //userDoc = info
        const userDoc = await User.create({
            name,
            email,
            password:bcrypt.hashSync(password, bcryptSalt),
        });

        res.json({userDoc});
    }catch (e){
        res.status(422).json(e);
    }

})

app.post('/login', async (req,res) => {
    const {email, password} = req.body;
    const userDoc = await User.findOne({email});

    if(userDoc){
        const passOk = bcrypt.compareSync(password, userDoc.password);  
        
        if(passOk){
            jwt.sign({email:userDoc.email, id:userDoc._id}, jwtSecret, {}, (err, token) => {
                //Cookie session token
                if(err) throw err;
                res.cookie('token', token).json('password ok');
            });
        }else{
            res.status(422).json('password NOT ok')
        }

    }else{
        res.json('not found')
    }

})

app.listen(4000);