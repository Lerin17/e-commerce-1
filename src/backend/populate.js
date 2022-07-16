// require('dotenv').config()

// const connectDB  = require('./db/connect')
// const Product = require('./models/product')

// const jsonProducts = require('./products.json')


// const start = async ()=>{
//     try{
//     await connectDB(process.env.MONGO_URI)
//     await Product.deleteMany();
//     await Product.create(jsonProducts)
//     console.log('success')
//     process.exit(0)
//     }
//     catch(error){
//     console.log(error)
//     process.exit(1)
//     }
// }

// start()

const multer = require('multer')
const GridFsStorage =  require('multer-gridfs-storage')

const storage =  new GridFsStorage({
    url:process.env.MONGO_URI,
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req, file) => {
        const match = ["image/png", "image/jpeg"];

        if (match.indexOf(file.mimetype) === -1) {
            const filename = `${Date.now()}-any-name-${file.originalname}`;
            return filename;
        }

        return {
            bucketName: "photos",
            filename: `${Date.now()}-any-name-${file.originalname}`,
        };
    },
})

require ('dotenv').config()

const connectDB = require('./db/connect')
const Product = require('./models/product')

// const jsonProducts = require('../image/new arrival/newarrivaldata')
const jsonProducts = require('./rawdata/productrawdata')

const start = async () => {
    try {
    await connectDB(process.env.MONGO_URI)
    console.log('Success!!')
    }catch(error){
         console.log(error)
    }
}

start()

console.log(jsonProducts)