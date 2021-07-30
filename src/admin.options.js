const AdminBro = require('admin-bro')
const AdminBroMongoose = require('admin-bro-mongoose')
const AdminUsers = require('./Users/users.admin')

AdminBro.registerAdapter(AdminBroMongoose);

/**
 * @type {AdminBro.AdminBroOptions} 
 */

const options = {
    resources: [AdminUsers]
}

module.exports = options;