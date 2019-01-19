const apiClient = require('./base')

exports.post = function(url, options) {
  jsonOptions = JSON.stringify(options)
  apiClient.post(url, jsonOptions)
}
