const buttonGenerateChart = document.getElementById('buttonGenerateChart');

let now = new Date();
let timestamp = now.getTime();

let os;
if (navigator.appVersion.indexOf("Win")!=-1) os = "windows";
if (navigator.appVersion.indexOf("Mac")!=-1) os = "mac";
if (navigator.appVersion.indexOf("X11")!=-1) os = "linux";

// let os = navigator.userAgent.slice(13).split(';')[0];

let browser;
if (navigator.appCodeName.indexOf("Chrome")!=-1) browser = "Chrome";
if (navigator.appCodeName.indexOf("Mozilla")!=-1) browser = "Mozilla";
if (navigator.appCodeName.indexOf("X11")!=-1) browser = "Safari";

// let browser = navigator.appCodeName;

console.log(os);
console.log(browser);

// Passe a função desejada. Se ela esperar parâmetros,
// passe os parâmetros na sequência. Exemplo:
// tempoDecorrido(minhaFuncao, 1, true, {teste:10});
function tempoDecorrido(funcao) {
  
  // logo antes da execução
  
  var b = now.getSeconds();

  // logo após a execução
  return performance.now() - b;
}


// Testando
console.log(tempoDecorrido());

function generateChart() {
  const console = document.getElementById('console');

  const requestURL = 'src/js/data.json';
  const request = new XMLHttpRequest();

  request.open('GET', requestURL);

  request.responseType = 'json';
  request.send();

  request.onload = function () {
    const loadConsole = request.response;

    consoleInputData(loadConsole);
  }

  function consoleInputData(jsonObj) {
    const fromJson = jsonObj['events'];

    for (var i = 0; i < fromJson.length; i++) {
      const myArticle = document.createElement('article');
      const p1 = document.createElement('p');

      p1.textContent =
        ' type: ' + fromJson[i].type + ',' +
        ' timestamp: ' + timestamp + ',' +
        ' os: ' + os + ',' +
        ' browser: ' + browser + ',' +
        ' min_response_time: ' + tempoDecorrido() + ',' +
        ' max_response_time: ' + fromJson[i].max_response_time;

      myArticle.appendChild(p1);

      console.appendChild(myArticle);
    }
  }

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
          data: [2, 18],
          backgroundColor: "#87CEFA",
          borderColor: "#87CEFA",
          fill: false,
          lineTension: 0,
          radius: 5
        },
        {
          label: 'Linux Firefox Max Response Time',
          data: [76, 88],

          backgroundColor: "#104E8B",
          borderColor: "#104E8B",
          fill: false,
          lineTension: 0,
          radius: 5
        },
        {
          label: 'Mac Firefox Min Response Time',
          data: [18, 10],
          backgroundColor: "#FFD700",
          borderColor: "#FFD700",
          fill: false,
          lineTension: 0,
          radius: 5
        },
        {
          label: 'Mac Firefox Max Response Time',
          data: [74, 75],
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