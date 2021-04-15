window.addEventListener('load', function (evt) {
  console.log('script.js loaded');
  init();
});
function init() {
  loadLogs();
  document.newLogForm.addLog.addEventListener('click', createLog);
}
function createLog(evt) {
  evt.preventDefault();
  console.log('Creating log');
  let form = document.newLogForm;
  let log = {
    materials: form.materials.value,
    notes: form.notes.value,
    timePlayed: form.timePlayed.value
  };
  postLog(log);
  form.reset();
}
function postLog(log) {
  console.log('Posting log');
  console.log(log);
  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'api/logs');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 201 || xhr.status === 200) {
     console.log(log);
     loadLogs();
      } else {
        displayError('Error creating log: ' + xhr.status);
      }
    }
  };
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(JSON.stringify(log));
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
function detailView(e){
e.preventDefault();
let form = document.newLogForm;
form.textContent = '';
let tablediv = document.getElementById('logTable');
tablediv.textContent = '';
let div = document.getElementById('logDetails');
let updateForm = document.getElementById('updateForm');
updateForm.materials.value = e.currentTarget.children[0].textContent;
updateForm.notes.value =   e.currentTarget.children[1].textContent;
updateForm.timePlayed.value =  e.currentTarget.children[2].textContent;
div.appendChild(updateForm);
let updateB = document.getElementById('updateLog');
let delB= document.getElementById('deleteLog');
updateB.value = e.currentTarget.id.value;
delB.value = e.currentTarget.id.value;
updateB.addEventListener('click', e => {
e.preventDefault();
let log = {
materials: updateForm.materials.value,
notes: updateForm.notes.value,
timePlayed: updateForm.timePlayed.value
}
let id = e.value;
updateLog(log, id);
});
delB.addEventListener('click', e => {
e.preventDefault();
let id = e.value;
deleteLog(id);
})
}
function deleteLog(id){
let xhr = new XMLHttpRequest();
xhr.open('DELETE', `api/logs/${id}`);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    if (xhr.status === 204 || xhr.status === 200) {
   loadLogs();
    } else {
      displayError('Error deleting log: ' + xhr.status);
    }
  }
};
xhr.send();
}
function updateLog(log, id){
console.log(log);
let xhr = new XMLHttpRequest();
xhr.open('PUT', (`api/logs/` + id ));
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    if (xhr.status === 201 || xhr.status === 200) {
   console.log(log);
   loadLogs();
    } else {
      displayError('Error updating log: ' + xhr.status);
    }
  }
};
xhr.setRequestHeader("Content-type", "application/json");
xhr.send(JSON.stringify(log));
}
function displayLogs(logs) {
  let div = document.getElementById('logTable');
  div.textContent = '';
  // TODO: Make a beatiful table
  // TODO: Add click event for the trs to get log by id,
  //       and display details and image etc in logDetails div.
  let table = document.createElement('table');
  let thead = document.createElement('thead');
  let theadtr = document.createElement('tr');
  let th1 = document.createElement('th');
  let th2 = document.createElement('th');
  let th3 = document.createElement('th');
  let th4 = document.createElement('th');
  th1.textContent = "Materials played";
  th2.textContent = "Notes";
  th3.textContent = "Time played (in minutes)";
  th4.textContent = "Entered On"
  let tbody = document.createElement('tbody');
  for (const log of logs) {
      let tr = document.createElement('tr');
      tr.style.border = '1';
      let id = document.createElement('input');
      id.type = 'hidden';
      id.value = log.id;
      let td1 = document.createElement('td');
      td1.textContent = log.materials
      let td2 = document.createElement('td');
      td2.textContent = log.notes;
      let td3 = document.createElement('td');
      td3.textContent = log.timePlayed;
      let td4 = document.createElement('td');
      td4.textContent = log.createdAt;
      tr.appendChild(td1); 
      tr.appendChild(td2);  
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(id);     
      tr.addEventListener('click', detailView);
      tbody.appendChild(tr);
  }
  theadtr.appendChild(th1);
  theadtr.appendChild(th2);
  theadtr.appendChild(th3);
  theadtr.appendChild(th4);
  thead.appendChild(theadtr);
  table.appendChild(thead);
  table.appendChild(tbody);
  div.appendChild(table);
}