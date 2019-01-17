const Request = require('./request/slackWebhook')

exports.send = function(webhookUrl, channelName, pickedUrl) {
  // TODO: Delete after complete userdefaults functions
  webhookUrl =
    'https://hooks.slack.com/services/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'
  channelName = 'good_articles'
  // TODO: Delete after complete userdefaults functions

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
