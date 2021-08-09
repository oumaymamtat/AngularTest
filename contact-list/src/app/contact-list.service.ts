import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactListService {
  readonly APIURL = "https://randomuser.me/api/";


  constructor(private http:HttpClient) {

  }

  getContact(nb):Observable<any[]>{
    return this.http.get<any>(this.APIURL+"?results="+nb);
  }

}
