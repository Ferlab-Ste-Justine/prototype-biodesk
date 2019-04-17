const path = require('path');
const root = path.resolve(__dirname, '../../');
const maxAge = 60 * 30;
const mb = m => m * 1024 * 1024;

module.exports = {
  root,
  port: 8000,
  public: path.resolve(root, 'dist'),
  maxFieldsSize: mb(20),
  maxFileSize: mb(200),
  ws: {
    port: null
  },
  auth: {
    defaultGroups: []
  },
  mime: {
    filenames: {
      // 'filename': 'mime/type'
      'Makefile': 'text/x-makefile',
      '.gitignore': 'text/plain'
    },
    define: {
      // 'mime/type': ['ext']
      'text/x-lilypond': ['ly', 'ily'],
      'text/x-python': ['py'],
      'application/tar+gzip': ['tgz']
    }
  },
  session: {
    options: {
      name: 'biodesk.sid',
      secret: 'biodesk123',
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: 'auto',
        maxAge: 1000 * maxAge
      }
    }
  },
  vfs: {
    watch: false,
    root: path.join(process.cwd(), 'vfs'),
    mountpoints: [{
      name: 'home',
      attributes: {
        root: '{vfs}/{username}',
        searchable: true,
        readOnly: false,
        groups: [
          'MEMBER'
        ]
      }
    },{
      name: 'shared',
      attributes: {
        root: '{vfs}/shared',
        searchable: true,
        readOnly: true,
        groups: [
          'MEMBER'
        ]
      }
    }]
  }
}