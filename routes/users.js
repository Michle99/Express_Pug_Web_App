// routes/users.js
import express from 'express';
const router = express.Router();
import userData from '../data/user.js';
import isLoggedIn from '../middlewares/isLoggedIn.js';

router.get('/', isLoggedIn, (req, res) => {
    const user = req.session.user;
    res.render('users', { title: 'Photographers', users: userData, user });
});

export default router;
