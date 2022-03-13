import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/_models/product/category.model';
import { Tag } from 'src/app/_models/product/tags.model';
import { CategoryService } from 'src/app/_services/product/category.service';
import { ProductService } from 'src/app/_services/product/product.service';
import { TagService } from 'src/app/_services/product/tag.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {
  categories!: Category[]
  tags!: Tag[]

  public searchTerm: string = '';

  constructor(
    private categoriesService: CategoryService,
    private tagsService: TagService,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.getAllCategories()
    this.getAllTags()
  }

  // Method to display the categories's icons on the left of the page
  getAllCategories() {
    this.categories = this.categoriesService.getAllcategories()
  }

  // Method to display tags in the left of the page
  getAllTags() {
    this.tags = this.tagsService.getAlltags().slice(0, 3)
  }

  // Method to handle searching from search box
  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.productService.search.next(this.searchTerm)
    
  }

}
