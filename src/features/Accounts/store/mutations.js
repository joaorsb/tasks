const SETUSER = (state, payload) => {
    state.user = payload
}

const LOGINUSER = (state, payload) => {
    state.user = payload
}

const SETLOADING = (state, payload) => {
    state.isLoading = payload
}

const SETAUTHERROR = (state, payload) => {
    state.authError = payload
}

const CLEARAUTHERROR = (state) => {
    state.authError = null
}

export default {
    SETUSER,
    LOGINUSER,
    SETLOADING,
    SETAUTHERROR,
    CLEARAUTHERROR,
}