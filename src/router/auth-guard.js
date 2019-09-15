import store  from '../store/index'

export default (to, from, next) => {
    let loggedUser = store.getters['Accounts/loggedUser']
    if(loggedUser.id){
        next()
    } else {
        store.dispatch('Accounts/setAuthError', {message: "Oooopsie... Faça login primeiro!"})
        next('/login')
    }
}