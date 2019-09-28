import moment from "moment-timezone";

const matchesList = (state) => {
    return state.matches.map(match => {

        // moment.locale('pt_br')
        // let date = moment(String(match['markets']['marketStartTime'])).tz("America/Sao_Paulo").format('lll')

        let over = '-'
        let under = '-'
        if(match['markets']['over_25'] !== undefined &&
            (match['markets']['over_25']['over']['odds']['availableToBack'].length > 0 )){
            over = match['markets']['over_25']['over']['odds']['availableToBack'][0] !== undefined ? match['markets']['over_25']['over']['odds']['availableToBack'][0]['price']['$numberDouble'] : match['markets']['over_25']['over']['odds']['availableToLay'][0]['price']['$numberDouble']
            under = match['markets']['over_25']['under']['odds']['availableToBack'][0] !== undefined ? match['markets']['over_25']['under']['odds']['availableToBack'][0]['price']['$numberDouble'] : match['markets']['over_25']['under']['odds']['availableToLay'][0]['price']['$numberDouble']
        }
        return {
            'marketStartTime': match['markets']['marketStartTime'],
            'competition': match['markets']['competition'],
            'match': match['markets']['eventName'],
            'homePrice': match['markets']['homeTeam']['odds']['availableToBack'][0]['price']['$numberDouble'],
            'awayPrice': match['markets']['awayTeam']['odds']['availableToBack'][0]['price']['$numberDouble'],
            'drawPrice': match['markets']['draw']['odds']['availableToBack'][0]['price']['$numberDouble'],
            'overPrice': over,
            'underPrice': under
        }
    })
}

export default {
    matchesList
}