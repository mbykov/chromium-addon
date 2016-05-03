//

var domify = require('component/domify');


document.addEventListener('dblclick', function(e){
    var selection = window.getSelection().toString();
    // alert('CLICK' + selection);
    var message = {sel: selection};
    chrome.extension.sendMessage(message, function(response) {
        //callback
    });
}, false);

chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg.action == 'morph_resp') {
        // alert("Message recieved!");
        console.log('Msg', msg.resp);
        var h1 = q('h1');
        h1.textContent = msg.resp.slp;
    }
});

function q(sel) {
    return document.querySelector(sel);
}

function qs(sel) {
    return document.querySelectorAll(sel);
}

function inc(arr, item) {
    return (arr.indexOf(item) > -1) ? true : false;
}

function empty(el) {
    while (el.hasChildNodes()) {
        el.removeChild(el.lastChild);
    }
}

function log() { console.log.apply(console, arguments) }
