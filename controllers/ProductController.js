const Product = require('../models/Product');

//Είναι 3 βασικά objects που μπορούμε να χρησιμοποιήσουμε για να πάρουμε δεδομένα 
// req.query (Τα query parameters)
// req.body (Τo body του request, όπως στο POST request)
// req.params (Ta route parameters, όπως το :id στο /products/:id)

const index = async (req, res)=>{
    const products = await Product.find();


    return res.json({
        message: "Product list",
        products: products
    })
};

const create = (req, res)=>{
    const slug = req.body.title.toLowerCase().replace(/ /g, '-');

    const product = new Product({
        title: req.body.title,
        description: req.body.description,
        slug: slug,
        price: req.body.price,
        image: req.body.image
    });

    product.save();

    return res.status(201).json({   
        message : "Product created",
    })
};

const show = async(req, res)=>{
    try{
        const product = await Product.findById(req.params.id);
        return res.json({
            message: `Product with id: ${req.params.id}`,
            product
        })
    }catch(error){
        console.error();
        return res.status(400).json({
            message: error.message
        });
    }

    
};

const update = async(req, res)=>{
    const product = await Product.findByIdAndUpdate(req.params.id, req.body);
    return res.json({
        message: `Product ${product.title} updated`,
    })
};

const deleteProduct = async(req, res)=>{
    const product = await Product.findByIdAndDelete(req.params.id);

    return res.json({
        message: `Product ${product.title} deleted`,
    })
}


module.exports = {
    index,
    create,
    show, 
    update,
    deleteProduct
};