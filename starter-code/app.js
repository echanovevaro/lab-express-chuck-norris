const express = require('express');
const app = express();
const Chuck  = require('chucknorris-io');
const client = new Chuck();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


 app.get('/random', (req, res) => {
    client.getRandomJoke()
        .then((response) => {
            res.render('random', {joke: response.value});
        }).catch((err) => {
            console.error(err.message);
        });
 });

 app.get('/categories', (req, res) => {
    client.getJokeCategories()
        .then((response)=>  {
            res.render('categories', {categories: response});
        })
        .catch((err)=> {
            console.error(err.message);
        });
 });

 app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
});

