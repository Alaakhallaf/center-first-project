import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private readonly _HttpClient= inject(HttpClient)
  constructor() { }
setRegisterForm(data:object):Observable<any>{
  return this._HttpClient.post(`${environment.baseUrl}/api/Account/register`,data)

}
setloginForm(data:object):Observable<any>{
  return this._HttpClient.post(`${environment.baseUrl}/api/Account/login`,data)

}
}
