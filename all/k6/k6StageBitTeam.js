import { check } from 'k6';
import http from 'k6/http';
import { options, BASE_URL, USER, PASSWORD } from './config.js';

export {options};
const basic = 'NTk2Mzk4ZDg2MDczYzRlODU2ZjdiNmExYjc4NGZlN2YzYTBiZGZlN2I5NjY0ZTM0MzAwMDRiMGY4NDg4OmFmMGUwOTJhMjRhYWY0OTM4YWNjYTAyNDA2YmU5YTU4NjM2ZTkwNmQwYjk2NGRjYjViOGU3NThhZWIzNTRkM2YzMWQ5MDUzZjM1MDBkZDE0'
const url = 'https://staging.bit.team/api/ccxt/ordercreate';
export default function() {
// const url = `https://staging.bit.team/api/ccxt/ordercreate/`;
const options = {
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Basic NTk2Mzk4ZDg2MDczYzRlODU2ZjdiNmExYjc4NGZlN2YzYTBiZGZlN2I5NjY0ZTM0MzAwMDRiMGY4NDg4OmFmMGUwOTJhMjRhYWY0OTM4YWNjYTAyNDA2YmU5YTU4NjM2ZTkwNmQwYjk2NGRjYjViOGU3NThhZWIzNTRkM2YzMWQ5MDUzZjM1MDBkZDE0"
    },
};
let data_buy = {
    "pairId" :'18',
    "side": 'buy',
    "type": 'limit',
    "amount": '0.1',
    "price": '0.1'
};
let data_sell = {
    "pairId" :'18',
    "side": 'sell',
    "type": 'limit',
    "amount": '0.1',
    "price": '0.1'
};
let res_buy = http.post(url, JSON.stringify(data_buy), options);
check (res_buy,{
        'is buy status 200': (r) => r.status === 200
})
console.log(res_buy.body);
let res_sell = http.post(url, JSON.stringify(data_sell), options);
check (res_sell , {
    'is sell status 200': (r) => r.status === 200
})
}
