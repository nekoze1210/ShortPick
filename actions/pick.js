exports.listen = function() {
  chromeScript =
    'tell application "Google Chrome" to get URL of active tab of front window as string'
  safariScript =
    'tell application "Safari" to return URL of front document as string'
  firefoxScript =
    'tell application "Firefox" to activate tell application "System Events" keystroke "l" using command down keystroke "c" using command down end tell'

  globalShortcut.register('CommandOrControl+Shift+L', () => {
    console.log('Webhook Triggered')
  })
}
