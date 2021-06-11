require.config({ paths: { 'vs': 'https://unpkg.com/monaco-editor@latest/min/vs' }});

require(['vs/editor/editor.main'], function() {

    // JSON object we want to edit
           
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

    function generateChart() {    
      const context = document.getElementById('myChart').getContext('2d');
      const myChart = new Chart(context, {
        type: 'line',
        data: {
    
          labels: ['00:00', '00:01'],
          datasets: [
            {
              label: getType(),
              data: [begin(), end()],
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
/*
    function getJSONData() {
      var codeFromUser = editor.getValue(); //Return the text in the code editor
      var arrayOfEvents = codeFromUser.split("\n"); //Split the content of textarea by line
      for (i = 0; i < arrayOfEvents.length; i++) { //Transform each line in a JSON Object
        arrayOfEvents[i] = JSON.parse(arrayOfEvents[i]);
      }
      return arrayOfEvents;
    }
*/
    function getType(){
      let codeFromUser = editor.getValue();
      console.log(codeFromUser.slice(7, 11));
      let array = codeFromUser.slice(7, 11);
 
      return array;    
    }

    function begin(){   
      let codeFromUser = editor.getValue();
     // array.push(jsonCode);
     console.log(codeFromUser.slice(31, 32));
     let array = codeFromUser.slice(31, 32);

     return array;    
    }

    function end(){     
      let codeFromUser = editor.getValue();
      // array.push(jsonCode);    // {type:'span',timestamp:0,begin:0,end:0}
      console.log(codeFromUser.slice(37, 38));
      let array = codeFromUser.slice(37, 38);
      
      return array;    
     }
  
const buttonGenerateChart = document.getElementById('buttonGenerateChart');
buttonGenerateChart.addEventListener('click', generateChart);
});