const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authenticate = async (req, res, next) => {
    const auth = req.headers.authorization;
    if(!auth){
        return res.status(401).json({
            message: 'Unauthorized'
        });
    };
    const token = auth.split(' ')[1];

    if(!token || token.length === 0){
        return res.status(401).json({
            message: 'Unauthorized'
        });
    };

    const decoded = jwt.verify(token, process.env.APP_SECRET);
    const user = await User.findById(decoded._id);

    if(!user){
        return res.status(401).json({
            message: 'Unauthorized'
        });
    };

    req.user = user;
    next();
};

module.exports = {
    authenticate
};