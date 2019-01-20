const { app, BrowserWindow } = require('electron')
const shortPick = require('./listener/shortPick')
const menu = require('./menu/menuBuilder')
const tray = require('./tray/trayBuilder')
const { createPreferenceWindow } = require('./browser/preferenceWindow')

exports.execute = () => {
  app.dock.hide()

  app.on('ready', function() {
    createPreferenceWindow()
    menu.setUpMenu()
    tray.setUpTray()
    shortPick.listen()
  })

  app.on('window-all-closed', function() {
    if (process.platform != 'darwin') app.quit()
  })
}
