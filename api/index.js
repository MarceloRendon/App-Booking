//Express
const express = require('express');
const app = express();

const cors = require('cors');

//MongoDB connection
const { default: mongoose } = require('mongoose');
const cookieParser = require('cookie-parser');
require('dotenv').config();

//Models
const User = require('./models/User.js');
const Place = require('./models/Place.js');

//image downloader
const download = require('image-downloader');

// multer
const multer = require('multer');

// fs file system - rename files on the server
const fs = require('fs')

//bcrypt
const bcrypt = require('bcryptjs');
const bcryptSalt = bcrypt.genSaltSync(10); //Salt

//token cookies
const jwt = require('jsonwebtoken');
//random typed token
const jwtSecret = 'lk1j4oiawSADUIH83rja';

app.use(express.json());
app.use(cookieParser());
//Show images from /uploads
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}))

/*
    MongoBD connect, MONGO_URL is defined in .env file */
mongoose.connect(process.env.MONGO_URL)

/* 
    API URL /test, 
    this is to check if conection to api is fine */

app.get('/test', (req, res) => {
    res.json('test ok');
});

/* 
    API URL /register,
    obtains data set by form register and gives as a response json document to then be uploaded to MongoDB
    
    - name: Full name of the user.
    - email: Email of the user.
    - password: Encrypted password using bcrypt */

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // User = module
        //userDoc = info
        const userDoc = await User.create({
            name,
            email,
            password: bcrypt.hashSync(password, bcryptSalt),
        });

        res.json({ userDoc });
    } catch (e) {
        res.status(422).json(e);
    }

})

/* 
    API URL /login,
    obtains data set by form login and verifies that password and user are correct to validate session,
    user is given a session token using jsonwebtoken.

    - email: Email of the user.
    - password: Encrypted password using bcrypt */

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const userDoc = await User.findOne({ email });

    if (userDoc) {
        const passOk = bcrypt.compareSync(password, userDoc.password);

        if (passOk) {
            jwt.sign({
                email: userDoc.email,
                id: userDoc._id
            }, jwtSecret, {}, (err, token) => {
                //Cookie session token
                //secure y samesite en esa configuracion, permite usar diferentes dominios
                if (err) throw err;
                res.cookie('token', token, {
                    secure: true,
                    sameSite: 'none'
                }).json(userDoc);
            });
        } else {
            res.status(422).json('password NOT ok')
        }

    } else {
        res.json('not found')
    }

})

/* 
    API URL /profile,
    obtains data from the session token to give information to user UI.

    - name: Name of the user.
    - email: Email of the user.
    - _id: ID of the user */

app.get('/profile', (req, res) => {
    const { token } = req.cookies;

    if (token) {
        jwt.verify(token, jwtSecret, {}, async (err, userData) => {
            if (err) throw err;
            const { name, email, _id } = await User.findById(userData.id);
            res.json({ name, email, _id });
        });
    } else {
        res.json(null);
    }
});

/* 
    API URL /logout,
    closes cookie session. */

app.post('/logout', (req, res) => {
    res.cookie('token', '').json(true);
});

/* 
    API URL /upload-by-link,
    Obtains image sent by user through add new place form using upload by link option, 
    it crawls using image-downloader. */

app.post('/upload-by-link', async (req, res) => {
    const { link } = req.body;
    const newName = 'img' + Date.now() + '.jpg';
    await download.image({
        url: link,
        dest: __dirname + '/uploads/' + newName,
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
        }
    });

    res.json(newName);
});

/* 
    API URL /upload,
    Obtains image sent by user through add new place form by pressing upload, 
    it works by using multer. */

const photosMiddleware = multer({ dest: 'uploads/' });

/* 
    photosMiddleware.array(
                            name defined in function uploadPhoto at PlacesPage section data.append,
                            an arbitary number of pictures that user uploads ex:100 ) */

app.post('/upload', photosMiddleware.array('photos', 100), (req, res) => {
    const uploadedFiles = [];

    for (let i = 0; i < req.files.length; i++) {
        const { path, originalname } = req.files[i];
        const parts = originalname.split('.');
        const ext = parts[parts.length - 1];
        const newPath = path + '.' + ext;

        fs.renameSync(path, newPath);
        // Windows works with \\, Mac and Linux might work with /
        uploadedFiles.push(newPath.replace('uploads\\', ''));
    }
    res.json(uploadedFiles);
});

app.post('/places', (req, res) => {
    const { token } = req.cookies;
    const {
        title, address, addedPhotos, description,
        perks, extraInfo, checkIn, checkOut, maxGuest,
    } = req.body;
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
        if (err) throw err;
        const placeDoc = await Place.create({
            owner: userData.id,
            title, address, addedPhotos,
            description, perks, extraInfo,
            checkIn, checkOut, maxGuest,
        });
        res.json(placeDoc);
    });
});

app.listen(4000);