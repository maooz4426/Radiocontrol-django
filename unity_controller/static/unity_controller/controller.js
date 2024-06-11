// const url = document.getElementById('wsurl').value;
// console.log(url);

const ws = new WebSocket('ws://' + window.location.host + '/ws/control/')

ws.onopen = () => {
  console.log('WebSocket is connected');
};

function sendCommand(command) {
  ws.send(JSON.stringify({'command': command}));
}

ws.onmessage = (e) => {
  const data = JSON.parse(e.data);
  console.log('Received command:', data.command);
};

// const ws = new WebSocket('ws://' + window.location.host + '/ws/control/');
// console.log(window.location.host)
// ws.onopen = () => {
//   console.log('WebSocket is connected');
// };
//
// function sendCommand(command) {
//   ws.send(JSON.stringify({'command': command}));
// }
//
// ws.onmessage = (e) => {
//   const data = JSON.parse(e.data);
//   console.log('Received command:', data.command);
// };
