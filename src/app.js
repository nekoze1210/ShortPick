const { app, BrowserWindow } = require('electron')
const shortPick = require('./listener/shortPick')
const menu = require('./menu/menuBuilder')
const tray = require('./tray/trayBuilder')
const { createPreferenceWindow } = require('./browser/preferenceWindow')
const firstRun = require('electron-first-run')

exports.execute = () => {
  app.dock.hide()

  app.on('ready', function() {
    menu.setUpMenu()
    tray.setUpTray()

    const isFirstRun = firstRun()
    if (isFirstRun) {
      createPreferenceWindow()
    }

    shortPick.listen()
  })

  app.on('window-all-closed', function() {
    if (process.platform != 'darwin') app.quit()
  })
}
