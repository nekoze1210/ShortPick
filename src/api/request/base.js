const { dialog } = require('electron')
const axios = require('axios')

exports.post = function(url, jsonOptions) {
  axios
    .post(url, jsonOptions)
    .then(response => {
      return response
    })
    .catch(error => {
      dialog.showErrorBox('ConnectionError', 'Message:' + error)
      return error
    })
}
