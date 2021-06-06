const buttonGenerateChart = document.getElementById('buttonGenerateChart');

/*function time() {
  let today = new Date();
  let beginTime = today.getTime();

  console.log(beginTime);
}*/ 



function generateChart() {
  const console = document.getElementById('console');

const requestURL = 'src/js/data.json';
const request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
  const superHeroes = request.response;
  
  showHeroes(superHeroes);
}

function showHeroes(jsonObj) {
  var heroes = jsonObj['events'];

  for (var i = 0; i < heroes.length; i++) {
    var myArticle = document.createElement('article');
    var p1 = document.createElement('p');
 
    p1.textContent = 
    ' type: ' + heroes[i].type + ',' +
    ' timestamp: ' + heroes[i].timestamp + ',' +
    ' os: ' + heroes[i].os + ',' +
    ' browser: ' + heroes[i].browser + ',' +
    ' min_response_time: ' + heroes[i].min_response_time + ',' +
    ' max_response_time: ' + heroes[i].max_response_time;
 
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
          // onClick: clickLegend,

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
// buttonGenerateChart.addEventListener('click', time);