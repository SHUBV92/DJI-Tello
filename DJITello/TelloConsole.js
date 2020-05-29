const got = require('got');
const eol = require('os').EOL;
const readline = require('readline')
readline.emitKeypressEvents(process.stdin)
process.stdin.setRawMode(true)

let dataToTrack_keys = ["battery", "x", "y", "z", "speed"];
let lastDataRecieved = null; 

let fs = require('fs');

let PORT = 8889;
let HOST = 2;

let dgram = require('dgram')
let client = dgram.createSocket('udp4')

client.bind(8001);

function respondToPoll(response){ 

    let noDataRecieved = false; 

    let resp = ""; 
    let i; 
    for(i=0; i < dataToTrack_keys.length; i++){
        resp += dataToTrack_keys[i] + " ";
        resp += (i+10);
                resp += "\n"
    }
    response.end(resp);
}

