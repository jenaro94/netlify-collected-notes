const axios = require("axios")

exports.handler = async event => {
  const hookURL =
    event.queryStringParameters && event.queryStringParameters.hook
  if (hookURL) {
    const response = await axios.post(hookURL)
    if (response.status !== 200) {
      return { statusCode: response.status, body: "Could not rebuild" }
    }
    return { statusCode: 200, body: "rebuilding" }
  } else {
    return { statusCode: 200, body: "Nothing happened" }
  }
}
