import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cart } from 'src/app/_models/product/cart.model';
import { ProductService } from 'src/app/_services/product/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  // Taking the cart data from parent
  
  cartTotal!: number;
 
  itemCount!: number;

  cartItems : Cart[] =[]

  // Sending the event created to the parent
  @Output()
  onDeleteItem : EventEmitter <Cart> = new EventEmitter <Cart>();


  dropdownOpened = false;

  constructor(private productService : ProductService) { 
  }

  ngOnInit(): void {
    this.productService.cartHasBeenChanged.subscribe(
      (res)=>{
        this.cartItems = res
        this.itemCount = this.productService.itemCount
        this.cartTotal = this.productService.cartTotal
      },
      (err)=>{},
      ()=>{}
    )
    
  }

  deleteItem(cart :Cart){
    this.productService.deleteProductFromCart(cart)
  }

}
