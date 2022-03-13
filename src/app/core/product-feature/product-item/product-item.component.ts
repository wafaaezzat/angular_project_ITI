import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_models/product/product.model';
import { ProductService } from 'src/app/_services/product/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input()
  productItem!: Product

  deleteId! :number 
  // productsArray:Product[] = []

  @Output()
  itemAddedToCart : EventEmitter <Product> = new EventEmitter;

  constructor(private productService : ProductService) { }

  ngOnInit(): void {

  }

  // Helper method to calculate price after discount
  calculatePrice(): number {
    let result;
    if (this.productItem.discount) {
      result = this.productItem.price - this.productItem.discount;
    }
    else {
      result = this.productItem.price
    }
    return result;
  }


  // Handler method to delete product 
  onDeleteProduct(product: Product){
    this.productService.deleteProduct(product.id)
    console.log(product);
  }

  // Handler method to add products to cart
  onItemAdded(){
    console.log(this.productItem);
    this.productService.addProductToCart(this.productItem) 
  }
  

}
