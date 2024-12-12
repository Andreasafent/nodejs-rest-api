const index = (req, res) =>{
    res.json({
        message: 'Welcome to our API!'
    })
}

const notFound = (req, res) =>{
    return res.status(404).json({
        message: 'Page not found'
    })
}


module.exports = {
    index,
    notFound
}