const express = require('express');
const bodyParser = require('body-parser');
const galleryRoutes = require('./routes/gallery')
const imageDetailsRoutes = require('./routes/details')
const indexRoutes = require('./routes/index')
const loginRoutes = require('./routes/login')
const logoutRoutes = require('./routes/logout')
const registerRoutes = require('./routes/register')
const userRoutes = require('./routes/users');
const addRoutes = require('./routes/add')
const path = require('path');
const errorHandler = require('./middlewares/errorHandler')
const session = require('express-session');
const cookieParser = require('cookie-parser');

// define express app
const app = express();

const port = process.env.PORT || 3000;

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

// Use cookie-parser middleware
app.use(cookieParser());

// Use express-session middleware
app.use(session({
    secret: 'yosecret',
    resave: false,
    saveUninitialized: true,
}));

app.use((req, res, next) => {
    res.locals.session = req.session;
    next();
});
  
// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
// Set up cache headers for images in your server response
app.use('/gallery', express.static('public/images', {
    maxAge: '7d', // Cache images for 7 days
}));



// set pug view template
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// app.get('/', (req, res) => {
//     res.render('index'); // this get router is not passing any images data
// });


// Routes 
app.use('/', indexRoutes);
app.use('/add', addRoutes);
app.use('/details', imageDetailsRoutes);
app.use('/gallery', galleryRoutes);
app.use('/login', loginRoutes);
app.use('/logout', logoutRoutes);
app.use('/register', registerRoutes);
app.use('/users', userRoutes);


// errorHandler
app.use(errorHandler);


app.listen(port, () => {
    console.log(`Server running on: http://localhost:${port}.`);
});