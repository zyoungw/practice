// import axios from 'axios'
// axios.get('/api/info').then((res) => {
//   console.log(res)
// })
import counter from './counter'
import number from './number'
counter()
number()
if (module.hot) {
  module.hot.accept('./number', function () {
    document.body.removeChild(document.getElementById('number'))
    number()
  })
}
