const {
  app,
  BrowserWindow,
  globalShortcut,
  dialog,
  Notification,
  Menu,
  MenuItem,
  systemPreferences,
  Tray
} = require('electron')
const applescript = require('applescript')
const slackWebhook = require('./api/slackWebhook')

app.dock.hide()

function createPreferenceWindow() {
  win = new BrowserWindow({ width: 800, height: 400 })
  win.loadFile('index.html')
}

const menuTemplate = [
  {
    label: 'View',
    submenu: [
      {
        label: 'Target Browser',
        role: 'reload'
      },
      {
        label: 'Pick'
        // click() {
        // webhookListener()
        // }
      },
      {
        label: 'Menu1',
        submenu: [
          {
            label: 'hoge',
            role: 'reload'
          }
        ]
      },
      {
        label: 'Preference...',
        click() {
          createPreferenceWindow()
        }
      }
    ]
  }
]

if (process.platform === 'darwin') {
  appMenu = menuTemplate.concat()
  appMenu.unshift({
    label: app.getName(),
    submenu: [{ role: 'about' }, { type: 'separator' }, { role: 'quit' }]
  })
}

const menu = Menu.buildFromTemplate(menuTemplate)
Menu.setApplicationMenu(menu)

function initTray() {
  appTray = new Tray('icons/cat.png')
  const contextMenu = Menu.buildFromTemplate(menuTemplate)
  appTray.setContextMenu(contextMenu)
}

app.on('ready', () => {
  initTray()
  chromeScript =
    'tell application "Google Chrome" to get URL of active tab of front window as string'
  safariScript =
    'tell application "Safari" to return URL of front document as string'
  firefoxScript =
    'tell application "Firefox" to activate tell application "System Events" keystroke "l" using command down keystroke "c" using command down end tell'
  globalShortcut.register('CommandOrControl+Shift+L', () => {
    console.log('Webhook Triggered')

    // TODO: 確認用
    if (Notification.isSupported()) {
      console.log('Your Notification Setting is: ' + Notification.isSupported())
      notification = new Notification({
        title: 'ShortPick',
        body: 'Successfully Picked',
        sound: '/System/Library/Sounds/Basso.aiff'
      })
      notification.show()
    }

    // webhookListener()
  })
})

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') app.quit()
})
