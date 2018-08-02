const fetch = require('node-fetch')
const token = require('../token')
const PUBG_API_URL = 'https://api.pubg.com'

export const Player = (region, name) => {

    fetch(PUBG_API_URL+`/shards/${region}/players?filter[playerNames]=${name}`, {
        method : 'GET',
        headers : {
            Authorization: `Bearer ${token.api}`,
            Accept: 'application/json'
        }
    })
    .then((response) => response.json())
    .then((response) => {
        return response
    })
    .catch(error => {
        return error
    })
}

export const Player_id = (region, player_id) => {

    fetch(PUBG_API_URL+`/shards/${region}/players?filter[playerIds]=${player_id}`, {
        method : 'GET',
        headers : {
            Authorization: `Bearer ${token.api}`,
            Accept: 'application/json'
        }
    })
    .then((response) => response.json())
    .then((response) => {
        return response
    })
    .catch(error => {
        return error
    })
}

export const Match = (region,match_id)=> {

    fetch(PUBG_API_URL+`/shards/${region}/matches/${match_id}`, {
        method : 'GET',
        headers : {
            Authorization: `Bearer ${token.api}`,
            Accept: 'application/json'
        }
    })
    .then((response) => response.json())
    .then((response) => {
        return response
    })
    .catch(error => {
        return error
    })

}


