const {
  Core,
  CoreServiceProvider,
  PackageServiceProvider,
  VFSServiceProvider,
  AuthServiceProvider,
  SettingsServiceProvider
} = require('@osjs/server');

const dbAuth = require('@osjs/database-auth');

const config = require('./config.js');
const osjs = new Core(config, {
  omit: ['vfs.mountpoints']
});

osjs.register(CoreServiceProvider, {before: true});
osjs.register(PackageServiceProvider);
osjs.register(VFSServiceProvider);

osjs.register(AuthServiceProvider, {
    args: {
        adapter: dbAuth.adapter,
        config: {
            connection: {
                // Change this to match your local database server
                type: 'mysql',
                host: 'localhost',
                username: 'root',
                password: 'password',
                database: 'biodesk',
                insecureAuth : true,
            }
        }
    }
});

osjs.register(SettingsServiceProvider);

process.on('SIGTERM', () => osjs.destroy());
process.on('SIGINT', () => osjs.destroy());
process.on('exit', () => osjs.destroy());
process.on('uncaughtException', e => console.error(e));
process.on('unhandledRejection', e => console.error(e));
// In the top of the file load the library

osjs.boot()
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
