import axios from 'axios'

export default() => {
    return axios.create({
        baseURL: `https://webhooks.mongodb-stitch.com/api/client/v2.0/app/oddsbf-dvyne/service/http/incoming_webhook/webhook0`,
        withCredentials: false,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}