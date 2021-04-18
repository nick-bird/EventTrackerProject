import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PracticeLog } from 'src/app/models/practice-log';
import { PracticeLogService } from 'src/app/services/practice-log.service';

@Component({
  selector: 'app-practice-log-list',
  templateUrl: './practice-log-list.component.html',
  styleUrls: ['./practice-log-list.component.css']
})
export class PracticeLogListComponent implements OnInit {


  logs: PracticeLog[] = [];
  totalMinutes: number;
  selected: PracticeLog = null;
  newLog: PracticeLog = new PracticeLog();
  editLog: PracticeLog = null;

  constructor(
    private practiceLogService: PracticeLogService,
    private date: DatePipe
  ) { }

  ngOnInit(): void {
  this.loadLogs();
  }

loadLogs(): void{
  this.practiceLogService.index().subscribe(
    logs => {
      this.logs = logs;
    },
    fail => {
      console.error('PracticeLogComponent.loadingLogs() failed:');
      console.error(fail);


    }
  )
}

geTimePlayed(){
 let total = 0;

 let hours = 0;
 for(let i = 0; i < this.logs.length; i++){
    total += this.logs[i].timePlayed;
  }
  hours = total / 60;
  total = total % 60;
  hours = Math.trunc(hours);
  return "Total time played: " + hours + " hours and " + total + " minutes" ;
}

reload() {
  this.practiceLogService.index().subscribe(
    data => {
      this.logs = data;
    },
    err => {
      console.log('Error loading logs: ' + err);
    }
  );
}


displayLog(log: PracticeLog): void {
  this.selected = log;
}
displayTable(): void {
  this.selected = null;
}

addLog(): void {
  console.log(this.newLog);
  this.practiceLogService.create(this.newLog).subscribe(
    data => {
      this.reload();
    },
    err => {
      console.log('Error creating log: ' + err)
    }
  );
  this.newLog = new PracticeLog();
}
setEditLog(): void {
  this.editLog = Object.assign({}, this.selected);
}


updateLog(editedLog: PracticeLog): void {
  this.practiceLogService.update(editedLog).subscribe(
    data => {
      this.reload();
        this.selected = editedLog;

       this.editLog = null;
    },
    err => {
      console.log('Error updating log: ' + err);
    }
  );
  // this.todos = this.todoService.index();
}
deleteLog(id: number): void {
  // if (confirm('You sure about this?')) {
    // this.todos = this.todoService.index();
    // }
    this.practiceLogService.destroy(id).subscribe(
      data =>{
        this.reload();
      },
      err => {
        console.log('Error deleting log: ' + err);
      }
    );
}
}
