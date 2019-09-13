import { auth } from 'firebase'

const register = async ({commit, state}) => {
    commit('SETLOADING', true)
    commit('CLEARAUTHERROR')

    await auth().createUserWithEmailAndPassword(state.user.email, state.user.password).then(
        response => {
            const newUser = {
                id: response.user.uid,
                name: state.user.name,
                password: '',
                email: response.user.email
            }
            commit('SETUSER', newUser )
            commit('SETLOADING', false)
        }
    ).catch(
        error => {
            commit('SETAUTHERROR', error)
            commit('SETLOADING', false)
        }
    ).finally(
    )
}

const login = async ({commit, state}) => {
    commit('SETLOADING', true)
    commit('CLEARAUTHERROR')

    await auth().signInWithEmailAndPassword(state.user.email, state.user.password).then(
        response => {
            const loggedUser = {
                id: response.user.uid,
                password: '',
                email: response.user.email
            }
            commit('LOGINUSER', loggedUser)
            commit('SETLOADING', false)
        }
    ).catch(
        error => {
            commit('SETAUTHERROR', error)
            commit('SETLOADING', false)
        }
    ).finally(
    )
}

const setLoading = ({commit, }, payload) => {
    commit('SETLOADING', payload)
}

const clearAuthError = ({ commit }) => {
    commit('CLEARAUTHERROR')
}

export default {
    register,
    login,
    setLoading,
    clearAuthError
}