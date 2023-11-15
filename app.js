import express from 'express';
import bodyParser from 'body-parser'
import galleryRoutes  from './routes/gallery.js';
import imageDetailsRoutes from './routes/details.js';
import indexRoutes from './routes/index.js'
import loginRoutes from './routes/login.js'
import logoutRoutes from './routes/logout.js'
import registerRoutes from './routes/register.js'
import userRoutes from './routes/users.js';
import addRoutes from './routes/add.js';
import path from 'path';
import errorHandler from './middlewares/errorHandler.js';
import session from 'express-session';
import cookieParser from 'cookie-parser';

// define express app
const app = express();
const port = process.env.PORT || 3000;

// Serve static files
app.use(express.static('public'));

// set pug view template
app.set('view engine', 'pug');
app.set('views', 'views');

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
  


// Routes 
app.use('/', indexRoutes);
app.use('/add', addRoutes);
app.use('/add/single', addRoutes);
app.use('/add/multiple', addRoutes);
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