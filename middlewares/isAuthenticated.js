const isAuthenticated = (req, res, next) => {
    if (req.session && req.session.user) {
        // User is authenticated
        return next();
    } else {
        // User is not authenticated, redirect to login
        res.redirect('/login');
    }
};

module.exports = isAuthenticated;