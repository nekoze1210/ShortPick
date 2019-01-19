const { app, BrowserWindow, Menu, Tray } = require('electron')
const shortPick = require('./listener/shortPick')
const menu = require('./menu/menuBuilder')
const tray = require('./tray/trayBuilder')

exports.execute = () => {
  app.dock.hide()

  app.on('ready', function() {
    menu.setUpMenu()
    tray.setUpTray()
    shortPick.listen()
  })

  app.on('window-all-closed', function() {
    if (process.platform != 'darwin') app.quit()
  })
}
