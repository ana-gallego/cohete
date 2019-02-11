import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ControlService {

  constructor(private http: HttpClient) { }

  get(){
    return this.http.get('http://127.0.0.1:3000');
  }
  getPlaneta(planeta:string){
    return this.http.get('http://127.0.0.1:3000/planetas');
  }
}
