import { Injectable } from '@angular/core';
import { Tag } from 'src/app/_models/product/tags.model';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  tags: Tag[] = [
    { id: 1, name: 'Food' },
    { id: 2, name: 'Electronics' },
    { id: 3, name: 'Clothes' },
    { id: 4, name: 'Books' },
    { id: 5, name: 'Sports' },
    { id: 6, name: 'Baby' },
    { id: 7, name: 'Health' }
  ]
  constructor() { }

  getAlltags() : Tag[]{
    return this.tags
  }
  getById(){}
  add(){}
  edit(){}
  delete(){}
}

