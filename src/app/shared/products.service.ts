import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs';
import { IProduct } from './models';

@Injectable({
  providedIn: "root"
})
export class ProductsService {

  constructor(private httpService: HttpClient) {}


  public products = new BehaviorSubject<IProduct[]>([] );

  getProducts() {
    return this.httpService.get("assets/json/products.json");
  }
}
