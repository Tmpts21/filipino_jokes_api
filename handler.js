const jokes = require('./jokes/jokes.json')  


const randomJoke = () => { 
    return jokes[Math.floor(Math.random() * jokes.length)]
} 

const randomJokeByDialect = (dialect) => { 

    const dialectJokes =  jokes.filter((joke) => {   
        return joke.dialect === dialect  
    });     

    if (dialectJokes.length <= 0 ) {   
        return 'Dialect is not supported. Add more jokes by cotributing to this project'
    }

    return (dialectJokes[Math.floor(Math.random() * dialectJokes.length)])
}


const nRandomJokes = ( jokesArray = jokes  , n) => {   

    if (!isNumber(n) || n > 10 || n <= 0 ) {  
        return 'Invalid number of joke :) Jokes should be not greater than 10 or less than 1   ' 
    }

    randomIndices = new Set();     
    
    while (randomIndices.size != n  ) {   
        randomIndex = Math.floor(Math.random() * jokesArray.length)
        randomIndices.add(randomIndex)  
    }    
 
    return Array.from(randomIndices).map((index) => { 
        return jokesArray[index]
    })

    }

const nRandomJokesByDialect = (dialect , n = 1 ) =>  {       


    if (n > 10 || n <= 0  || !isNumber(n) ) { 
        return 'Invalid number of joke :) Jokes should be not greater than 10 or less than 1   ' 
    }
        
    const dialectJokes =  jokes.filter((joke) => {   
        return joke.dialect === dialect 
    });   

    return nRandomJokes( dialectJokes , n ) 

}

const _10randomJokes = () => {  
    return nRandomJokes(jokes , 10 ); 
}  

const isNumber = (n) => {    
    // checks if the n is a  positive integer   
    return /^\d+$/.test(n); 

    return  /^-?[\d.]+(?:e-?\d+)?$/.test(n); 
} 


module.exports = {randomJoke , nRandomJokes , nRandomJokesByDialect , randomJokeByDialect , _10randomJokes}; 
