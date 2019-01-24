const { globalShortcut } = require('electron')
const { pick } = require('../actions/pick')

exports.listen = function() {
  globalShortcut.register('CommandOrControl+Shift+L', () => {
    pick()
  })
}
