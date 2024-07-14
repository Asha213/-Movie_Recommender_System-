const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql');
const movieResolvers=require('./resolvers/resolvers')
const movieSchema=require('./schema/schema')
const cors = require('cors')
// Corrected MongoDB connection URI (without pas)

mongoose.connect('mongodb+srv://asha:Asha%406363445143@movie-maker-app.bi4ybls.mongodb.net/movie-maker-app?retryWrites=true&w=majority', {
     
}).catch((err) => {
    console.log('Error:', err);
});



app.use(cors())


app.use('/graphql',graphqlHTTP({
    schema:movieSchema,
    rootValue:movieResolvers,
    graphiql:true

}))

app.get('/hi', (req, res) => {
    res.send('Hello from express server');
});

app.listen(4000, () => { // Removed quotes around port number
    console.log('Server on port 4000!');
});
