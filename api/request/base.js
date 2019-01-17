const axios = require('axios')

exports.post = function(url, jsonOptions) {
  axios
    .post(url, jsonOptions)
    .then(response => {
      console.log('SUCCEEDED: Sent slack webhook: \n', response.data)
      return response
    })
    .catch(error => {
      console.log('FAILED: Send slack webhook', error)
      dialog.showErrorBox(
        'ConnectionFailed',
        'Pickに失敗しました。\nError:' + error
      )
      return error
    })
}
