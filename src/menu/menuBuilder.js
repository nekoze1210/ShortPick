const { app, Menu } = require('electron')
const { menuTemplate } = require('./template')

exports.setUpMenu = () => {
  if (process.platform === 'darwin') {
    appMenu = menuTemplate.concat()
    appMenu.unshift({
      label: app.getName(),
      submenu: [{ role: 'about' }, { type: 'separator' }, { role: 'quit' }]
    })
  }
  const menu = Menu.buildFromTemplate(appMenu)
  Menu.setApplicationMenu(menu)
}
