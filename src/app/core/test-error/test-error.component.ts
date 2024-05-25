import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.scss']
})
export class TestErrorComponent implements OnInit {

  baseUrl :string = environment.baseUrl;
  validationErrors:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }


  get404Error(){
    this.http.get(this.baseUrl + '/produto/986').subscribe(res =>{
      next: (next) =>console.info(next);
      error:(err) =>console.error(err) 
    });
  }
  
  get400Error(){
    this.http.get(this.baseUrl + '/bug/bad-request').subscribe(res =>{
      next: (next) =>console.info(next);
      error:(err) =>console.error(err) 
    });
  }
  
  get500Error(){
    this.http.get(this.baseUrl + '/bug/server-error').subscribe(res =>{
      next: (next) =>console.info(next);
      error:(err) =>console.error(err) 
    });
  }
  
 

  get400ValidationError() {
    this.http.get(this.baseUrl + 'Bug/bad-request/three').subscribe({
      next: (next) => console.info(next),
      error: (err) => this.validationErrors = err.errors
    });
  }


}
