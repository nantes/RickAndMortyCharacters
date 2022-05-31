const mongoose = require('mongoose');

const db = {};

const dbHost = process.env.DB_HOST || '0.0.0.0';
const dbPort = process.env.DB_PORT || 27017;
const dbName = process.env.DB_NAME || 'rm_app';

db.connect = function () {
    return mongoose.connect(`mongodb://${dbHost}:${dbPort}/${dbName}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  };

db.User = require('./models/user.model');
    
module.exports = db;