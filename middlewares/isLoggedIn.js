// Middleware to check if the user is logged in
const isLoggedIn = (req, res, next) => {
    if (req.session && req.session.user) {
      return next(); 
    } else {
      res.redirect('/login');
    }
};

export default isLoggedIn;