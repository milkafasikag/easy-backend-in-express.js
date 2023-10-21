const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
connectdb();
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
 app.use('/api/contacts', require('./routes/contactRoutes')); 
 app.use(errorHandler);
 //the word app.use is for middleware things
app.listen(port,() => {
    console.log('server running on port ${port}  ');
});
