import Api from './api'

export default {
    getMatchesList() {
        return Api().get('')
    },
}