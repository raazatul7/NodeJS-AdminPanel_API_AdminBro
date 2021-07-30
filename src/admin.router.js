const AdminBro = require('admin-bro');
const { buildAuthenticatedRouter } = require('admin-bro-expressjs');
const express = require('express')
const argon2 = require('argon2')
const { Users } = require('./Users/users.entity')
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
/**
 * @param {AdminBro} admin 
 * @return {express.Router} router 
 */

const buildAdminRouter = (admin) => {
    const router = buildAuthenticatedRouter(admin,
        {
            cookieName: 'marikiti',
            cookiePassword: 'marikiti12345',
            authenticate: async (email, password) => {
                const admin = await Users.findOne({ email });
                console.log('admin=>', admin)
                console.log('admin.password=>', admin.password)
                console.log('password=>', password)
                if (admin && await password === admin.password) {
                    return admin.toJSON();
                }
                return null;
            },
        }, null, {
        resave: false,
        saveUninitialized: true,
        store: new MongoStore({ mongooseConnection: mongoose.connection }),
    });
    return router;
}

module.exports = buildAdminRouter;