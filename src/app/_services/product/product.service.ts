import { HttpClient, HttpHeaders } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Cart } from "src/app/_models/product/cart.model";
import { AllProductResponse, Product } from "src/app/_models/product/product.model";



@Injectable({
    providedIn: 'root'
})

export class ProductService {

    productsArray: Product[] = [
        // { id: 1, data: [{ name: 'Camera', description: "test", lang: { name: "eng" } }], category: { id: 2, name: 'Electronics' }, tags: [{ id: 2, name: 'Electronics' }], paymentTypes: [{ name: 'cash' }], price: 100, discount: 10, imageUrl: 'https://picsum.photos/200/300' },
        // { id: 2, data: [{ name: 'PhotoCamera', description: "test", lang: { name: "eng" } }], category: { id: 2, name: 'Electronics' }, tags: [{ id: 2, name: 'Electronics' }], paymentTypes: [{ name: 'cash' }], price: 100, discount: 10, imageUrl: 'https://picsum.photos/200/301' },
        // { id: 3, data: [{ name: 'Chips', description: "test", lang: { name: "eng" } }], category: { id: 1, name: 'Food' }, tags: [{ id: 1, name: 'Food' }], paymentTypes: [{ name: 'cash' }], price: 1010, discount: 100, imageUrl: 'https://picsum.photos/200/302' },
        // { id: 4, data: [{ name: 'Spagetti', description: "test", lang: { name: "eng" } }], category: { id: 1, name: 'Food' }, tags: [{ id: 1, name: 'Food' }], paymentTypes: [{ name: 'cash' }], price: 1000, discount: 50, imageUrl: 'https://picsum.photos/200/303' },
        // { id: 5, data: [{ name: 'Jacket', description: "test", lang: { name: "eng" } }], category: { id: 3, name: 'Clothes' }, tags: [{ id: 3, name: 'Clothes' }], paymentTypes: [{ name: 'cash' }], price: 500, discount: 200, imageUrl: 'https://picsum.photos/200/304' },
        // { id: 6, data: [{ name: 'skirt', description: "test", lang: { name: "eng" } }], category: { id: 3, name: 'Clothes' }, tags: [{ id: 3, name: 'Clothes' }], paymentTypes: [{ name: 'cash' }], price: 700, discount: 100, imageUrl: 'https://picsum.photos/200/305' },
        // { id: 7, data: [{ name: 'Book1', description: "test", lang: { name: "eng" } }], category: { id: 4, name: 'Books' }, tags: [{ id: 4, name: 'Books' }], paymentTypes: [{ name: 'cash' }], price: 900, discount: 70, imageUrl: 'https://picsum.photos/200/306' },
        // { id: 8, data: [{ name: 'Book2', description: "test", lang: { name: "eng" } }], category: { id: 4, name: 'Books' }, tags: [{ id: 4, name: 'Books' }], paymentTypes: [{ name: 'cash' }], price: 1000, discount: 100, imageUrl: 'https://picsum.photos/200/307' },
        // { id: 9, data: [{ name: 'Sports', description: "test", lang: { name: "eng" } }], category: { id: 5, name: 'Sports' }, tags: [{ id: 5, name: 'Sports' }], paymentTypes: [{ name: 'cash' }], price: 1000, discount: 100, imageUrl: 'https://picsum.photos/200/308' },
        // { id: 10, data: [{ name: 'Sports', description: "test", lang: { name: "eng" } }], category: { id: 5, name: 'Sports' }, tags: [{ id: 5, name: 'Sports' }], paymentTypes: [{ name: 'cash' }], price: 1000, discount: 100, imageUrl: 'https://picsum.photos/200/309' },
        // { id: 11, data: [{ name: 'Health', description: "test", lang: { name: "eng" } }], category: { id: 6, name: 'Health' }, tags: [{ id: 6, name: 'Health' }], paymentTypes: [{ name: 'cash' }], price: 1000, discount: 100, imageUrl: 'https://picsum.photos/200/310' },
        // { id: 12, data: [{ name: 'Health', description: "test", lang: { name: "eng" } }], category: { id: 6, name: 'Health' }, tags: [{ id: 6, name: 'Health' }], paymentTypes: [{ name: 'cash' }], price: 1000, discount: 100, imageUrl: 'https://picsum.photos/200/311' },
        // { id: 13, data: [{ name: 'Camera', description: "test", lang: { name: "eng" } }], category: { id: 2, name: 'Electronics' }, tags: [{ id: 2, name: 'Electronics' }], paymentTypes: [{ name: 'cash' }], price: 100, discount: 10, imageUrl: 'https://picsum.photos/200/312' },
        // { id: 14, data: [{ name: 'PhotoCamera', description: "test", lang: { name: "eng" } }], category: { id: 2, name: 'Electronics' }, tags: [{ id: 2, name: 'Electronics' }], paymentTypes: [{ name: 'cash' }], price: 100, discount: 10, imageUrl: 'https://picsum.photos/200/313' },
        // { id: 15, data: [{ name: 'Chips', description: "test", lang: { name: "eng" } }], category: { id: 1, name: 'Food' }, tags: [{ id: 1, name: 'Food' }], paymentTypes: [{ name: 'cash' }], price: 1010, discount: 100, imageUrl: 'https://picsum.photos/200/314' },
        // { id: 16, data: [{ name: 'Spagetti', description: "test", lang: { name: "eng" } }], category: { id: 1, name: 'Food' }, tags: [{ id: 1, name: 'Food' }], paymentTypes: [{ name: 'cash' }], price: 1000, discount: 50, imageUrl: 'https://picsum.photos/200/315' },
        // { id: 17, data: [{ name: 'Jacket', description: "test", lang: { name: "eng" } }], category: { id: 3, name: 'Clothes' }, tags: [{ id: 3, name: 'Clothes' }], paymentTypes: [{ name: 'cash' }], price: 500, discount: 200, imageUrl: 'https://picsum.photos/200/316' },
        // { id: 18, data: [{ name: 'skirt', description: "test", lang: { name: "eng" } }], category: { id: 3, name: 'Clothes' }, tags: [{ id: 3, name: 'Clothes' }], paymentTypes: [{ name: 'cash' }], price: 700, discount: 100, imageUrl: 'https://picsum.photos/200/317' },
        // { id: 19, data: [{ name: 'Book1', description: "test", lang: { name: "eng" } }], category: { id: 4, name: 'Books' }, tags: [{ id: 4, name: 'Books' }], paymentTypes: [{ name: 'cash' }], price: 900, discount: 70, imageUrl: 'https://picsum.photos/200/318' },
        // { id: 20, data: [{ name: 'Book2', description: "test", lang: { name: "eng" } }], category: { id: 4, name: 'Books' }, tags: [{ id: 4, name: 'Books' }], paymentTypes: [{ name: 'cash' }], price: 1000, discount: 100, imageUrl: 'https://picsum.photos/200/319' },
        // { id: 21, data: [{ name: 'Sports', description: "test", lang: { name: "eng" } }], category: { id: 5, name: 'Sports' }, tags: [{ id: 5, name: 'Sports' }], paymentTypes: [{ name: 'cash' }], price: 1000, discount: 100, imageUrl: 'https://picsum.photos/200/320' },
        // { id: 22, data: [{ name: 'Sports', description: "test", lang: { name: "eng" } }], category: { id: 5, name: 'Sports' }, tags: [{ id: 5, name: 'Sports' }], paymentTypes: [{ name: 'cash' }], price: 1000, discount: 100, imageUrl: 'https://picsum.photos/200/321' },
        // { id: 23, data: [{ name: 'Health', description: "test", lang: { name: "eng" } }], category: { id: 6, name: 'Health' }, tags: [{ id: 6, name: 'Health' }], paymentTypes: [{ name: 'cash' }], price: 1000, discount: 100, imageUrl: 'https://picsum.photos/200/322' },
        // { id: 24, data: [{ name: 'Health', description: "test", lang: { name: "eng" } }], category: { id: 6, name: 'Health' }, tags: [{ id: 6, name: 'Health' }], paymentTypes: [{ name: 'cash' }], price: 1000, discount: 100, imageUrl: 'https://picsum.photos/200/323' },
        // { id: 25, data: [{ name: 'Camera', description: "test", lang: { name: "eng" } }], category: { id: 2, name: 'Electronics' }, tags: [{ id: 2, name: 'Electronics' }], paymentTypes: [{ name: 'cash' }], price: 100, discount: 10, imageUrl: 'https://picsum.photos/200/324' },
        // { id: 26, data: [{ name: 'PhotoCamera', description: "test", lang: { name: "eng" } }], category: { id: 2, name: 'Electronics' }, tags: [{ id: 2, name: 'Electronics' }], paymentTypes: [{ name: 'cash' }], price: 100, discount: 10, imageUrl: 'https://picsum.photos/200/325' },
        // { id: 27, data: [{ name: 'Chips', description: "test", lang: { name: "eng" } }], category: { id: 1, name: 'Food' }, tags: [{ id: 1, name: 'Food' }], paymentTypes: [{ name: 'cash' }], price: 1010, discount: 100, imageUrl: 'https://picsum.photos/200/326' },
        // { id: 28, data: [{ name: 'Spagetti', description: "test", lang: { name: "eng" } }], category: { id: 1, name: 'Food' }, tags: [{ id: 1, name: 'Food' }], paymentTypes: [{ name: 'cash' }], price: 1000, discount: 50, imageUrl: 'https://picsum.photos/200/327' },
        // { id: 29, data: [{ name: 'Jacket', description: "test", lang: { name: "eng" } }], category: { id: 3, name: 'Clothes' }, tags: [{ id: 3, name: 'Clothes' }], paymentTypes: [{ name: 'cash' }], price: 500, discount: 200, imageUrl: 'https://picsum.photos/200/328' },
        // { id: 30, data: [{ name: 'skirt', description: "test", lang: { name: "eng" } }], category: { id: 3, name: 'Clothes' }, tags: [{ id: 3, name: 'Clothes' }], paymentTypes: [{ name: 'cash' }], price: 700, discount: 100, imageUrl: 'https://picsum.photos/200/329' },
        // { id: 31, data: [{ name: 'Book1', description: "test", lang: { name: "eng" } }], category: { id: 4, name: 'Books' }, tags: [{ id: 4, name: 'Books' }], paymentTypes: [{ name: 'cash' }], price: 900, discount: 70, imageUrl: 'https://picsum.photos/200/330' },
        // { id: 32, data: [{ name: 'Book2', description: "test", lang: { name: "eng" } }], category: { id: 4, name: 'Books' }, tags: [{ id: 4, name: 'Books' }], paymentTypes: [{ name: 'cash' }], price: 1000, discount: 100, imageUrl: 'https://picsum.photos/200/331' },
        // { id: 33, data: [{ name: 'Sports', description: "test", lang: { name: "eng" } }], category: { id: 5, name: 'Sports' }, tags: [{ id: 5, name: 'Sports' }], paymentTypes: [{ name: 'cash' }], price: 1000, discount: 100, imageUrl: 'https://picsum.photos/200/332' },
        // { id: 34, data: [{ name: 'Sports', description: "test", lang: { name: "eng" } }], category: { id: 5, name: 'Sports' }, tags: [{ id: 5, name: 'Sports' }], paymentTypes: [{ name: 'cash' }], price: 1000, discount: 100, imageUrl: 'https://picsum.photos/200/333' },
        // { id: 35, data: [{ name: 'Health', description: "test", lang: { name: "eng" } }], category: { id: 6, name: 'Health' }, tags: [{ id: 6, name: 'Health' }], paymentTypes: [{ name: 'cash' }], price: 1000, discount: 100, imageUrl: 'https://picsum.photos/200/334' },
        // { id: 36, data: [{ name: 'Health', description: "test", lang: { name: "eng" } }], category: { id: 6, name: 'Health' }, tags: [{ id: 6, name: 'Health' }], paymentTypes: [{ name: 'cash' }], price: 1000, discount: 100, imageUrl: 'https://picsum.photos/200/311' },
        // { id: 37, data: [{ name: 'Camera', description: "test", lang: { name: "eng" } }], category: { id: 2, name: 'Electronics' }, tags: [{ id: 2, name: 'Electronics' }], paymentTypes: [{ name: 'cash' }], price: 100, discount: 10, imageUrl: 'https://picsum.photos/200/300' },
        // { id: 38, data: [{ name: 'PhotoCamera', description: "test", lang: { name: "eng" } }], category: { id: 2, name: 'Electronics' }, tags: [{ id: 2, name: 'Electronics' }], paymentTypes: [{ name: 'cash' }], price: 100, discount: 10, imageUrl: 'https://picsum.photos/200/301' },
        // { id: 39, data: [{ name: 'Chips', description: "test", lang: { name: "eng" } }], category: { id: 1, name: 'Food' }, tags: [{ id: 1, name: 'Food' }], paymentTypes: [{ name: 'cash' }], price: 1010, discount: 100, imageUrl: 'https://picsum.photos/200/302' },
        // { id: 40, data: [{ name: 'Spagetti', description: "test", lang: { name: "eng" } }], category: { id: 1, name: 'Food' }, tags: [{ id: 1, name: 'Food' }], paymentTypes: [{ name: 'cash' }], price: 1000, discount: 50, imageUrl: 'https://picsum.photos/200/303' },
        // { id: 41, data: [{ name: 'Jacket', description: "test", lang: { name: "eng" } }], category: { id: 3, name: 'Clothes' }, tags: [{ id: 3, name: 'Clothes' }], paymentTypes: [{ name: 'cash' }], price: 500, discount: 200, imageUrl: 'https://picsum.photos/200/304' },
        // { id: 42, data: [{ name: 'skirt', description: "test", lang: { name: "eng" } }], category: { id: 3, name: 'Clothes' }, tags: [{ id: 3, name: 'Clothes' }], paymentTypes: [{ name: 'cash' }], price: 700, discount: 100, imageUrl: 'https://picsum.photos/200/305' },
        // { id: 43, data: [{ name: 'Book1', description: "test", lang: { name: "eng" } }], category: { id: 4, name: 'Books' }, tags: [{ id: 4, name: 'Books' }], paymentTypes: [{ name: 'cash' }], price: 900, discount: 70, imageUrl: 'https://picsum.photos/200/306' },
        // { id: 44, data: [{ name: 'Book2', description: "test", lang: { name: "eng" } }], category: { id: 4, name: 'Books' }, tags: [{ id: 4, name: 'Books' }], paymentTypes: [{ name: 'cash' }], price: 1000, discount: 100, imageUrl: 'https://picsum.photos/200/307' },
        // { id: 45, data: [{ name: 'Sports', description: "test", lang: { name: "eng" } }], category: { id: 5, name: 'Sports' }, tags: [{ id: 5, name: 'Sports' }], paymentTypes: [{ name: 'cash' }], price: 1000, discount: 100, imageUrl: 'https://picsum.photos/200/308' },
        // { id: 46, data: [{ name: 'Sports', description: "test", lang: { name: "eng" } }], category: { id: 5, name: 'Sports' }, tags: [{ id: 5, name: 'Sports' }], paymentTypes: [{ name: 'cash' }], price: 1000, discount: 100, imageUrl: 'https://picsum.photos/200/309' },
        // { id: 47, data: [{ name: 'Health', description: "test", lang: { name: "eng" } }], category: { id: 6, name: 'Health' }, tags: [{ id: 6, name: 'Health' }], paymentTypes: [{ name: 'cash' }], price: 1000, discount: 100, imageUrl: 'https://picsum.photos/200/310' },
        // { id: 48, data: [{ name: 'Health', description: "test", lang: { name: "eng" } }], category: { id: 6, name: 'Health' }, tags: [{ id: 6, name: 'Health' }], paymentTypes: [{ name: 'cash' }], price: 1000, discount: 100, imageUrl: 'https://picsum.photos/200/311' },
    ];
    cartTotal!: number;
    itemCount: number = 0;
    categoryProducts!: Product[]
    cartHasBeenChanged: EventEmitter<Cart[]> = new EventEmitter<Cart[]>();
    private cartItems: Cart[] = []

    // Observable subtype for searching from the search box
    public search = new BehaviorSubject<string>("");


    constructor(private httpClient: HttpClient) { }

    getAllProducts(): Observable<AllProductResponse> {
        const headers = new HttpHeaders(
            {authorization: sessionStorage.getItem('token')!}
        )
        return this.httpClient.get<AllProductResponse>('https://mearn-stack-backend-test.herokuapp.com/product' , {headers})
    }

    getProductById(id: number) {
        return this.productsArray.find(product => product.id === id)
    }
    getProductsByCategoryId(id: number): Product[] {
        return this.categoryProducts = this.productsArray.filter(item => item.category.id === id)
    }

    addProduct(product: Product) {
        this.productsArray.push(product)
    }

    updateProduct() { }
    deleteProduct(id: number) {
        const index: number = this.productsArray.findIndex((item) => item.id === id);
        this.productsArray.splice(index, 1)
    }

    addProductToCart(product: Product) {
        console.log(product);
        let productExists = false;
        for (let i in this.cartItems) {
            if (this.cartItems[i].id === product.id) {
                this.cartItems[i].quantity++
                this.itemCount++
                productExists = true
                break;
            }
        }
        if (!productExists) {
            this.cartItems.push({
                id: product.id,
                data: product.data,
                category: product.category,
                tags: product.tags,
                paymentTypes: product.paymentTypes,
                imageUrl: product.imageUrl,
                price: product.price,
                discount: product.discount,
                quantity: 1
            })
        }
        this.cartTotal = 0
        this.cartItems.forEach(item => {
            this.cartTotal += (item.quantity * (item.price - item.discount))
        })
        this.cartHasBeenChanged.emit(this.cartItems)
    }

    deleteProductFromCart(cartItem: Cart) {
        if (cartItem.quantity > 1) {
            cartItem.quantity--
            this.itemCount--
        }
        else {
            this.cartItems = this.cartItems.filter(item => item.id !== cartItem.id)
        }

        this.cartTotal = 0
        this.cartItems.forEach(item => {
            this.cartTotal += (item.quantity * (item.price - item.discount))
        })
        this.cartHasBeenChanged.emit(this.cartItems)
    }

}