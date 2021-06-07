const buttonGenerateChart = document.getElementById('buttonGenerateChart');

let now = new Date();
let timestamp = now.getTime();

let os;
if (navigator.appVersion.indexOf("Win")!=-1) os = "windows";
if (navigator.appVersion.indexOf("Mac")!=-1) os = "mac";
if (navigator.appVersion.indexOf("X11")!=-1) os = "linux";

// let os = navigator.userAgent.slice(13).split(';')[0];

let browser = navigator.appCodeName;

function tempoDecorrido(funcao) {
 
  var b = now.getSeconds();

  return performance.now() - b;
}

function generateChart() {
  const console = document.getElementById('console');

  const requestURL = 'src/js/data.json';
  const request = new XMLHttpRequest();

  request.open('GET', requestURL);

  request.responseType = 'json';
  request.send();
  
  // Below the response loads after request loads first, it's more efficient.
  request.onload = function () {
    const loadConsole = request.response;

    consoleInputData(loadConsole);
  }

  function consoleInputData(jsonObj) {
    const fromJson = jsonObj['events'];

    for (var i = 0; i < fromJson.length; i++) {
      const myArticle = document.createElement('article');
      const clientInformation = document.createElement('p');

      clientInformation.textContent =
        ' type: ' + fromJson[i].type + ',' +
        ' timestamp: ' + timestamp + ',' +
        ' os: ' + os + ',' +
        ' browser: ' + browser + ',' +
        ' min_response_time: ' + tempoDecorrido() + ',' +
        ' max_response_time: ' + tempoDecorrido() + i;

      myArticle.appendChild(clientInformation);

      console.appendChild(myArticle);
    }
  }

  // Below we have the chart
  const context = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(context, {
    type: 'line',
    data: {

      labels: ['00:00', '00:01'],
      datasets: [
        {
          label: 'Linux Chrome Min Response Time',
          data: [2, 10],
          backgroundColor: "#7CCD7C",
          borderColor: "#7CCD7C",
          fill: false,
          lineTension: 0,
          radius: 5,
        },
        {
          label: 'Linux Chrome Max Response Time',
          data: [80, 75],
          backgroundColor: "#008B45",
          borderColor: "#008B45",
          fill: false,
          lineTension: 0,
          radius: 5
        },
        {
          label: 'Mac Chrome Min Response Time ',
          data: [10, 2],
          backgroundColor: "#8968CD",
          borderColor: "#8968CD",
          fill: false,
          lineTension: 0,
          radius: 5,
        },
        {
          label: 'Mac Chrome Max Response Time ',
          data: [74, 80],
          backgroundColor: "#551A8B",
          borderColor: "#551A8B",
          fill: false,
          lineTension: 0,
          radius: 5
        },
        {
          label: 'Linux Firefox Min Response Time',
          data: [2, tempoDecorrido()],
          backgroundColor: "#87CEFA",
          borderColor: "#87CEFA",
          fill: false,
          lineTension: 0,
          radius: 5
        },
        {
          label: 'Linux Firefox Max Response Time',
          data: [76, tempoDecorrido()],
          backgroundColor: "#104E8B",
          borderColor: "#104E8B",
          fill: false,
          lineTension: 0,
          radius: 5
        },
        {
          label: 'Mac Firefox Min Response Time',
          data: [18, tempoDecorrido()],
          backgroundColor: "#FFD700",
          borderColor: "#FFD700",
          fill: false,
          lineTension: 0,
          radius: 5
        },
        {
          label: 'Mac Firefox Max Response Time',
          data: [74, tempoDecorrido()],
          backgroundColor: "#FF7F00",
          borderColor: "#FF7F00",
          fill: false,
          lineTension: 0,
          radius: 5,
        }
      ]
    },

    options: {
      scales: {
        y: {
          beginAtZero: true,
          display: false // exclude the numbers in the vertical position
        }
      },
      plugins: {
        legend: {
          display: true,
          align: 'start',
          position: 'right',
          labels: {
            boxWidth: 8,
            boxHeight: 8,
            usePointStyle: true,
            color: [
              "black",
            ],
            textAlign: 'left',
            padding: 12
          }
        }
      },
    }
  });
}

buttonGenerateChart.addEventListener('click', generateChart);