const express = require('express');
const bodyParser = require('body-parser');
const galleryRoutes = require('./routes/gallery')
const imageDetailsRoutes = require('./routes/details')
const loginRoutes = require('./routes/login')
const registerRoutes = require('./routes/register')
const userRoutes = require('./routes/users');
const addRoutes = require('./routes/add')
const path = require('path');
const errorHandler = require('./middlewares/errorHandler')

const app = express();

const port = process.env.PORT || 3000;

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// set pug view template
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('layout');
});


// Routes
app.use('/login', loginRoutes);
app.use('/gallery', galleryRoutes);
app.use('/details', imageDetailsRoutes);
app.use('/register', registerRoutes);
app.use('/users', userRoutes);
app.use('/add', addRoutes);

// errorHandler
app.use(errorHandler);

app.get('/logout', (req, res) => {
    res.render('login');
})

app.listen(port, () => {
    console.log(`Server running on: http://localhost:${port}.`);
});