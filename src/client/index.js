import {
  Core,
  CoreServiceProvider,
  DesktopServiceProvider,
  VFSServiceProvider,
  NotificationServiceProvider,
  SettingsServiceProvider,
  AuthServiceProvider,
} from './../biodesk-client';

import {PanelServiceProvider} from '@osjs/panels';
import {GUIServiceProvider} from '@osjs/gui';
import {DialogServiceProvider} from '@osjs/dialogs';
import {GapiServiceProvider} from '@osjs/gapi-provider';
import {WidgetServiceProvider} from '@osjs/widgets';
import * as config from './config.js';

const init = () => {
  const osjs = new Core(config, {
    omit: ['auth', 'languages', 'vfs.mountpoints']
  });

  osjs.register(CoreServiceProvider);
  osjs.register(DesktopServiceProvider);
  osjs.register(VFSServiceProvider);
  osjs.register(NotificationServiceProvider);
  osjs.register(SettingsServiceProvider, {before: true});
  osjs.register(AuthServiceProvider, {before: true});
  osjs.register(PanelServiceProvider);
  osjs.register(DialogServiceProvider);
  osjs.register(GUIServiceProvider);
  osjs.register(WidgetServiceProvider);

  osjs.boot();
};

window.addEventListener('DOMContentLoaded', () => init());
