

const me = async (req, res) =>{

    return res.json({
        message: 'ME',
        user: req.user
    })
}




module.exports = {
    me
};