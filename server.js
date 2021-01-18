// Import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const fileUpload = require('express-fileupload');

// Create express app
const app = express();

// Set backend port to env variable or port 5000
const port = process.env.PORT || 5000;

// Show incoming requests
app.use((req, res, next) => {
    console.log(`Request_Endpoint: ${req.method} ${req.url}`);
    next();
});

app.use(fileUpload({
    createParentPath: true
}));

// Configure bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: true 
}));

// Configure CORS middleware
app.use(cors());

// Require Route
const api = require('./routes/routes');

// Configure app to use routes
app.use('/api/v1/', api);

// This middleware informs the express application to serve our compiled React files
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
};

// Catch any bad requests
app.get('*', (req, res) => {
    res.status(200).json({
        msg: 'Catch All'
    });
});

// Configure our server to listen on the port defiend by our port variable
app.listen(port, () => console.log(`BACK_END_SERVICE_PORT: ${port}`));