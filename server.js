const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const PORT = process.env.PORT || 4000;
require('./config/db.connection.js');
const controllers = require('./controllers');

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello there, you have reached the backend');
})

app.use('/auth', controllers.auth);
app.use('/area', controllers.area);
app.use('/area-info', controllers.areaInfo);
app.use('/entry', controllers.entry);

app.listen(PORT, () => console.log('listening on PORT ' + PORT));