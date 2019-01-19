const { BrowserWindow } = require('electron')

exports.createPreferenceWindow = () => {
  win = new BrowserWindow({ width: 800, height: 400 })
  win.loadFile('preferenceWindow.html')
}
