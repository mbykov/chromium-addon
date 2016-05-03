//

// var optionsUrl = chrome.extension.getURL("src/options/options.html");
// var content = '<a href="' + optionsUrl + '" target="_blank">Options</a>';


// alert('POPUP from JS');

// Get the current active tab in the lastly focused window
// chrome.tabs.query({
//     active: true,
//     lastFocusedWindow: true
// }, function(tabs) {
//     // and use that tab to fill in out title and url
//     var tab = tabs[0];
//     // run({
//         // url: tab.url,
//         // description: tab.title
//     // });
//     var url = tab.url;
//     // alert(url);
//     // var selection = window.getSelection().toString()
//     // alert(selection);
//     chrome.tabs.sendMessage(tab.id, {method: "getSelection"},
//                             function(response) {
//                                 // var text = document.getElementById('text');
//                                 // text.innerHTML = response.data;
//                                 alert('R = ' + response.data);
//                                 // alert('Resp: ' + tab.url);
//     });
// });
