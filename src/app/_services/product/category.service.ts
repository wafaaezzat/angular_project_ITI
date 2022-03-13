import { Injectable } from '@angular/core';
import { Category } from 'src/app/_models/product/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: Category[] = [
    { id: 1, name: 'Food' },
    { id: 2, name: 'Electronics' },
    { id: 3, name: 'Clothes' },
    { id: 4, name: 'Books' },
    { id: 5, name: 'Sports' },
    { id: 6, name: 'Health' }
  ]

  constructor() { }

  getAllcategories() : Category[]{
    return this.categories
  }
  getById(){}
  add(){}
  edit(){}
  delete(){}
}
