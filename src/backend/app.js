console.log('04 Store API')

require('dotenv').config()
require('express-async-errors')
// console.log(process.env.MONGO_URI)

const express = require('express')
const app = express()

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')
const connectDB = require('./db/connect')

const productRouter = require('./routes/products')

app.use(express.json())

app.get('/', (req, res)=> {
    res.send('<h1>Store Api</h1> <a href = "/api/v1/products">product route</a>')
})


app.use('/api/v1/products', productRouter)

// console.log(process.env.MONGO_URI, 'env')

app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 5000

// app.listen(port, console.log(`Server is listening ${port}...`))

const start = async () => {
try {
    connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server is listening ${port}...`))
} catch (error) {
    console.log(error)
}
}


start()


