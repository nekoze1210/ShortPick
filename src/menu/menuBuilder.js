const { app, Menu } = require('electron')
const { menuTemplate } = require('./template')

exports.setUpMenu = () => {
  if (process.platform === 'darwin') {
    appMenu = menuTemplate.concat()
    appMenu.unshift(
      {
        label: app.getName(),
        submenu: [{ role: 'about' }, { type: 'separator' }, { role: 'quit' }]
      },
      {
        label: 'Edit',
        submenu: [
          { label: 'Undo', accelerator: 'CmdOrCtrl+Z', selector: 'undo:' },
          {
            label: 'Redo',
            accelerator: 'Shift+CmdOrCtrl+Z',
            selector: 'redo:'
          },
          { type: 'separator' },
          { label: 'Cut', accelerator: 'CmdOrCtrl+X', selector: 'cut:' },
          { label: 'Copy', accelerator: 'CmdOrCtrl+C', selector: 'copy:' },
          { label: 'Paste', accelerator: 'CmdOrCtrl+V', selector: 'paste:' },
          {
            label: 'Select All',
            accelerator: 'CmdOrCtrl+A',
            selector: 'selectAll:'
          }
        ]
      },
      {
        role: 'window',
        submenu: [{ role: 'minimize' }, { role: 'close' }]
      }
    )
  }
  const menu = Menu.buildFromTemplate(appMenu)
  Menu.setApplicationMenu(menu)
}
