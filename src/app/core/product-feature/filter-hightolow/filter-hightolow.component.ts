import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product/product.model';
import { ProductService } from 'src/app/_services/product/product.service';

@Component({
  selector: 'app-filter-hightolow',
  templateUrl: './filter-hightolow.component.html',
  styleUrls: ['./filter-hightolow.component.scss']
})
export class FilterHightolowComponent implements OnInit {

  totalLength :any;
  page : number = 1;


  productsArray!: Product [];
  searchKey: string = ''

  constructor(private productService : ProductService) { }

  ngOnInit(): void {

    // Get data from the Api 
    this.productService.getAllProducts().subscribe((res) => {
      this.productsArray = res.product
      
      // sort the array from high price to low price
      this.productsArray.sort((a :any, b :any) => {return (b.price - b.discount) - (a.price - a.discount)});
    })

    // Get the response from the search
    this.productService.search.subscribe((val: any) => {
      this.searchKey = val;
      console.log(val);
    })
  }

}
