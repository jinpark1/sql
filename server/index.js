const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

app.use(bodyParser.json());

// Reminder: Same thing as line 4 and 5.
// require('dotenv').config(); 


// Reminder: We could do it this way.
// massive(process.env.CONNECTION_STRING).then(database => {
//     database.query('select * from heroes').then(results => {
//         console.log(results);
//     });
// });                       

// Reminder: Other way.
// massive(process.env.CONNECTION_STRING).then(database => {
//     database.get_heroes().then( results => {
//         console.log(results);
//     })
// });      

massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database);
});      

app.get('/api/heroes', (req, res) => {
    req.app.get('db').get_heroes().then(results => {
        res.json(results);
    }).catch(error => {
        res.json({ message: 'Ana error occured on server. See the server console.' })
    });
});

app.post('/api/heroes', (req, res) => {
    const data = req.body;
    req.app.get('db').create_hero({
        name: data.name, 
        powers: data.powers, 
        age: data.age, 
        secret_identity: data.secret_identity, 
        picture: data.picture
    }).then(results => {
        res.json(results);
    }).catch(error => {
        res.json({ message: 'Ana error occured on server. See the server console.' })
    });
});

// Reminder: Number Method
// app.post('/api/heroes', (req, res) => {
//     const data = req.body;
//     req.app.get('db').create_hero([
//         data.name, 
//         data.powers, 
//         data.age, 
//         data.secret_identity, 
//         data.picture]).then(results => {
//         res.json(results);
//     }).catch(error => {
//         res.json({ message: 'Ana error occured on server. See the server console.' })
//     });
// });



const PORT = 3001
app.listen(PORT, () => {
    console.log('Server listening on port ' + PORT);
})