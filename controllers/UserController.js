const jwt = require('jsonwebtoken');

const me = (req, res) =>{

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



    return res.json({
        message: 'ME',
        decoded: decoded
    })
}




module.exports = {
    me
};