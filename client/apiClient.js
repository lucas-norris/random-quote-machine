import request from 'superagent'

export function getQuotes() {
  return request.get('http://localhost:3000/api/quotes').then((response) => {
    return response.body
  })
}
