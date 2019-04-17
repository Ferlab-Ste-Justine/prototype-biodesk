const path = require('path');
const dbAuth = require('@osjs/database-auth');

const dbCli = dbAuth.cli({
  type: 'mysql',
  host: 'localhost',
  username: 'root',
  password: 'password',
  database: 'biodesk',
  insecureAuth : true,
});

module.exports = {
  discover: [
    path.resolve(__dirname, '../packages') // OS.js/src/packages
  ],
  tasks: [dbCli]
};
