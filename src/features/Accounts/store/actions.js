import { auth } from 'firebase'
import { db } from '../../../main'

const register = async ({commit, state}) => {
    commit('SETLOADING', true)
    commit('CLEARAUTHERROR')

    await auth().createUserWithEmailAndPassword(state.user.email, state.user.password).then(
        response => {
            const newUser = {
                id: response.user.uid,
                name: state.user.name,
                email: response.user.email
            }
            db.collection('users').add(newUser)
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
                email: response.user.email
            }
            db.collection('users').where('email', '==',loggedUser.email).get().then(
                snapshot => {
                    snapshot.forEach(doc => {
                        loggedUser.name =doc.data().name
                    })
                }
            )
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

const clearUser = ({commit}) => {
    commit('CLEARUSER')
}

export default {
    register,
    login,
    setLoading,
    clearAuthError,
    clearUser
}