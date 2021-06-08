// This function generate the chart and the data in console (main function in our app)
function generateChart() {

  const requestURL = '/src/js/data.json'; // This is getting the json
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
    const typeStart = document.createElement('p');
    const typeSpam = document.createElement('p');
    const typeStop = document.createElement('p');

    typeStart.textContent =
      ' type: ' + fromJson[0].type +  ',' +
      ' timestamp: ' + fromJson[0].timestamp +  ',' +
      ' select: ' + fromJson[0].select +  ',' +
      ' group: ' + fromJson[0].group;

    typeSpam.textContent =
      ' type: ' + fromJson[1].type +  ',' +
      ' timestamp:  ' + fromJson[1].timestamp +  ',' +
      ' begin: ' + fromJson[1].begin +  ',' +
      ' end: ' + fromJson[1].end;

    section.appendChild(typeStart);
    section.appendChild(typeSpam);

    // here we're getting only the type 'data' from Json
    for (var i = 2; i < fromJson.length - 1; i++) { // "we're using -1" for don't get the "type:stop"

      const typeData = document.createElement('p');

      typeData.textContent =
        ' type: ' + fromJson[i].type + ',' + 
        ' timestamp: ' + fromJson[i].timestamp + ',' +
        ' os: ' + fromJson[i].os + ',' +
        ' browser: ' + fromJson[i].browser + ',' +
        ' min_response_time: ' + fromJson[i].min_response_time + ',' +
        ' max_response_time: ' + fromJson[i].max_response_time;

      section.appendChild(typeData);
    }

    typeStop.textContent =
      ' type: ' + fromJson[10].type + ',' +
      ' timestamp: ' + fromJson[10].timestamp;

    section.appendChild(typeStop);

    console.appendChild(section);
  }

  // Below we have the chart (the only thing that I don't need to refactor)
  const context = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(context, {
    type: 'line',
    data: {

      labels: ['00:00', '00:01'],
      datasets: [
        {
          label: 'Linux Chrome Min Response Time',
          data: [0, 1],
          backgroundColor: "#7CCD7C",
          borderColor: "#7CCD7C",
          fill: false,
          lineTension: 0,
          radius: 5,
        },
        {
          label: 'Linux Chrome Max Response Time',
          data: [1, 3],
          backgroundColor: "#008B45",
          borderColor: "#008B45",
          fill: false,
          lineTension: 0,
          radius: 5
        },
        {
          label: 'Mac Chrome Min Response Time ',
          data: [0, 2],
          backgroundColor: "#8968CD",
          borderColor: "#8968CD",
          fill: false,
          lineTension: 0,
          radius: 5,
        },
        {
          label: 'Mac Chrome Max Response Time ',
          data: [1, 2],
          backgroundColor: "#551A8B",
          borderColor: "#551A8B",
          fill: false,
          lineTension: 0,
          radius: 5
        },
        {
          label: 'Linux Firefox Min Response Time',
          data: [0, 3],
          backgroundColor: "#87CEFA",
          borderColor: "#87CEFA",
          fill: false,
          lineTension: 0,
          radius: 5
        },
        {
          label: 'Linux Firefox Max Response Time',
          data: [1, 4],
          backgroundColor: "#104E8B",
          borderColor: "#104E8B",
          fill: false,
          lineTension: 0,
          radius: 5
        },
        {
          label: 'Mac Firefox Min Response Time',
          data: [0, 3],
          backgroundColor: "#FFD700",
          borderColor: "#FFD700",
          fill: false,
          lineTension: 0,
          radius: 5
        },
        {
          label: 'Mac Firefox Max Response Time',
          data: [1, 2],
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
            color: "#3f4a60"
          }
        }
      },
    }
  });
}

const buttonGenerateChart = document.getElementById('buttonGenerateChart');
buttonGenerateChart.addEventListener('click', generateChart);