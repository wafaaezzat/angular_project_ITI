import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/_models/product/category.model';
import { PaymentType } from 'src/app/_models/product/payment-type.model';
import { Product } from 'src/app/_models/product/product.model';
import { Tag } from 'src/app/_models/product/tags.model';
import { CategoryService } from 'src/app/_services/product/category.service';
import { PaymentTypeService } from 'src/app/_services/product/payment-type.service';
import { ProductService } from 'src/app/_services/product/product.service';
import { TagService } from 'src/app/_services/product/tag.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  paymentTypes: PaymentType[] = []
  categories: Category[] = []
  tags: Tag[] = []
  product = {} as Product
  indexsArray!: number[]
  editMode = false;
  englishMode = true;
  arabicMode = false;


  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private paymentTypesService: PaymentTypeService,
    private categoryService: CategoryService,
    private tagService: TagService) { }

  ngOnInit(): void {

    // Handling editmode
    if (this.activatedRoute.snapshot.url[0].path == 'edit') {
      this.editMode = true;
    }
    if (this.editMode) {
      this.getProductById();
    }

    this.getAllPaymentTypes()
    this.getAllCategories()
    this.getAllTags()
  }


  // Method to get product by id
  getProductById() {
    const id = Number(this.activatedRoute.snapshot.params['id'])
    this.product = this.productService.getProductById(id)!
    console.log(this.product);
  }


  // Method to change the form language mode to English
  changeToEngMode(){
    this.arabicMode = false;
    this.englishMode = true;
  }

  // Method to change the form language mode to Arabic
  changeToArMode(){
    this.englishMode = false;
    this.arabicMode = true;
  }

  // Method to get all payment types
  getAllPaymentTypes() {
    this.paymentTypes = this.paymentTypesService.getAllPaymentTypes();
  }

  // Method to get all categories
  getAllCategories() {
    this.categories = this.categoryService.getAllcategories()
  }

  // method to get all tags
  getAllTags() {
    this.tags = this.tagService.getAlltags()
  }


  // Method to delete tag when delete button clicked
  deleteTag(tag: Tag) {
    this.tags.splice(this.tags.indexOf(tag) ,1)
    this.router.navigateByUrl('/product/add')
  }

  // Helper method to get the paymentTypes that user chose in the form
  getPaymentType(values: any) {
    let paymentTypes: PaymentType[] = []
    for (let type = 0; type < this.paymentTypes.length; type += 1) {
      values["checkbox_" + this.paymentTypes[type].id] && paymentTypes.push({ name: this.paymentTypes[type].name })
    }
    return paymentTypes
  }

  // Handler method to add new product through the form
  onAddProduct(form: any) {
    const product: Product = <Product>{
      id: Math.random(),
      data: [{
        name: form.value.name,
        description: form.value.description
      }],
      price: form.value.price,
      discount: form.value.discount,
      category: this.categories.find((cat) => cat.id === +form.value.category),
      paymentTypes: this.getPaymentType(form.value)
    };
    console.log(product);
    this.productService.addProduct(product)
    this.router.navigateByUrl('home')
  }
}
