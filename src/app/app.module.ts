import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ProductItemComponent } from './core/product-feature/product-item/product-item.component';
import { ProductListingComponent } from './core/product-feature/product-listing/product-listing.component';
import { ProductFilterComponent } from './core/product-feature/product-filter/product-filter.component';
import { ProductDetailsComponent } from './core/product-feature/product-details/product-details.component';
import { ProductFormComponent } from './core/product-feature/product-form/product-form.component';
import { FormsModule , ReactiveFormsModule  } from '@angular/forms';
import { ProductCategoriesComponent } from './core/product-feature/product-categories/product-categories.component';
import { FilterPipe } from './search-handling/filter.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { FilterHightolowComponent } from './core/product-feature/filter-hightolow/filter-hightolow.component';
import { FilterLowtohighComponent } from './core/product-feature/filter-lowtohigh/filter-lowtohigh.component';
import { LoginComponent } from './user/login/login.component';
import { NotFoundComponent } from './core/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductItemComponent,
    ProductListingComponent,
    ProductFilterComponent,
    ProductDetailsComponent,
    ProductFormComponent,
    ProductCategoriesComponent,
    FilterPipe,
    FilterHightolowComponent,
    FilterLowtohighComponent,
    LoginComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
