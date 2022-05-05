import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpEvent } from '@angular/common/http';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class UsersService {

private messageSource = new BehaviorSubject<string>('default message') 
curreentMessage = this.messageSource.asObservable()

changeMessage(message: string) {
this.messageSource.next(message)
}

  private baseURL = `http://localhost:3000/`
  constructor(
    private http: HttpClient
    ) { }


  getAllData(): Observable<any> {
    return this.http.get<any>(`${this.baseURL}items/getitem`)
  }

  // addProduct(AdminProductsComponent: any): Observable<any> {
  //   const headers = { 'content-type': 'application/json'}  
  //   const body=JSON.stringify(AdminProductsComponent);
  //   console.log(body)
  //   return this.http.post(`${this.baseURL}items/postitem`, body, {'headers':headers})
  // }

  // updateData(data: any, id: string): Observable<any> {
  //   return this.http.patch(`${this.baseURL}/update/${id}`, data)
  // }


  getItem(id: string): Observable<any> {
    //return this.http.patch(`${this.baseURL}/update/${id}`, data)
    return this.http.get(`dsvfdsvqf`)
  }
  // deleteData(id: string): Observable<any> {
  //   return this.http.delete(`${this.baseURL}/delete/${id}`)
  // }




  /////////////////********Review-List********//////////////////////
  getAllReviews():Observable<any>{
    return this.http.get(`${this.baseURL}reviews/getreview`)
  }
}
