// import { Injectable } from '@angular/core';
// import {  } from '../modules/interfaces';
// import { paymentTypes } from '../modules/enums';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class DataService {
// private baseUrl='http://127.0.0.1:8080'
//   constructor(private http:HttpClient) { }
  
//   // addJob(newJob:Job):boolean{
//    getAll():Observable<Array<Job>>{
//     return this.http.get<Array<Job>>(`${this.baseUrl}/jobs/all`)
//    }
//     //  change
//    getJobByNumber(jobNumber:number):Observable<Job>{
    
//  return this.http.get<Job>(`${this.baseUrl}/jobs/job/${jobNumber}`)
//    }
//   //  change
//    addJob(newJob:Job):Observable<Job>{
//     return this.http.post<Job>(`${this.baseUrl}/jobs/create`,
//       newJob,{
//        headers:{'content-type':'application/json'} 
//       }
//     )
//    }
// }
