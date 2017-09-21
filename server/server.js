const express = require('express')
, bodyParser = require('body-parser')
, cors = require('cors')
, massive = require('massive')
, config = require('../config.js')
, app = express()
, insertTask = require('./controllers/insertTask')
, addUser = require('./controllers/addUser')
, getUserTask = require('./controllers/getUserTask')



app.use(bodyParser.json());
app.use(cors());

//*********Serves static build files to the front-end
app.use(express.static(__dirname + "./../build")); //what i have 


//*********Massive allows you to create sql files to populate your DB with */
massive(config.connectionString).then(dbInstance => app.set('db', dbInstance));

app.post('/api/adduser', addUser.postUserName)
app.post('/api/addtask', insertTask.postTask)

app.get('/api/tasks/:userid', getUserTask.getUserTask)


app.all('/*', (req, res) => { // This is what you need.
res.sendFile('index.html', { root: __dirname + './../build' });
});

app.listen(config.port, () => {console.log(`Listening on port ${config.port}`); } );