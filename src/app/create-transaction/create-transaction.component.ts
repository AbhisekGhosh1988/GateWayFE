import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../service/transaction.service';
import { Router,RouterModule,NavigationExtras } from '@angular/router';
import { CardDetails } from 'src/carddetails';
import{BluePay} from 'src/assets/bluepay.js'
import { ResponseVO } from 'src/responseVO';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { FormControl } from '@angular/forms';  
@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.css']
})
export class CreateTransactionComponent implements OnInit {
  email = new FormControl('');  
  cardDetails: CardDetails = new CardDetails();
  cardDetailsarr: CardDetails[];
  abc:string;
  responseVO:ResponseVO;
  submitted = false;
  constructor(private transactionService:TransactionService,private router:Router,private http: HttpClient) { }

  ngOnInit(){
    this.transactionService.getCardDetails()
    .subscribe(cardDetailsarr => {
      cardDetailsarr;
      this.loadCardInfo(cardDetailsarr)
}, 
(error) => {
  console.log("err", error);   
});

  }
  save() {
    this.transactionService.createTransaction(this.cardDetails)
      .subscribe(responseVO => {
        this.loadDeatails(responseVO)
  }, 
  (error) => {
    console.log("err", error);   
  });
    
  }
  onSubmit() {
    this.save(); 
     
  }

  loadDeatails(responseVO){
    this.router.navigate(['/transaction-details'],  {queryParams: responseVO}); 
  }
  loadCardInfo(cardDetailsarr){
    this.cardDetailsarr=cardDetailsarr; 
  }


}
