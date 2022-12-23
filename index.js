const express = require('express');
const app = express();
const port = 8000;// When we deploy the app on production its port should be 80
const router = require('./routes/index')

//use express router
app.use('/',router);

app.listen(port, function(err){
    if(err){
        console.log(`There is an error in running the server`);
        return;
    }
    console.log(`Server is running fine on port ${port}`);

})