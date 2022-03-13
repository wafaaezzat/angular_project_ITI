import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/_models/product/product.model';
import { ProductService } from 'src/app/_services/product/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  productsArray! :Product[]
  product = {} as Product
  relatedProducts!: Product[]
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['id']);
    this.getProductById()
    this.getRelatedProducts()
  }

  // Method to get product by the id comes from params
  getProductById() {
    this.activatedRoute.params.subscribe(
      (params) => {
        const id = Number(params['id'])
        console.log(params);

        this.product = this.productService.getProductById(id)!
        console.log(this.product);
      }
    )
  }

  // Method to get ralated Products
  getRelatedProducts() {
    // this.relatedProducts = this.productService.getAllProducts().slice(0, 4)
  }

  // Method to add item through the adding button 
  onItemAdded() {
    console.log(this.product);
    this.productService.addProductToCart(this.product)
  }


}
