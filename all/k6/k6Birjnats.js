import { check } from 'k6';
import http from 'k6/http';
import { options } from './configBirj.js';
import { Counter } from 'k6/metrics';
import ssh from 'k6/x/ssh';
export { options };
const url = 'https://staging.bit.team/api/ccxt/ordercreate';


// let openvpn1 = require ('./openvpn.ovpn');
// const openvpnmanager = require('node-openvpn');

// openvpn1 = openvpnmanager.connect(opts);
// const opts = {
//   host: '192.168.64.164', // normally '127.0.0.1', will default to if undefined
//   port: 8222, //port openvpn management console
//   timeout: 1500, //timeout for connection - optional, will default to 1500ms if undefined
//   logpath: 'log.txt' //optional write openvpn console output to file, can be relative path or absolute
// };
// const auth = {
//   user: 'exchange-devs',
//   pass: 'Iewielahloodib8',
// };
// openvpn1.on('connected', () => {
//     openvpnmanager.authorize(auth);
//   });


export default function() {
    const options = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Basic ZWI4ZDM0YTg0NmMyNzMzZTU5MmNiNDM2NTYwNDZlODM4MDM5MDllMWY4YTRhN2UyZmI1YzI1NDQ0ODZkOjhkYTkwZGE0YjEwMWNjNWIyYTQwMjU3MzY5ZTRjNWExZmViZjJlMzhlMDZmZDBhMzYxOTVkODMyZDZiYmIwOWM3MzlhNWI5NjhiMjBjMWMx"
        },
    };
    let data_buy = {
        "pairId" :'18',
        "side": 'buy',
        "type": 'limit',
        "amount": '0.1',
        "price": '0.1'
    }
    let data_sell = {
        "pairId" :'18',
        "side": 'sell',
        "type": 'limit',
        "amount": '0.1',
        "price": '0.2'
    }
    let data_buy_trx_usdt = {
        "pairId" :'13',
        "side": 'buy',
        "type": 'limit',
        "amount": '0.1',
        "price": '0.3'
    }
    let data_sell_trx_usdt = {
        "pairId" :'13',
        "side": 'sell',
        "type": 'limit',
        "amount": '0.1',
        "price": '0.3'
    }
    let res_buy = http.post(url, JSON.stringify(data_buy), options);
    check (res_buy,{
        'is buy status 200': (r) => r.status === 200
    })
    console.log(res_buy.body);

    let res_sell = http.post(url, JSON.stringify(data_sell), options);
    check (res_sell , {
        'is sell status 200': (r) => r.status === 200
    })
    console.log(res_sell.body);

    let res_buy_trx_usdt = http.post(url, JSON.stringify(data_buy_trx_usdt), options);
    check (res_buy_trx_usdt , {
        'is buy trx_usdt status 200': (r) => r.status === 200
    })
    console.log(res_buy_trx_usdt.body);
    let res_sell_trx_usdt = http.post(url, JSON.stringify(data_sell_trx_usdt), options);
    check (res_sell_trx_usdt, {
        'is sell trx_usdt status 200': (r) => r.status === 200
    });
    let nats_jsz = http.get('http://192.168.64.164:8222/jsz');

    check (nats_jsz, {
        'is nuts status 200': (r) => r.status === 200,
        
    });
    console.log("streams = ", nats_jsz.json().streams);
    console.log("consumers = ", nats_jsz.json().consumers);
    console.log("messages = ", nats_jsz.json().messages);

    let nats_varz = http.get('http://192.168.64.164:8222/varz');

    check (nats_varz, {
        'is nuts status 200': (r) => r.status === 200,
        
    });
    console.log("mem = ", nats_varz.json().mem);
    console.log("cpu = ", nats_varz.json().cpu);



        ssh.connect({
          username: 'USERNAME',
            host: "192.168.64.13",
            port: 22,
            rsa_key: "~/.ssh/id_rsa"
        })
        console.log(ssh.run('pwd'))
      
        
};
