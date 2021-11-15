import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public get = (url: string, options?: any): Observable<any> =>
  this.http.get(url, options);

  public post = (url: string, options?: any, body?: any): Observable<any> =>
  this.http.post(url, options, body);

  public put = (url: string, options?: any, body?: any): Observable<any> =>
  this.http.put(url, options, body);
}
