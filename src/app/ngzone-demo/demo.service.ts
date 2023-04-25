import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private http: HttpClient) { }

  getPostAPI(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
}
