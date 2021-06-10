require.config({ paths: { 'vs': 'https://unpkg.com/monaco-editor@latest/min/vs' }});

require(['vs/editor/editor.main'], function() {

    // JSON object we want to edit
    
        
    // {type:'span',timestamp:0,begin:0,end: 0}
       
    // const modelUri = monaco.Uri.parse("json://grid/settings.json");
    // const jsonModel = monaco.editor.createModel(JSON.stringify(jsonCode), "json", modelUri);

    const editor = monaco.editor.create(document.getElementById('console'), {    
      theme: "vs-dark",       
      readOnly: false, 
      automaticLayout: true,
      minimap: {
        enabled: false
      }
    });
    
    function c(){
     
      let jsonCode = editor.getValue();
     
      
       let array = []
    

     array.push(jsonCode);
      console.log(array);
      
      return jsonCode;    
    }
  
  // const codeFromUser = editor.getValue();
  // let code = JSON.parse(jsonCode);
  function generateChart() {
    
  const context = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(context, {
    type: 'line',
    data: {

      labels: ['00:00', '00:01'],
      datasets: [
        {
          label: c(),
          data: [c(), 10],
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

const buttonGenerateChart = document.getElementById('buttonGenerateChart');
buttonGenerateChart.addEventListener('click', generateChart);
});