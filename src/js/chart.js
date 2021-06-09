require.config({ paths: { 'vs': 'https://unpkg.com/monaco-editor@latest/min/vs' }});

require(['vs/editor/editor.main'], function() {

    // JSON object we want to edit
    let jsonCode = 
       
    {type: 'span', timestamp: 0, begin: 0, end: 0}
       
    const modelUri = monaco.Uri.parse("json://grid/settings.json");
    const jsonModel = monaco.editor.createModel(JSON.stringify(jsonCode), "json", modelUri);

    const editor = monaco.editor.create(document.getElementById('console'), {
      model: jsonModel,  
      theme: "vs-dark",       
      readOnly: false,
     
      automaticLayout: true,
      minimap: {
        enabled: false
      }
    });

   
  // const codeFromUser = editor.getValue();
  // let code = JSON.parse(jsonCode);
  function generateChart() {
    
    var b = editor.getValue();
    b = jsonCode.begin;
    console.log(b);

  const context = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(context, {
    type: 'line',
    data: {

      labels: ['00:00', '00:01'],
      datasets: [
        {
          label: 'Linux Chrome Min Response Time',
          data: [b, jsonCode.end],
          backgroundColor: "#7CCD7C",
          borderColor: "#7CCD7C",
          fill: false,
          lineTension: 0,
          radius: 5,
        },
        {
          label: 'Linux Chrome Max Response Time',
          data: [jsonCode.begin, jsonCode.end],
          backgroundColor: "#008B45",
          borderColor: "#008B45",
          fill: false,
          lineTension: 0,
          radius: 5
        },
        {
          label: 'Mac Chrome Min Response Time ',
          data: [jsonCode.begin, jsonCode.end],
          backgroundColor: "#8968CD",
          borderColor: "#8968CD",
          fill: false,
          lineTension: 0,
          radius: 5,
        },
        {
          label: 'Mac Chrome Max Response Time ',
          data: [jsonCode.begin, jsonCode.end],
          backgroundColor: "#551A8B",
          borderColor: "#551A8B",
          fill: false,
          lineTension: 0,
          radius: 5
        },
        {
          label: 'Linux Firefox Min Response Time',
          data: [jsonCode.begin, jsonCode.end],
          backgroundColor: "#87CEFA",
          borderColor: "#87CEFA",
          fill: false,
          lineTension: 0,
          radius: 5
        },
        {
          label: 'Linux Firefox Max Response Time',
          data: [jsonCode.begin, jsonCode.end],
          backgroundColor: "#104E8B",
          borderColor: "#104E8B",
          fill: false,
          lineTension: 0,
          radius: 5
        },
        {
          label: 'Mac Firefox Min Response Time',
          data: [jsonCode.begin, jsonCode.end],
          backgroundColor: "#FFD700",
          borderColor: "#FFD700",
          fill: false,
          lineTension: 0,
          radius: 5
        },
        {
          label: 'Mac Firefox Max Response Time',
          data: [jsonCode.begin, jsonCode.end],
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
  

  
 
  var b = editor.getValue();
  
  console.log(b)
}

const buttonGenerateChart = document.getElementById('buttonGenerateChart');
buttonGenerateChart.addEventListener('click', generateChart);

});