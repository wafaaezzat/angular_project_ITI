import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/_models/product/product.model';
import { ProductService } from 'src/app/_services/product/product.service';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.scss']
})
export class ProductCategoriesComponent implements OnInit {

  // variables for the pagination
  totalLength :any;
  page : number = 1;


  categoryProducts! : Product[]

  constructor(
    private productService : ProductService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCategoryById()
  }
  
  // Method to get all category's products to list them in the category's name page
  getCategoryById() {
    this.activatedRoute.params.subscribe(
      (params) => {
        const id = +params['id']
        console.log(params);
        this.categoryProducts = this.productService.getProductsByCategoryId(id)!
        this.totalLength = this.categoryProducts.length
        console.log(this.categoryProducts);
      },
    )
  }

}
