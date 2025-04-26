const dotenv = require('dotenv'); // it will return object

dotenv.config();

module.exports = {
    PORT : process.env.PORT
}