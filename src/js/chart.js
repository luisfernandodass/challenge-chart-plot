// Below we have a way to get the operation system from user
let os;
if (navigator.appVersion.indexOf("Win")!=-1) os = "windows";
if (navigator.appVersion.indexOf("Mac")!=-1) os = "mac";
if (navigator.appVersion.indexOf("X11")!=-1) os = "linux";

// Below we have a way to get the browser from user
let browser = navigator.appCodeName;

let now = new Date();
let timestamp = now.getTime();

function maxResponseTime() { 
    var b = now.getSeconds() + 10;
    return b.toString();  
}

function minResponseTime() {
    var b = now.getSeconds();
    return b.toString(); 
}

// This function generate the chart and the data in console (main function in our app)
function generateChart() {

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

  // Below we put the data in console
  function consoleInputData(jsonObj) {
    const fromJson = jsonObj['events'];

    const console = document.getElementById('console');
    const section = document.createElement('section');
    const typeSpan = document.createElement('p');
    const typeData = document.createElement('p');
    const typeStop = document.createElement('p');

    typeSpan.textContent =
    ' type: ' + fromJson[1].type + ',' + // we're getting the type 'span' from Json
    ' timestamp: ' + timestamp + ',' +
    ' begin: ' + timestamp + ',' +
    ' end:' + 1819862460000;

    for (var i = 0; i < fromJson.length; i++) {
     
      typeData.textContent = 
        ' type: ' + fromJson[2].type + ',' + // we're getting the type 'data' from Json
        ' timestamp: ' + timestamp + ',' +
        ' os: ' + os + ',' +
        ' browser: ' + browser + ',' +
        ' min_response_time: ' + minResponseTime() + 
        ' max_response_time: ' + maxResponseTime();
    }  
    
    typeStop.textContent =
    ' type: ' + fromJson[10].type + ',' + // we're getting the type 'stop' from Json
    ' timestamp: ' + timestamp ;

    section.appendChild(typeSpan);  
    section.appendChild(typeData);
    section.appendChild(typeStop);
  
    console.appendChild(section); 
  }

  // Below we have the chart (the only thing that I don't need to refactor)
  const context = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(context, {
    type: 'line',
    data: {

      labels: [ minResponseTime(),  maxResponseTime()],
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
          data: [48, 75],
          backgroundColor: "#008B45",
          borderColor: "#008B45",
          fill: false,
          lineTension: 0,
          radius: 5
        },
        {
          label: 'Mac Chrome Min Response Time ',
          data: [20, 8],
          backgroundColor: "#8968CD",
          borderColor: "#8968CD",
          fill: false,
          lineTension: 0,
          radius: 5,
        },
        {
          label: 'Mac Chrome Max Response Time ',
          data: [74, 65],
          backgroundColor: "#551A8B",
          borderColor: "#551A8B",
          fill: false,
          lineTension: 0,
          radius: 5
        },
        {
          label: 'Linux Firefox Min Response Time',
          data: [2, 12],
          backgroundColor: "#87CEFA",
          borderColor: "#87CEFA",
          fill: false,
          lineTension: 0,
          radius: 5
        },
        {
          label: 'Linux Firefox Max Response Time',
          data: [76, 50],
          backgroundColor: "#104E8B",
          borderColor: "#104E8B",
          fill: false,
          lineTension: 0,
          radius: 5
        },
        {
          label: 'Mac Firefox Min Response Time',
          data: [18, 30],
          backgroundColor: "#FFD700",
          borderColor: "#FFD700",
          fill: false,
          lineTension: 0,
          radius: 5
        },
        {
          label: 'Mac Firefox Max Response Time',
          data: [74, 80],
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

const buttonGenerateChart = document.getElementById('buttonGenerateChart');
buttonGenerateChart.addEventListener('click', generateChart);