// main

// var server = 'http://localhost:3002';
var server = 'http://sa.diglossa.org:3002';

chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.form) {
        var path = [server, 'morph?form='].join('/');
        var query = [path, message.form].join('');
        var xhr = new XMLHttpRequest();
        xhr.open("GET", query, false);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                var res = JSON.parse(xhr.responseText);
                chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
                    chrome.tabs.sendMessage(tabs[0].id, {action: "morph_result", res: res, target: message.target}, function(response) {});
                });
            }
        }
        xhr.send();
    } else if (message.dicts) {
        var path = [server, 'dicts?dicts='].join('/');
        var query = [path, message.dicts].join('');
        var xhr = new XMLHttpRequest();
        xhr.open("GET", query, false);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                var res = JSON.parse(xhr.responseText);
                chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
                    chrome.tabs.sendMessage(tabs[0].id, {action: "dicts_result", res: res}, function(response) {});
                });
            }
        }
        xhr.send();
    }
    return true;
});
