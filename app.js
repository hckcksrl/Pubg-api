const express = require("express")
const app = express()
const pubg = require('./api/pubg')

app.get('/player/:name/region/:region' , (req,res) => {
    return pubg.Player(req.params.region , req.params.name)
})

app.get('/player/:player_id/region/:region') , (req,res) => {
    return pubg.Player_id(req.params.region , req.params.player_id)
}

app.get('/match/:match_id/region/:region') , (req,res) => {
    return pubg.Match(req.params.region , req.params.match_id)
}


app.listen(4000, () =>{
    console.log("run server")
})