const express = require('express')
const route = express.Router()
const axios = require('axios').default
const parser = require('node-html-parser').parse


route.get('/rank', function(req, res) {
    var url = "https://br.op.gg/ranking/ladder/"
    var requisicao = axios.get(url)
    
    var filtro;

    if(req.query.nome) filtro = req.query.nome

    requisicao.then(function(resposta){
        const date = new Date().getTime()
        var root = parser(resposta.data);
        var divList = root.querySelectorAll(".ranking-table__row");
        var ar = [];
        
        divList.map(function(item){
            var name = item.querySelector('.ranking-table__cell--summoner').querySelector('a').querySelector('span').rawText
            var rank = item.querySelector('.ranking-table__cell--rank').rawText.trim()
            var tier = item.querySelector('.ranking-table__cell--tier').querySelector('div').rawText
            
            var jog = {name,rank,tier,timestamp:date}
            
            if(filtro){
                if(name.includes(filtro)){
                    ar.push(jog)
                }
            } else {
               ar.push(jog)
            }
        })

        res.json(ar)
    }).catch(err => {
        res.json(err)
    })
})

route.get('/level', async function(req, res) {
    var url = "https://br.op.gg/ranking/level/"
    var requisicao = axios.get(url)
    
    var filtro;

    if(req.query.nome) filtro = req.query.nome

    requisicao.then(function(resposta){
        const date = new Date().getTime()
        var root = parser(resposta.data);
        var divList = root.querySelectorAll(".ranking-table__row");
        var ar = [];
        
        divList.map(function(item){
            var name = item.querySelector('.ranking-table__cell--summoner').querySelector('a').querySelector('span').rawText
            var rank = item.querySelector('.ranking-table__cell--rank').rawText.trim().split('\n')[0]
            var tier = item.querySelector('.ranking-table__cell--tier').querySelector('div').rawText
            
            var jog = {name,rank,tier,timestamp:date}
            
            if(filtro){
                if(name.includes(filtro)){
                    ar.push(jog)
                }
            } else {
               ar.push(jog)
            }
        })

        res.json(ar)
    }).catch(err => {
        res.json(err)
    })
})

module.exports = route