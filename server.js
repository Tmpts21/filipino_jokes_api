const express = require('express');  
const { reset } = require('nodemon');   
const rateLimit = require("express-rate-limit"); 
const app = express() ;          

app.set('trust proxy', 1);

const limiter = rateLimit({
  windowMs: 30 * 60 * 1000,
  max: 30 
});

app.use(limiter);

const {randomJoke , nRandomJokes, nRandomJokesByDialect , randomJokeByDialect, _10randomJokes} = require('./handler')  

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});   


app.get('/' , (req , res ) => { 
     res.send("allowed endpoints [ /random , /random/ten , /random/:number , /random_jokes/:dialect , /random_jokes/:dialect/:number ] ")  
 });

// grab a random joke 
app.get('/random' , (req , res  )  => {      
    res.json(randomJoke())
});  

// grab ten random jokes 
app.get('/random/ten' , ( req , res ) => {       
    res.json(_10randomJokes());
});  

// grab random jokes based on number specified in params  
app.get('/random/:number' , (req , res ) => {   
    // I put undefined in the first param so that it will use the default parameter i specified 
    res.json(nRandomJokes(undefined , req.params.number))
});    

// grab random joke based on dialect  
app.get('/random_jokes/:dialect' , (req , res  )  => {      
    res.json(randomJokeByDialect(req.params.dialect))
}); 

// grab random joke based on dialect and number specified in the params   
app.get('/random_jokes/:dialect/:number' , (req , res  )  => {      
    res.json(nRandomJokesByDialect(req.params.dialect , req.params.number ))

});    

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    type: 'error', message: err.message
  });
});   

var port = process.env.PORT || 8000;

app.listen(port , () => {   
    console.log('you are listening to port', `${port} ` )    
});
