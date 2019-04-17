import React from 'react';
import ReactDOM from 'react-dom';

import {name as applicationName} from './metadata.json';
import AppWrapper from '../AppWrapper'
import {Box, Menubar, MenubarItem} from '@osjs/gui';



class App extends React.Component {
    render() {
        return (
            <div>APP</div>
    )
    }
}


OSjs.make('osjs/packages').register(applicationName, (core, args, options, metadata) => {
    const proc = core.make('osjs/application', {args, options, metadata});
    const win = proc.createWindow({
        id: 'WelcomeWindow',
        icon: proc.resource(proc.metadata.icon),
        title: metadata.title.en_EN,
        dimension: {width: 500, height: 500},
        position: 'center',
        header: false
    })
    const basic = core.make('osjs/basic-application', proc, win);
    proc.on('destroy', () => basic.destroy());
    win.on('destroy', () => proc.destroy());
    win.render($content => ReactDOM.render(
        <main>
        <Menubar>
        ddkddk
        </Menubar>
        </main>
        , $content)
    );

    basic.init();
    return proc;
});




/*
<AppWrapper
            state={{}}
            actions={{
                menuQuit: () => state => proc.destroy()
            }}
        >
            {(state, actions) => (
                <div>
                <Menubar>
                  <MenubarItem onclick={actions.menuQuit}>Quit</MenubarItem>
                </Menubar>
                HELLO</div>
            )}
        </AppWrapper>
 */
/*
import osjs from 'osjs';
import {h, app} from 'hyperapp';
import {Box, Menubar, MenubarItem} from '@osjs/gui';

import AppWrapper from '../AppWrapper'

import React from 'react';
import ReactDOM from 'react-dom';

import {name as applicationName} from './metadata.json';


const register = (core, args, options, metadata) => {
  const proc = core.make('osjs/application', {args, options, metadata});

  //{(this.props.state, this.props.actions) => ()}
  class App extends React.Component {
    render() {
      return (
          <div>APP</div>
    )
    }
  }

  /*
  // File menu
  const createMenu = (current, actions, _) => ([
    {label: _('LBL_QUIT'), onclick: () => actions.menuQuit()}
  ]);

  // OS.js application
  const createApplication = (core, proc, win, $content) => {
    const _ = core.make('osjs/locale').translate;
    const basic = core.make('osjs/basic-application', proc, win);

  app({
    text: ''
  }, {
    setText: text => state => ({text}),

    menu: ev => (state, actions) => {
      core.make('osjs/contextmenu').show({
        position: ev.target,
        menu: createMenu(proc.args.file, actions, _)
      });
    },

    menuQuit: () => state => proc.destroy()
  }, (state, actions) => {
    return h(Box, {}, [
      h(Menubar, {}, [
        h(MenubarItem, {
          onclick: ev => actions.menu(ev)
        }, _('LBL_FILE'))
      ])
    ]);
  }, $content);

  proc.on('destroy', () => basic.destroy());
  basic.init();
};
*/

// ReactDOM.render(React.createElement(App), $content)

/*
  const createMenu = (current, actions, _) => ([
    {label: _('LBL_QUIT'), onclick: () => actions.menuQuit()}
  ]);

  const generateMenubar = (actions) => { return
      return h(Box, {}, [
          h(Menubar, {}, [
              h(MenubarItem, {
                  onclick: ev => actions.menu(ev)
              }, _('LBL_FILE'))
          ])
      ]);
  }

    //const basic = core.make('osjs/basic-application', proc, win);

    proc.createWindow({
    id: 'WelcomeWindow',
    icon: proc.resource(proc.metadata.icon),
    title: metadata.title.en_EN,
    dimension: {width: 500, height: 500},
    position: 'center',
    header: false
  })
      .on('destroy', () => proc.destroy())
      //.on('render', (win) => win.focus())
      .render($content => ReactDOM.render(
      <AppWrapper
        state={{ count: 0 }}
        actions={{
          menuQuit: () => state => proc.destroy()
        }}
      >
      {(state, actions) => (
          {generateMenubar(actions)}
      )}
      </AppWrapper>
      , $content));

  return proc;
};

/*

// Creates the internal callback function when OS.js launches an application
osjs.register(applicationName, register);
*/
