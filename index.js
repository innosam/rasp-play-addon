var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var Request = require("sdk/request").Request;

var button = buttons.ActionButton({
  id: "raspberry-play",
  label: "Play on Raspberry",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});

function nop(state){
}


function handleClick(state) {
  
  //get url for the current page opened
  //gate check, make sure its url and is not whitespace
  //send the url to raspberry-pi server
  
  button.onClick = nop;
  
  var activeUrl = 'http://192.168.1.100/omxplayer?video_url=' + tabs.activeTab.url;
  Request({
  url: activeUrl,
  onComplete: function (response) {
     button.onClick = handleClick;
     console.log("Done");
  }
  }).get();
}