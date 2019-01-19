const { Notification } = require('electron')
const applescript = require('applescript')
const slackWebhook = require('../api/slackWebhook')

const chromeScript =
  'tell application "Google Chrome" to get URL of active tab of front window as string'
const safariScript =
  'tell application "Safari" to return URL of front document as string'
const firefoxScript =
  'tell application "Firefox" to activate tell application "System Events" keystroke "l" using command down keystroke "c" using command down end tell'

exports.pick = function() {
  console.log('pick.js Triggered')
  // browserScript = ''

  // TODO: Delete after complete userdefaults functions
  browserScript = chromeScript
  webhookUrl =
    'https://hooks.slack.com/services/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'
  channelName = 'good_articles'
  // TODO: Delete after complete userdefaults functions

  applescript.execString(browserScript, (error, pickedUrl) => {
    if (error) {
      console.log(error)
      return null
    }
    if (pickedUrl) {
      slackWebhook.send(webhookUrl, channelName, pickedUrl)

      notification = new Notification({
        title: 'ShortPick',
        body: 'Successfully Picked'
      })
      notification.show()
    }
  })
}
