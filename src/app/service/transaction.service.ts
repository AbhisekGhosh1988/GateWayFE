import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Router,RouterModule } from '@angular/router';
import { ResponseVO } from 'src/responseVO';
import { CardDetails } from 'src/carddetails';
@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  responseVo:ResponseVO
  cardDetails:CardDetails 
  private data = {}; 
  constructor(private http: HttpClient,private router: Router) { }
  private baseUrl = 'http://127.0.0.1:8080/payment/chargeCustomerWithToken/v1.0';
  private custUrl = 'http://127.0.0.1:8080/payment/saveCustomerData/v1.0';
  private cardDetailURL = 'http://127.0.0.1:8080/payment/getCustomerData/v1.0';
  createTransaction(employee: Object): Observable<Object> {
    return this.http.post<ResponseVO>(`${this.baseUrl}`, employee);
  }
  
  saveCustomerInfo(employee: Object): Observable<Object> {
    return this.http.post<ResponseVO>(`${this.custUrl}`, employee);
  }

  getCardDetails(): Observable<Object> {
    return this.http.get<CardDetails[]>(`${this.cardDetailURL}`);
  }

}
