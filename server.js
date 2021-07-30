const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const AdminBro = require('admin-bro');
const mongoose = require('mongoose');

const options = require('./src/admin.options');
const buildAdminRouter = require('./src/admin.router');

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(cookieParser());


const admin = new AdminBro(options);
const router = buildAdminRouter(admin);

app.use(admin.options.rootPath, router);



//server setup
const connectionOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };
mongoose.connect(process.env.MONGODB_URI, connectionOptions);

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 6888;
app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`);
});
