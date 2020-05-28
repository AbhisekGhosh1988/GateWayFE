import { Component, OnInit } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  handleWelcomeWithPathVariable(){
    window.location.href = 'https://secure.bluepay.com/interfaces/shpf?SHPF_FORM_ID=mobilecap01&SHPF_ACCOUNT_ID=100879920079&SHPF_TPS_DEF=SHPF%5FFORM%5FID%20SHPF%5FACCOUNT%5FID%20DBA%20TAMPER%5FPROOF%5FSEAL%20AMEX%5FIMAGE%20DISCOVER%5FIMAGE%20TPS%5FDEF%20TPS%5FHASH%5FTYPE%20SHPF%5FTPS%5FDEF%20CUSTOM%5FHTML%20SHPF%5FTPS%5FHASH%5FTYPE%20CAPTCHA%5FREQUIRED&SHPF_TPS_HASH_TYPE=HMAC%5FSHA512&SHPF_TPS=a6c8eb6b2aa2567b40fdb1e73897a2c0b3a2549a063d8fb8c08171d0f64d4a340148ba7ef6595ab091276de0485dc2c564fe37f1d887fc36368dbb6258c0c617&MODE=TEST&TRANSACTION_TYPE=AUTH&DBA=DEMO%2Dcognizant&AMOUNT=1&TAMPER_PROOF_SEAL=bc96f6c72de60e4a537485453653a0109095174549540945187e407d9ed59e5de7a704247fd8210165f3c2cfd4498fa36a42b5060cdd621c0a3c8ec88beba710&CUSTOM_ID=&CUSTOM_ID2=&REBILLING=0&REB_CYCLES=&REB_AMOUNT=&REB_EXPR=&REB_FIRST_DATE=&AMEX_IMAGE=amex%2Egif&DISCOVER_IMAGE=discvr%2Egif&REDIRECT_URL=http%3A%2F%2Flocalhost%3A4200%2Ftransaction%2Ddetails&TPS_DEF=MERCHANT%20APPROVED%5FURL%20DECLINED%5FURL%20MISSING%5FURL%20MODE%20TRANSACTION%5FTYPE%20TPS%5FDEF%20TPS%5FHASH%5FTYPE%20CAPTCHA%5FREQUIRED&TPS_HASH_TYPE=HMAC%5FSHA512&CUSTOM_HTML=&CARD_TYPES=vi%2Dmc%2Ddi%2Dam&CAPTCHA_REQUIRED=1';
   // this.router.navigate(['/transaction']); 
  }
  handlelocalForm(){
  window.location.href = 'http://127.0.0.1:8887/CCAuthorization.html'
  }
  createTransaction(){
    this.router.navigate(['/transaction']);
  }
}
