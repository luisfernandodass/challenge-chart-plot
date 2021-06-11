require.config({ paths: { 'vs': 'https://unpkg.com/monaco-editor@latest/min/vs' }});

require(['vs/editor/editor.main'], function() {

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
    function getEventType(){
      let codeFromUser = editor.getValue(); // Return the text in the code editor
     
      console.log(codeFromUser.slice(7, 11));
      let event = codeFromUser.slice(7, 11);
 
      return event;    
    }

    function getBegin(){   
      let codeFromUser = editor.getValue(); // Return the text in the code editor
      // array.push(jsonCode);
      let begin = codeFromUser.substr(25, 13);
      console.log( codeFromUser.substr(25, 13));

      return begin;    
    }

    function getEnd(){     
      let codeFromUser = editor.getValue(); // Return the text in the code editor
      // array.push(jsonCode);    
      let end = codeFromUser.substr(67, 13);
      console.log(codeFromUser.substr(67, 13));

      return end;    
     }

    function getOs(){
      let codeFromUser = editor.getValue(); // Return the text in the code editor
      // array.push(jsonCode);    
      let os = codeFromUser.substr(129, 5);
      console.log(codeFromUser.substr(129, 5));

      return os;
    }

    function getBrowser(){
      let codeFromUser = editor.getValue(); // Return the text in the code editor
      // array.push(jsonCode);    
      let browser = codeFromUser.substr(147, 6);
      console.log(codeFromUser.substr(147, 6));

      return browser;
    }

    function getMinTime(){
      let codeFromUser = editor.getValue(); // Return the text in the code editor
      // array.push(jsonCode);    
      let minTime = codeFromUser.substr(175, 3);
      console.log(codeFromUser.substr(175, 3));

      return minTime;
    }

    function getMaxTime(){
      let codeFromUser = editor.getValue(); // Return the text in the code editor
      // array.push(jsonCode);    
      let maxTime = codeFromUser.substr(199, 3);
      console.log(codeFromUser.substr(199, 3));

      return maxTime;
    }

//{type:'span', timestamp: 1519780251293, begin: 1519780251293, end: 1519780260201}
//{type: 'data', timestamp: 1519780251000, os: 'linux', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.3}

const buttonGenerateChart = document.getElementById('buttonGenerateChart');
buttonGenerateChart.addEventListener('click', generateChart);

});