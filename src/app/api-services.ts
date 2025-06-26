import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServices {

  constructor(private http:HttpClient) { }
  getProduct()
  {return this.http.get("https://fakestoreapi.com/products")}

  getsingleProducts(id:string)
  {
    return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }


}
