const AdminBro = require('admin-bro')
const AdminBroMongoose = require('admin-bro-mongoose')
const { Users } = require('./users.entity')

AdminBro.registerAdapter(AdminBroMongoose);

/**
 * @type {AdminBro.ResourceOptions} 
 */

const options = {
    properties: {
        encryptedPassword: {
            isVisible: false
        },
        // password: {
        //     type: 'password',
        // },
        // actions: {
        //     new: {
        //         after: passwordAfterHook,
        //         before: passwordBeforeHook,
        //     },
        //     edit: {
        //         after: passwordAfterHook,
        //         before: passwordBeforeHook,
        //     },
        // },
    }
}

module.exports = {
    options,
    resource: Users
};