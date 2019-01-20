const { createPreferenceWindow } = require('../browser/preferenceWindow')
const { pick } = require('../actions/pick')

exports.menuTemplate = [
  {
    label: 'Target Browser',
    submenu: [
      {
        label: 'Safari',
        role: 'reload'
      },
      {
        label: 'Chrome',
        role: 'reload'
      },
      {
        label: 'Firefox',
        role: 'reload'
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
