const Request = require('./request/slackWebhook')

exports.send = function(webhookUrl, channelName, pickedUrl) {
  options = setOptions(channelName, pickedUrl)
  response = Request.post(webhookUrl, options)
}

setOptions = function(channelName, pickedUrl) {
  return {
    channel: channelName,
    username: 'ShortPick',
    text: pickedUrl,
    unfurl_links: true
  }
}
