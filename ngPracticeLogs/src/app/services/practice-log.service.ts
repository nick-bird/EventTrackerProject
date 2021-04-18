import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError} from 'rxjs';
import { catchError} from 'rxjs/operators';

import { PracticeLog } from '../models/practice-log';

@Injectable({
  providedIn: 'root'
})
export class PracticeLogService {

private baseUrl  = 'http://localhost:8084/';
private url = this.baseUrl + 'api/logs';


  constructor(
private http: HttpClient,

  ) { }

  index(): Observable<PracticeLog[]> {
    return this.http.get<PracticeLog[]>(this.url)
    .pipe(
      catchError((err:any) => {
         console.log(err);
         return throwError('Error getting logs');
      })
     );
 }

 create(newLog: PracticeLog) {

  return this.http.post<PracticeLog>(this.url, newLog).pipe(
    catchError((err: any) => {
      console.log(err);
      return throwError('Error creating log');
    })
  );
}
update(editedLog: PracticeLog) {
  console.log(editedLog);

  return this.http.put<PracticeLog>(this.url + '/' + editedLog.id, editedLog).pipe(
    catchError((err: any) => {
      console.log(err);
      return throwError('Error updating log in service');
    })
  );
}
destroy(id: number) {

  return this.http.delete<PracticeLog>(this.url + '/' + id).pipe(
    catchError((err: any) => {
      console.log(err);
      return throwError('Error deleting log in service');
    })
  );
}


}
