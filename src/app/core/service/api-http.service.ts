import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiHttpService {
  //Dont forget to add HttpClient in the app.module file ;)
  constructor(private http: HttpClient) {}

  options: any = {
    headers: { 'Access-Control-Allow-Origin': '*' },
  };

  public get = (url: string): Observable<any> =>
    this.http.get(url, this.options);

  public post = (url: string, body: any): Observable<any> =>
    this.http.post(url, body, this.options);
}
