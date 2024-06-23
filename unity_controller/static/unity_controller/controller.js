const url = 'ws://' + window.location.host + '/ws/control/'

const ws = new WebSocket(url)

console.log(url)

ws.onopen = () => {
  console.log('WebSocket is connected');
};

let pressTimer;

let intervalId;

//パソコンでクリックされたら
function onStart(command){
    pressTimer = window.setTimeout(function (){
        intervalId = window.setInterval(function (){
            sendCommand(command);
        },1000
        )
    },50)
}

function onEnd() {
    clearTimeout(pressTimer);
    clearInterval(intervalId);
}

//スマホでタッチされたら
function onTouchStart(event, command) {
    event.preventDefault();
    pressTimer = window.setTimeout(function() {
        intervalId = window.setInterval(function (){
             sendCommand(command);
        },1000
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


