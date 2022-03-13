import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product/product.model';
import { ProductService } from 'src/app/_services/product/product.service';

@Component({
  selector: 'app-filter-lowtohigh',
  templateUrl: './filter-lowtohigh.component.html',
  styleUrls: ['./filter-lowtohigh.component.scss']
})
export class FilterLowtohighComponent implements OnInit {

  totalLength: any;
  page: number = 1;


  productsArray!: Product[];
  searchKey: string = ''

  constructor(private productService: ProductService) { }

  ngOnInit(): void {

    // Get data from the Api 
    this.productService.getAllProducts().subscribe((res) => {
      this.productsArray = res.product
      
      // sort the array from low price to high price
      this.productsArray.sort((a :any, b :any) => {return (a.price - a.discount) - (b.price - b.discount)});
    })

    // Get the response from the search
    this.productService.search.subscribe((val: any) => {
      this.searchKey = val;
      console.log(val);
    })
  }

}
