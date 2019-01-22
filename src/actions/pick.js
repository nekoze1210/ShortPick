const { Notification } = require('electron')
const applescript = require('applescript')
const slackWebhook = require('../api/slackWebhook')
const storage = require('electron-json-storage')

exports.pick = function() {
  storage.get('ShortPickConfig', function(error, data) {
    if (error) throw error
    if (Object.keys(data).length === 0) {
    } else {
      webhookUrl = data['webhookUrl']
      channelName = data['channelName']
      targetBrowser = data['targetBrowser']

      browserScript = getScriptByTargetBrowser(targetBrowser)
      if (browserScript === 'error') {
        notification = new Notification({
          title: 'Error',
          body: 'Please select target browser'
        })
        return
      }

      if (!channelName && !webhookUrl) {
        notification = new Notification({
          title: 'Error',
          body: 'Please fill in Slack Channel Name and Webhook URL'
        })
        return
      }

      applescript.execString(browserScript, (error, pickedUrl) => {
        if (error) {
          return null
        }
        if (pickedUrl) {
          slackWebhook.send(webhookUrl, channelName, pickedUrl)
          notification = new Notification({
            title: 'ShortPick',
            body: 'Successfully Picked'
          })
          notification.show()
          setTimeout(() => {
            notification.close()
          }, 5000)
        }
      })
    }
  })
}

getScriptByTargetBrowser = function(targetBrowser) {
  const chromeScript =
    'tell application "Google Chrome" to get URL of active tab of front window as string'
  const safariScript =
    'tell application "Safari" to return URL of front document as string'
  const firefoxScript =
    'tell application "Firefox" to activate tell application "System Events" keystroke "l" using command down keystroke "c" using command down end tell'

  switch (targetBrowser) {
    case 'Chrome':
      return chromeScript
    case 'Safari':
      return safariScript
    case 'Firefox':
      return firefoxScript
    default:
      return 'error'
  }
}
