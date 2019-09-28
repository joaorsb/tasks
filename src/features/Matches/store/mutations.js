const SETMATCHES = (state, payload) => {
    state.matches = payload
}

const SETLOADING = (state, payload) => {
    state.isLoading = payload
}

export default {
    SETMATCHES,
    SETLOADING,

}