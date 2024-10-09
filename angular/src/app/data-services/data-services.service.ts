
import { Injectable } from '@angular/core';
import { Customer, Expense, Receipt } from '../modules/interfaces';
import { paymentTypes } from '../modules/enums';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class DataService {

    private baseUrl = 'http://localhost:8080'

    constructor(private http: HttpClient) { }

    //customer
    getAllcustomers(): Observable<Array<Customer>> {
        return this.http.get<Array<Customer>>(`${this.baseUrl}/customer/getallcustomers`)
    }
    addcustomer(newcustomer: Customer): Observable<Customer> {
        return this.http.post<Customer>(`${this.baseUrl}/customer/createone`,
            newcustomer, {
            headers: { 'content-type': 'application/json' }
        }
        )
    }
    //expense
    getallexpenses(): Observable<Array<Expense>> {
        return this.http.get<Array<Expense>>(`${this.baseUrl}/expense/getallexpenses`)
    }
    getexpensebyyear(filter: string): Observable<Array<Expense>> {
        return this.http.get<Array<Expense>>(`${this.baseUrl}/expense/getexpensebyyear/${filter}`)
    }
    getexpensebymonth(filter: number): Observable<Array<Expense>> {
        return this.http.get<Array<Expense>>(`${this.baseUrl}/expense/getexpensebymonth/${filter}`)
    }
    getexpencesbetweentwodates(startdate: string, enddate: string): Observable<Array<Expense>> {
        return this.http.get<Array<Expense>>(`${this.baseUrl}/expense/getexpencesbetweentwodates/${startdate}/${enddate}`)
    }
    addexpense(newexpense: Expense){
        console.log('w');
        return this.http.post<Expense>(`${this.baseUrl}/expense/createone`,
            newexpense, {
            headers: { 'content-type': 'application/json' }
        }
        )
     
        
    }
    //receipt
    getallreceipts(): Observable<Array<Receipt>> {
        return this.http.get<Array<Receipt>>(`${this.baseUrl}/receipt/getallrecepits`)
    }
    getreceiptbyyear(filter: string): Observable<Array<Receipt>> {
        return this.http.get<Array<Receipt>>(`${this.baseUrl}/receipt/getrecepitsbyyear/${filter}`)
    }
    getreceiptbymonth(filter: number): Observable<Array<Receipt>> {
        return this.http.get<Array<Receipt>>(`${this.baseUrl}/receipt/getrecepitsbymonth/${filter}`)
    }
    getreceiptsbetweentwodates(startdate: string, enddate: string): Observable<Array<Receipt>> {
        return this.http.get<Array<Receipt>>(`${this.baseUrl}/receipt/getrecepits/${startdate}/${enddate}`)
    }
    getrecepitbycustomer(filter:string): Observable<Array<Receipt>>{
        return this.http.get<Array<Receipt>>(`${this.baseUrl}/receipt/getrecepitbycustomer/${filter}`)

    }
    addreceipt(newreceipt: Receipt): Observable<Receipt> {
        return this.http.post<Receipt>(`${this.baseUrl}/receipt/createone`,
            newreceipt, {
            headers: { 'content-type': 'application/json' }
        }
        )
    }
}
