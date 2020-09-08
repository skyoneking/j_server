const WebSocket = require('ws')
const {object2queryString, getQueryObject} = require('./utils')

const url = 'ws://localhost:3040?' + object2queryString({
    wsType: 'server',
    path: 'test'
})

const ws = new WebSocket(url)
ws.on('open', () => {
    console.log('server连接成功')
    ws.send('hahaha')
})

ws.on('message', data => {
    console.log(data)
    ws.send('dada')
})

ws.on('error', e => {
    console.log(e)
})