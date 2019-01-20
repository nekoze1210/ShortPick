const { BrowserWindow } = require('electron')

exports.createPreferenceWindow = () => {
  win = new BrowserWindow({
    title: 'ShortPick',
    width: 800,
    height: 400,
    center: true,
    resizable: false
  })
  win.loadURL(`file://${__dirname}/preferenceWindow.html`)
}
