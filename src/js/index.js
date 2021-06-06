const buttonGenerateChart = document.getElementById('buttonGenerateChart');

/*function time() {
  let today = new Date();
  let beginTime = today.getTime();

  console.log(beginTime);
}*/ 

const console = document.getElementById('console');

const requestURL = 'src/js/data.json';
const request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
  const superHeroes = request.response;
  populateHeader(superHeroes);
  
}

function populateHeader(jsonObj) {

  const myPara = document.createElement('p');
  myPara.textContent = 
  ' type: ' + jsonObj['type'] + ',' +
  ' timestamp: ' + jsonObj['timestamp'] + ',' +
  ' os: ' + jsonObj['os'] + ',' +
  ' browser: ' + jsonObj['browser'] + ',' +
  ' min_response_time: ' + jsonObj['min_response_time'] + ',' +
  ' max_response_time: ' + jsonObj['max_response_time'];

  console.appendChild(myPara);
}


function generateChart() {
  const context = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(context, {
    type: 'line',
    data: {

      labels: ['00:00', '00:00'],
      datasets: [
        {
          label: 'Linux Chrome Min Response Time',
          data: [2, 10],
          backgroundColor: "#7CCD7C",
          borderColor: "#7CCD7C",
          fill: false,
          lineTension: 0,
          radius: 5
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
          radius: 5
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
          radius: 5
        }
      ]
    },

    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        legend: {
          display: true,
          align: 'start',
          position: 'right',
          // onClick: clickLegend,

          labels: {
            boxWidth: 8,
            boxHeight: 8,
            usePointStyle: true,
            textAlign: 'left',
            padding: 12
          }
        }
      },
    }
  });
}

buttonGenerateChart.addEventListener('click', generateChart);
// buttonGenerateChart.addEventListener('click', time);

/* this can be good in the future

  const defaultLegendClickHandler = Chart.defaults.plugins.legend.onClick;
  function clickLegend (e, legendItem, legend) {
    var index = legendItem.datasetIndex;

    if (index > 1) {
        // Do the original logic
        defaultLegendClickHandler(e, legendItem, legend);
    } else {
        let ci = legend.chart;
        [
            ci.getDatasetMeta(0),
            ci.getDatasetMeta(1),
            ci.getDatasetMeta(2),
            ci.getDatasetMeta(3),
            ci.getDatasetMeta(4),
            ci.getDatasetMeta(5),
            ci.getDatasetMeta(6),
            ci.getDatasetMeta(7)

        ].forEach(function(meta) {
            meta.hidden  === null ? !ci.data.datasets.hidden : null;
        });
        ci.update();
    }
};
*/