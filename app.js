const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.options('*', cors());

//Middleware
app.use(bodyParser.json())
app.use(morgan('tiny'))

const api = process.env.API_URL

//Routes
const categoriesRoutes = require('./routers/categories');
const productsRoutes = require('./routers/products');
const usersRoutes = require('./routers/users');
const ordersRoutes = require('./routers/orders');



app.use(`${api}/categories`, categoriesRoutes)
app.use(`${api}/products`, productsRoutes)
app.use(`${api}/users`, usersRoutes)
app.use(`${api}/orders`, ordersRoutes)




mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log('A conexão do banco de dados está pronta')
  })
  .catch(err => {
    console.log(err)
  })

app.listen(3000, () => {
  console.log('Servidor em execução http://localhost:3000')
})
