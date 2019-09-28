import MatchesServices from '@/services/MatchesServices'

const getMatches = async ({commit}) => {
    commit('SETLOADING')
    const list = (await MatchesServices.getMatchesList()).data
    if(list.length > 0) {
        commit('SETMATCHES', list)
    }
    commit('SETLOADING')
}

export default {
    getMatches
}