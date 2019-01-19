const { Menu, Tray, nativeImage } = require('electron')
const { menuTemplate } = require('../menu/template')
const path = require('path')
const iconPath = path.join(__dirname, '../assets/cat.png')
const icon = nativeImage.createFromPath(iconPath)

exports.setUpTray = () => {
  icon.resize({ width: 16, height: 16 })
  appTray = new Tray(icon)
  const contextMenu = Menu.buildFromTemplate(menuTemplate)
  appTray.setContextMenu(contextMenu)
}
