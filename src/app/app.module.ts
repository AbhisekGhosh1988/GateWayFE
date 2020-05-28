import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { HomeComponent } from './home/home.component';
import { SaveCardDetailsComponent } from './save-card-details/save-card-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'transaction', component: CreateTransactionComponent },
  { path: 'transaction-details', component: TransactionDetailsComponent },
  { path: 'saveCard', component: SaveCardDetailsComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    CreateTransactionComponent,
    TransactionDetailsComponent,
    HomeComponent,
    SaveCardDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: false })
  ],
  exports: [RouterModule],
  providers:[CreateTransactionComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
