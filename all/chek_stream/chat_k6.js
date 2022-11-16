import http from 'k6/http';
import { sleep } from 'k6';
import { url, id_ro, tokk} from './config.js';

import { check, group } from 'k6';

export let options = {


   stages: [
       { duration: '0.5m', target: 2 },
       //{ duration: '0.5m', target: 22 },
       //{ duration: '0.5m', target: 222 },
       //{ duration: '0.5m', target: 2222 },
       //{ duration: '0.5m', target: 22222 },

     ],
     headers: {
        "Content-Type": "application/json",
         "Authtoken": ""
    },
};

let head = {  headers: {
        "Content-Type": "application/json",
         "Authtoken": ""
    },
};
export default function () {


let messagefile_PNG = {
"metaData": {
"attachments": [{"hasThumbnail": false,
                "file":{
                "fileKey": '93948b9e-f604-4db1-a40f-98b26a56f555',
                "mimeType":"image/png"}
               }]
}
  "text": 'png'
  }

};

let messagefile_JPEG = {
"metaData": {
"attachments": ["hasThumbnail": false,
                "file":{
                "fileKey": '4c449d80-c29c-4a9a-a42d-0aa6877d32d0',
                "mimeType":"image/png"}
                ]
}
  "text": 'jpeg'
  }
};

let messagefile_PDF = {
"metaData": {
"attachments": [{"hasThumbnail": false,
                "file":{
                "fileKey": 'cc608166-24c4-4bb8-a1c1-3d1d837482f1',
                "mimeType":"image/png"}
               } ]
}
  "text": 'pdf',
  }

};

let messagefile_ZIP = {
"metaData"": {
"attachments": [{"hasThumbnail": false,
                "file":{
                "fileKey": 'e5ce0c02-ac12-4c60-b9ad-ebdc80457f89',
                "mimeType":"image/png"}
                }]
}
  "text": 'zip',

};

let messagefile_AVI = {
"metaData": {
"attachments": [{"hasThumbnail": false,
                "file":{
                "fileKey": '8f7d1ffa-72f1-4a78-b21f-1147e5e6e4e7',
                "mimeType":"image/png"}
                }]
}
  "text": 'avi',

};

let messagefile_M3U8 = {
"metaData": {
"attachments": [{"hasThumbnail": false,
                "file":{
                "fileKey": '0763f06d-a98b-4c1e-be52-79357e536399',
                "mimeType":"image/png"}
                }]
}
  "text": 'm3u8',

};

let messagefile_MKV = {
"metaData": {
"attachments": ["hasThumbnail": false,
                "file":{
                "fileKey": '79fdbdd4-a33c-4989-9200-8c302e04215c',
                "mimeType":"image/png"}
                ]
}
  "text": 'mkv',

};

let messagefile_SIG = {
"metaData": {
"attachments": ["hasThumbnail": false,
                "file":{
                "fileKey": 'cd2cec43-f19b-44a0-836c-759e0f4841a6',
                "mimeType":"image/png"}
                ]
}
  "text": 'sig',

};

let messagefile_DST = {
"metaData": {
"attachments": ["hasThumbnail": false,
                "file":{
                "fileKey": 'edd07648-1e32-4fc7-b94b-b554f8f4a4ab',
                "mimeType":"image/png"}
                ]
}
  "text": 'dst',

};

let messagefile_DOXC = {
"metaData": {
"attachments": ["hasThumbnail": false,
                "file":{
                "fileKey": '3998a677-6bb9-433b-944f-db4f71f064c6',
                "mimeType":"image/png"}
                ]
}
  "text": 'doxc',

};

let messagefile_EXE = {
"metaData": {
"attachments": ["hasThumbnail": false,
                "file":{
                "fileKey": 'cbee90f8-26b8-4772-9adf-14a30f65de26',
                "mimeType":"image/png"}
                ]
}
  "text": 'exe',

};

let messagefile_CSV = {
"metaData": {
"attachments": ["hasThumbnail": false,
                "file":{
                "fileKey": '7d28d963-ae65-40d6-8454-a85bcc2041e4',
                "mimeType":"image/png"}
                ]
}

};

let messagefile_JSON = {
"metaData": {
"attachments": ["hasThumbnail": false,
                "file":{
                "fileKey": 'bc3adcf3-2309-493b-888d-88b7bdc30214',
                "mimeType":"image/png"}
                ]
}
  "text": 'json',

};

let messagefile_JS = {
"metaData": {
"attachments": ["hasThumbnail": false,
                "file":{
                "fileKey": '094fb348-7487-447b-b416-b4b52d74bbe2',
                "mimeType":"image/png"}
                ]
}
  "text": 'js',

};

let messagefile_MUP = {
"metaData": {
"attachments": ["hasThumbnail": false,
                "file":{
                "fileKey": '80010fb5-901c-4ad7-878b-9de3f2eefba6',
                "mimeType":"image/png"}
                ]
}
  "text": 'mup',

};

let messagefile_XLSX = {
"metaData": {
"attachments": ["hasThumbnail": false,
                "file":{
                "fileKey": '5ddfc7e7-8979-4c0c-ac76-1b70b08054e1',
                "mimeType":"image/png"}
                ]
}
  "text": 'xlsx',

};

let messagefile_DOC = {
"metaData": {
"attachments": ["hasThumbnail": false,
                "file":{
                "fileKey": 'd3884d-a64f-4671-b430-deabd8a2d49c',
                "mimeType":"image/png"}
                ]
}
  "text": 'doc',

};



// let create_room = http.post(`${url}/createRoom?roomId=${id_ro}`), head;
// check (create_room,{
   //    'room create': (r) => r.status === 200
// })


//let send_messagefile_PNG = http.post(`${url}/sendMessage?roomId=${id_ro}`, JSON.stringify(messagefile_PNG), options);
//check (send_messagefile_PNG,{
//      'is send status 200': (r) => r.status === 200
//})
//console.log(send_messagefile_PNG.body);
//
//let send_messagefile_JPEG = http.post(`${url}/sendMessage?roomId=${id_ro}`, JSON.stringify(messagefile_JPEG), options);
//check (send_messagefile_JPEG,{
//      'is send status 200': (r) => r.status === 200
//})
//console.log(send_messagefile_JPEG.body);
//
//let send_messagefile_PDF = http.post(`${url}/sendMessage?roomId=${id_ro}`, JSON.stringify(messagefile_PDF), options);
//check (send_messagefile_PDF,{
//      'is send status 200': (r) => r.status === 200
//})
//console.log(send_messagefile_PDF.body);
//
//let send_messagefile_ZIP = http.post(`${url}/sendMessage?roomId=${id_ro}`, JSON.stringify(messagefile_ZIP), options);
//check (send_messagefile_ZIP,{
//      'is send status 200': (r) => r.status === 200
//})
//console.log(send_messagefile_ZIP.body);
//
//let send_messagefile_AVI = http.post(`${url}/sendMessage?roomId=${id_ro}`, JSON.stringify(messagefile_AVI), options);
//check (send_messagefile_AVI,{
//      'is send status 200': (r) => r.status === 200
//})
//console.log(send_messagefile_AVI.body);
//
let send_messagefile_M3U8 = http.post(`${url}/sendMessage?roomId=${id_ro}`, JSON.stringify(messagefile_M3U8), options);
check (send_messagefile_M3U8,{
     'is send status 200': (r) => r.status === 200
})
console.log(send_messagefile_M3U8.body);
//
//let send_messagefile_MKV = http.post(`${url}/sendMessage?roomId=${id_ro}`, JSON.stringify(messagefile_MKV), options);
//check (send_messagefile_MKV,{
//      'is send status 200': (r) => r.status === 200
//})
//console.log(send_messagefile_MKV.body);
//
//let send_messagefile_SIG = http.post(`${url}/sendMessage?roomId=${id_ro}`, JSON.stringify(messagefile_SIG), options);
//check (send_messagefile_SIG,{
//      'is send status 200': (r) => r.status === 200
//})
//console.log(send_messagefile_SIG.body);
//
//
//
//
// let send_messagefile_DOXC = http.post(`${url}/sendMessage?roomId=${id_ro}`, JSON.stringify(messagefile_DOXC), options);
//check (send_messagefile_DOXC,{
//     'is send status 200': (r) => r.status === 200
//})
//console.log(send_messagefile_DOXC.body);
//
//let send_messagefile_EXE = http.post(`${url}/sendMessage_EXE?roomId=${id_ro}`, JSON.stringify(messagefile_EXE), options);
//check (send_messagefile_EXE,{
//      'is send status 200': (r) => r.status === 200
//})
//console.log(send_messagefile_EXE.body);
//
//let send_messagefile_CSV = http.post(`${url}/sendMessage?roomId=${id_ro}`, JSON.stringify(messagefile_CSV), options);
//check (send_messagefile_CSV,{
//      'is send status 200': (r) => r.status === 200
//})
//console.log(send_messagefile_CSV.body);
//
//let send_messagefile_JSON = http.post(`${url}/sendMessage?roomId=${id_ro}`, JSON.stringify(messagefile_JSON), options);
//check (send_messagefile_JSON,{
//      'is send status 200': (r) => r.status === 200
//})
//console.log(send_messagefile_JSON.body);
//
//let send_messagefile_JS = http.post(`${url}/sendMessage?roomId=${id_ro}`, JSON.stringify(messagefile_JS), options);
//check (send_messagefile_JS,{
//      'is send status 200': (r) => r.status === 200
//})
//console.log(send_messagefile_JS.body);
//
//let send_messagefile_MUP = http.post(`${url}/sendMessage?roomId=${id_ro}`, JSON.stringify(messagefile_MUP), options);
//check (send_messagefile_MUP,{
//      'is send status 200': (r) => r.status === 200
//})
//console.log(send_messagefile_MUP.body);



};
