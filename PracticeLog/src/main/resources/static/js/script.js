window.addEventListener('load', function (evt) {
    console.log('script.js loaded');
    init();
});

function init() {
    loadLogs();
}

function loadLogs() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'api/logs');
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
          if (xhr.status === 200) {
              let logs = JSON.parse(xhr.responseText);
              displayLogs(logs);
          }
          else {
              displayError('Error retrieving logs: ' + xhr.status);
          }
      }  
    };
    xhr.send();
}
function displayError(msg) {
    let div = document.getElementById('errors');
    let h1 = document.createElement('h3');
    h1.textContent = msg;
    div.appendChild(h1);
}

function displayLogs(logs) {
    let div = document.getElementById('logTable');
    // TODO: Make a beatiful table

    // TODO: Add click event for the trs to get log by id,
    //       and display details and image etc in logDetails div.
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let theadtr = document.createElement('tr');
    let th1 = document.createElement('th');
    let th2 = document.createElement('th');
    let th3 = document.createElement('th');
    th1.textContent = "Materials played";
    th2.textContent = "Notes";
    th3.textContent = "Time played (in minutes)";
    let tbody = document.createElement('tbody');
  
  
    for (const log of logs) {
        
        let tr = document.createElement('tr');
        
        let td1 = document.createElement('td');
        td1.textContent = log.materials

        let td2 = document.createElement('td');
        td2.textContent = log.notes;
        
        let td3 = document.createElement('td');
        td3.textContent = log.timePlayed;

         tr.appendChild(td1); 
         tr.appendChild(td2);  
         tr.appendChild(td3);      

        tbody.appendChild(tr);
      
        
    }
    theadtr.appendChild(th1);
    theadtr.appendChild(th2);
    theadtr.appendChild(th3);
    thead.appendChild(theadtr);
    table.appendChild(thead);
    table.appendChild(tbody);
    div.appendChild(table);
}