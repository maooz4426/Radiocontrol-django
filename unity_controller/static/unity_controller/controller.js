

const ws = new WebSocket('wss://' + window.location.host + '/ws/control/')
console.log('ws://' + window.location.host + '/ws/control/')
ws.onopen = () => {
  console.log('WebSocket is connected');
};

let pressTimer;

let intervalId;
function onTouchStart(event, command) {
    event.preventDefault();
    pressTimer = window.setTimeout(function() {
        intervalId = window.setInterval(function (){
             sendCommand(command);
        },50
        )

    }, 50);
  }
  function onTouchEnd(){
    clearTimeout(pressTimer);
    clearInterval(intervalId);
  }


function sendCommand(command) {
  ws.send(JSON.stringify({'command': command}));
}

ws.onmessage = (e) => {
  const data = JSON.parse(e.data);
  console.log('Received command:', data.command);
};


