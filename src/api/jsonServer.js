import axios from 'axios'

export default axios.create({
    // when using Ngrok, the baseURL will need to be updated for the free version every 8 hrs. 
    // Do `npm run tunnel` to triger mock API
    baseURL: "http://1489ea6c7772.ngrok.io"
})