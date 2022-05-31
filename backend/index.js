const dotenv = require('dotenv');
dotenv.config();

const db = require('./db');
const app = require('./app');

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 4000;

db.connect();
console.log('connected to DB');
app.listen(PORT, (err) => {
  if (err) return console.log(err); 
  console.log(`Server listening on http://${HOST}:${PORT}`);
});