// SERVER
const express = require('express');
const app =  express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

// Definisanje iz cors-a
app.use(cors());
app.options('*', cors());

//Generisanje URL-a iz env.

require('dotenv/config');
const api = process.env.API_URL;

const travelProductsRouter = require('./routers/travelproducts');
const travelCategoriesRouter = require('./routers/travelcategories');
const travelOrderRouter = require('./routers/travelorders');
const travelUserRouter = require('./routers/users');

//Middleware
app.use(express.json());
app.use(morgan('tiny'));

app.use(`${api}/travelproducts`, travelProductsRouter);
app.use(`${api}/travelcategories`, travelCategoriesRouter);
app.use(`${api}/travelorders`, travelOrderRouter);
app.use(`${api}/users`, travelUserRouter);

// http://localhost:3000/api/v1/travelproducts


//MongoDB / mongoose biblioteka 
mongoose.set('strictQuery', true)
mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'traveldestination-db'
}).then(() => {
    console.log('konekcija spremna');
})
.catch((err) => {
    console.log(err)
})

app.listen(3000, () => {
    console.log(api);
    console.log('server je operativan na portu 3000');
})