import { auth } from 'firebase'
import { db } from '../../../main'

const register = async ({commit, state}) => {
    commit('SETLOADING', true)
    commit('CLEARAUTHERROR')

    await auth().createUserWithEmailAndPassword(state.user.email, state.user.password).then(
        response => {
            console.log(response.user)
            const newUser = {
                id: response.user.uid,
                name: state.user.name,
                email: response.user.email
            }

            db.collection('users').add(newUser)
            localStorage.setItem('token', response.user.refreshToken)
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


    auth().signInWithEmailAndPassword(state.user.email, state.user.password).then(
        () => {
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

const setAuthError = ({ commit }, payload) => {
    commit('SETAUTHERROR', payload)

}

const clearUser = ({commit}) => {
    auth().signOut()
    commit('CLEARUSER')
}

const setToken = ({commit}, payload) => {
    commit('SETTOKEN', payload)
}

const setUser = ({commit}, payload) => {
    db.collection('users').where('email', '==', payload.email).get().then(
        snapshot => {
            snapshot.forEach(doc => {
                payload.name = doc.data().name
                commit('SETUSER', payload)
            })
        }
    )
}

const clearToken = ({commit}, payload) => {
    commit('CLEARTOKEN', payload)
}

export default {
    register,
    login,
    setLoading,
    clearAuthError,
    setAuthError,
    clearUser,
    setToken,
    clearToken,
    setUser,

}