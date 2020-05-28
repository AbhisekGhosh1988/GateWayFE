import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Router,RouterModule } from '@angular/router';
@Component({
  selector: 'app-save-card-details',
  templateUrl: './save-card-details.component.html',
  styleUrls: ['./save-card-details.component.css']
})
export class SaveCardDetailsComponent implements OnInit {

  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
  }

 
  


}
