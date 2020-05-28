
import { Component, OnInit, Input } from '@angular/core';
import { TransactionService } from '../service/transaction.service';
import { Observable } from "rxjs";
import { Router, ActivatedRoute } from '@angular/router';
import { CardDetails } from 'src/carddetails';
import { ResponseVO } from 'src/responseVO';
import { CreateTransactionComponent } from '../create-transaction/create-transaction.component';
@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css']
})

export class TransactionDetailsComponent implements OnInit {
  responseVO: ResponseVO;
  invoice: string;
  authCode: string;
  status: string;
  token: string;
  cardNumber: string;
  email: string;
  cardDetails: CardDetails = new CardDetails();



  //private data = {}; 
  private Data = {};
  constructor(private route: ActivatedRoute, private router: Router,
    private transactionService: TransactionService, private tras: CreateTransactionComponent) { }

  ngOnInit(): void {
     this.invoice = (this.route.snapshot.queryParamMap.get("INVOICE_ID") !== null ? this.route.snapshot.queryParamMap.get("INVOICE_ID") : this.route.snapshot.queryParamMap.get("transactionId"));
     this.authCode = (this.route.snapshot.queryParamMap.get("AUTH_CODE") !== null ? this.route.snapshot.queryParamMap.get("AUTH_CODE") : this.route.snapshot.queryParamMap.get("authCode"));
     this.status = (this.route.snapshot.queryParamMap.get("Result") !== null ? this.route.snapshot.queryParamMap.get("Result") : this.route.snapshot.queryParamMap.get("status"));
    this.token = this.route.snapshot.queryParamMap.get("PAYMENT_TOKEN");


    if (this.route.snapshot.queryParamMap.get("PAYMENT_TOKEN")){ 
    //if (this.route.snapshot.queryParamMap.get("INVOICE_ID") !== null || this.route.snapshot.queryParamMap.get("PAYMENT_TOKEN")) {
      
      this.cardDetails.token=this.route.snapshot.queryParamMap.get("PAYMENT_TOKEN");
      this.cardDetails.amount="1.00";

      this.transactionService.createTransaction(this.cardDetails)
      .subscribe(responseVO => {
        this.loadDeatails(responseVO)
  }, 
  (error) => {
    console.log("err", error);   
  });
    

      // this.cardDetails.token = (this.route.snapshot.queryParamMap.get("INVOICE_ID"))
      // this.cardDetails.cardNumber = (this.route.snapshot.queryParamMap.get("PAYMENT_ACCOUNT"))
      // this.cardDetails.email = (this.route.snapshot.queryParamMap.get("CARD_TYPE"));
      // this.transactionService.saveCustomerInfo(this.cardDetails)
      //   .subscribe(responseVO => {
      //   },
      //     (error) => {
      //       console.log("err", error);
      //     });

    }
  }
  goToHomePage() {
    this.router.navigate(['']);
  }

   loadDeatails(responseVO) {
    this.invoice = (this.route.snapshot.queryParamMap.get("INVOICE_ID") !== null ? this.route.snapshot.queryParamMap.get("INVOICE_ID") : this.route.snapshot.queryParamMap.get("transactionId"));
    this.authCode = (this.route.snapshot.queryParamMap.get("AUTH_CODE") !== null ? this.route.snapshot.queryParamMap.get("AUTH_CODE") : this.route.snapshot.queryParamMap.get("authCode"));
    this.status = (this.route.snapshot.queryParamMap.get("Result") !== null ? this.route.snapshot.queryParamMap.get("Result") : this.route.snapshot.queryParamMap.get("status"));

    this.cardDetails.token = this.cardDetails.token//(this.route.snapshot.queryParamMap.get("INVOICE_ID"))
    this.cardDetails.cardNumber = responseVO.maskedCardNumber//(this.route.snapshot.queryParamMap.get("PAYMENT_ACCOUNT"))
    this.cardDetails.email =responseVO.cardType// (this.route.snapshot.queryParamMap.get("CARD_TYPE"));
    this.transactionService.saveCustomerInfo(this.cardDetails)
      .subscribe(responseVO => {
        this.router.navigate(['/transaction-details'], { queryParams: responseVO });
      },
        (error) => {
          console.log("err", error);
        });

  }
}
