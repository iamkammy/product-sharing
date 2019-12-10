const dotenv = require('dotenv')
dotenv.config({ path: __dirname + '/.env' });


const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'))

const config = require('./environment/environment');
const bodyParser = require('body-parser');


require('./db/mongodb');
app.use(bodyParser.json());
app.use('/users', require('./app/routes/user'));
app.use('/products', require('./app/routes/product'));
app.use('/ecommerce', require('./app/routes/ecommerce'));
app.get('/check', (req,res,next)=> {
    res.status(200).json({ message : 'API is working correctly, Data Get'});
})

app.listen(config.port, () => console.log(`Server is running on ${config.port}`));