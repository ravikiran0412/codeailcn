const express= require ('express');
const app = express();
const port = 8000;



app.listen(port,function (err){
    if(err){
        console.log('Error',err);
        console.log(`Error in running server :${err}`);
    }
    console.log(`server is fired and running on port number :${port}`);
});