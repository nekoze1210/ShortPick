const { createPreferenceWindow } = require('../browser/preferenceWindow')
const { pick } = require('../actions/pick')
const storage = require('electron-json-storage')

exports.menuTemplate = [
  {
    label: 'Target Browser',
    submenu: [
      {
        label: 'Safari',
        click() {
          changeTargetBrowser('Safari')
        }
      },
      {
        label: 'Chrome',
        click() {
          changeTargetBrowser('Chrome')
        },
        checked: true
      },
      {
        label: 'Firefox',
        click() {
          changeTargetBrowser('Firefox')
        },
        checked: true
      }
    ]
  },
  {
    label: 'Pick',
    click() {
      pick()
    }
  },
  {
    label: 'Preference...',
    click() {
      createPreferenceWindow()
    }
  },
  {
    type: 'separator'
  },
  {
    label: 'Quit',
    role: 'quit'
  }
]

changeTargetBrowser = function(selectedBrowser) {
  storage.get('ShortPickConfig', function(error, data) {
    if (error) throw error
    if (Object.keys(data).length === 0) {
    } else {
      var json = {
        webhookUrl: data['webhookUrl'],
        channelName: data['channelName'],
        shortcut: data['shortcut'],
        targetBrowser: selectedBrowser
      }
      storage.set('ShortPickConfig', json, function(error) {
        if (error) throw error
      })
    }
  })
}
