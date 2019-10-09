import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/products.service';
import { IProduct } from 'src/app/shared/models';

@Component({
  selector: "app-b-productedit",
  templateUrl: "./b-productedit.component.html",
  styleUrls: ["./b-productedit.component.sass"]
})
export class BProducteditComponent implements OnInit {
  constructor(private productsService: ProductsService) {
    this.subsProducts();
  }

  ngOnInit() {}

  public products: IProduct[];
  public new_product_name:string;
  public new_product_url:string;


  removeOne() {
    this.products.splice(0, 1);
    console.log(this.products);
    this.productsService.products.next(this.products);
  }

  subsProducts() {
    this.productsService.products.subscribe(products => {
      this.products = products;
    });
  }
  addOne(){
    let new_product:IProduct={
      id:Math.random(),
      name:this.new_product_name,
      photo:this.new_product_url
    } 
    this.products.push(new_product);
    this.productsService.products.next(this.products);
    this.new_product_name = "";
    this.new_product_url = "" ;
    
  }
}
