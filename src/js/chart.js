require.config({ paths: { 'vs': 'https://unpkg.com/monaco-editor@latest/min/vs' } });

require(['vs/editor/editor.main'], function () {

  const editor = monaco.editor.create(document.getElementById('console'), {
    theme: "vs-dark",
    readOnly: false,
    automaticLayout: true,
    minimap: {
      enabled: false
    }
  });

  function generateChart() {
    const context = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(context, {
      type: 'line',
      data: {

        labels: [getBegin(), getEnd()],
        datasets: [
          {
            label: getOs() + ' ' + getBrowser(),
            data: [getMinTime(), getMaxTime()],
            backgroundColor: "#7CCD7C",
            borderColor: "#7CCD7C",
            fill: false,
            lineTension: 0,
            radius: 5,
          }]
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
 
  function getTextFromUser() {
    let codeFromUser = editor.getValue(); // Return the text in the code editor
    return codeFromUser;
  }

  /*
  function getEventType() {
    let event = getTextFromUser().slice(7, 11);
    return event;
  }
  */
 
  function getBegin() {
    let begin = getTextFromUser().substr(25, 14);
    return begin;
  }

  function getEnd() {
    let end = getTextFromUser().substr(67, 14);
    return end;
  }

  function getOs() {
    let os = getTextFromUser().substr(130, 5);
    return os;
  }

  function getBrowser() {
    let browser = getTextFromUser().substr(148, 6);
    return browser;
  }

  function getMinTime() {
    let minTime = getTextFromUser().substr(175, 3);
    return minTime;
  }

  function getMaxTime() {
    let maxTime = getTextFromUser().substr(199, 3);
    return maxTime;
  }

  //{type:'span', timestamp: 1519780251293, begin: 1519780251293, end: 1519780260201}
  //{type: 'data', timestamp: 1519780251000, os: 'linux', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.3}

  const buttonGenerateChart = document.getElementById('buttonGenerateChart');
  buttonGenerateChart.addEventListener('click', generateChart);
});