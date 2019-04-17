module.exports = {

  public: '/',

  ws: {
    connectInterval: 5000,
    disabled: false
  },

  auth: {
    ui: {
      title: '',
      stamp: '0.0.1-prototype'
    }
  },

  languages: {
    en_EN: 'English',
    //nb_NO: 'Norwegian, Norsk (bokmål)',
    //vi_VN: 'Vietnamese, Vietnamese',
    fr_FR: 'French',
    //de_DE: 'German',
    //sl_SI: 'Slovenian, Slovenščina',
    //zh_CN: 'Chinese (simplified)'
  },

  desktop: {
    lock: false,
    contextmenu: {
      enabled: false,
      defaults: true
    },

    settings: {
      font: 'Roboto',
      theme: 'StandardDarkTheme',
      sounds: 'FreedesktopSounds',
      icons: 'GnomeIcons',
      animations: false,
      panels: [{
        position: 'top',
        items: [
          {name: 'menu'},
          {name: 'windows'},
          {name: 'tray'},
          {name: 'clock'}
        ]
      }],
      widgets: [{
        name: 'digitalclock'
      }],
      keybindings: [],
      background: {
        color: '#ffffff'
      },
      iconview: {
        enabled: true
      }
    }
  },

  locale: {
    format: {
      shortDate: 'yyyy-mm-dd',
      mediumDate: 'dS mmm yyyy',
      longDate: 'dS mmmm yyyy',
      fullDate: 'dddd dS mmmm yyyy',
      shortTime: 'HH:MM',
      longTime: 'HH:MM:ss'
    }
  },

  vfs: {
    defaultPath: 'home:/',
    defaultAdapter: 'system',
    adapters: {},
    mountpoints: [{
      name: 'home',
      label: 'Home',
      adapter: 'system',
      icon: {name: 'user-home'},
      attributes: {
        visibility: 'restricted',
        searchable: true,
        readOnly: false
      }
    },{
      name: 'shared',
      label: 'Shared',
      adapter: 'system',
      icon: {name: 'user-home'},
      attributes: {
        visibility: 'global',
        searchable: true,
        readOnly: true
      }
    },
    ],
    icons: {
      '^application/zip': {name: 'package-x-generic'},
      '^application/javascript': {name: 'text-x-script'},
      '^application/json': {name: 'text-x-script'},
      '^application/x-python': {name: 'text-x-script'},
      '^application/php': {name: 'text-x-script'},
      '^application/pdf': {name: 'x-office-document'},
      '^application/rtf': {name: 'x-office-document'},
      '^application/msword': {name: 'x-office-document'},
      '^application/(xz|tar|gzip)': {name: 'package-x-generic'},
      '^text/css': {name: 'text-x-script'},
      '^text/html': {name: 'text-html'},
      '^(application|text)/xml': {name: 'text-html'},
      '^application': {name: 'application-x-executable'},
      '^text': {name: 'text-x-generic'},
      '^audio': {name: 'audio-x-generic'},
      '^video': {name: 'video-x-generic'},
      '^image': {name: 'image-x-generic'}
    }
  }

};
