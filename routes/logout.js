// routes/logout.js
import express from 'express';
const router = express.Router();

// GET - Handle user logout
router.get('/', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error destroying session:', err);
    }
    res.redirect('/login');
  });
});

export default router;
