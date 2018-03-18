const connection = new WebSocket(window.server);
const CONNECTING = 0;
const OPEN       = 1;
const CLOSING    = 2;
const CLOSED     = 3;

function sendMessage(data) {
  connection.send(JSON.stringify(data));
  console.log('send message answer: ' + data.answer);
};

function createAnswer(number) {
  var answer = '';
  if (number % 3 == 0) {
    answer = answer + 'Fizz';
  }
  if (number % 5 == 0) {
    answer = answer + 'Buzz';
  }
  if (number % 7 == 0) {
    answer = answer + 'Moi';
  }

  if (answer == '') {
    answer = number.toString();
  }

  return answer;
};

connection.onopen = function () {
  console.log('Start connection');

  body = {"signal": "start"};
  sendMessage(body);
};

connection.onerror = function (error) {
  console.log('WebSocket Error ' + error);
};

connection.onmessage = function (e) {
  rawdata = e.data;
  data = JSON.parse(e.data);
  console.log('Receive data ' + rawdata);
  if (data.signal != 'end') {
    answer = createAnswer(data.number);
    sendMessage({"answer": answer});
  } else {
    console.log('End challenge');
  }
}

