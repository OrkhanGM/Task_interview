import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/products.service';
import { IProduct } from 'src/app/shared/models';

@Component({
  selector: 'app-c-products',
  templateUrl: './c-products.component.html',
  styleUrls: ['./c-products.component.sass']
})
export class CProductsComponent implements OnInit {

  constructor(private productsService: ProductsService) {
    this.getProductsJson();
    this.subsProducts();
  }

  ngOnInit() {
  }

  public products:IProduct[];

  getProductsJson() {
    this.productsService.getProducts().subscribe(
      response =>{
        console.log(response);
        this.productsService.products.next(response as IProduct[]);
      }
    )

  }


  subsProducts(){
    this.productsService.products.subscribe(products => {
      this.products = products;
    })
  }

}
