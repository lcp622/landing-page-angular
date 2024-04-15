import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import  {productsList } from '../products/products.mock';
import { Product } from '../products/products.mock';
//He importado el commonModule con el fin de poder usar ngStyle

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

  product?: Product;
  productList :Product[] = productsList;
  loading:boolean = true;
  color : string = "";
 
  constructor(private _route : ActivatedRoute) { }

  ngOnInit(): void {
     setTimeout(() => {
      this._route.params.subscribe(params => {
        this.product = this.productList.find(product=> product.id == params['productId']);
        this.loading = false; 
        this.color = this.product?.price as number > 5 ? 'red' : ''
       });
    
     },1500);
    }
}
