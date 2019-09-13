const authError = (state) => {
    return state.authError
}

const isLoading = (state) => {
    return state.isLoading
}

const loggedUser = (state) => {
    return state.user
}

const loadingLabel = (state) => {
    return state.loadingLabel
}

export default {
    authError,
    isLoading,
    loggedUser,
    loadingLabel
}