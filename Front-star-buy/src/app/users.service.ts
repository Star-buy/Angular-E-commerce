import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpEvent } from '@angular/common/http';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminDataEditItemComponent } from './admin-edit-item/admin-edit-item.component';
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

<<<<<<< HEAD
  addProduct(AdminProductsComponent: any): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(AdminProductsComponent);
    console.log(body)
    return this.http.post(`${this.baseURL}items/postitem`, body,{headers:{'Authorization':`Bearer ${localStorage.getItem('token')}`}})
  }
=======
  // addProduct(AdminProductsComponent: any): Observable<any> {
  //   const headers = { 'content-type': 'application/json'}  
  //   const body=JSON.stringify(AdminProductsComponent);
  //   console.log(body)
  //   return this.http.post(`${this.baseURL}items/postitem`, body, {'headers':headers})
  // }
>>>>>>> d134a56c12b5a31b3eabe974282ef6d618fe5dac

  // updateData(data: any, id: string): Observable<any> {
  //   return this.http.patch(`${this.baseURL}/update/${id}`, data)
  // }


  getItem(id:any): Observable<any> {
    
    return this.http.get(`${this.baseURL}items/getOneItem/${id}`)
    
  }


  
  // deleteData(id: string): Observable<any> {
  //   return this.http.delete(`${this.baseURL}/delete/${id}`)
  // }




  /////////////////********Review-List********//////////////////////
  getAllReviews():Observable<any>{
    return this.http.get(`${this.baseURL}reviews/getreview`)
  }
}
