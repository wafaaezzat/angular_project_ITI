import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./core/not-found/not-found.component";
import { FilterHightolowComponent } from "./core/product-feature/filter-hightolow/filter-hightolow.component";
import { FilterLowtohighComponent } from "./core/product-feature/filter-lowtohigh/filter-lowtohigh.component";
import { ProductCategoriesComponent } from "./core/product-feature/product-categories/product-categories.component";
import { ProductDetailsComponent } from "./core/product-feature/product-details/product-details.component";
import { ProductFormComponent } from "./core/product-feature/product-form/product-form.component";
import { ProductListingComponent } from "./core/product-feature/product-listing/product-listing.component";
import { LoginComponent } from "./user/login/login.component";

const routes: Routes = [
    { path: '', component: ProductListingComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home', redirectTo: '', pathMatch: 'full' },
    { path: 'category/:id', component: ProductCategoriesComponent },
    { path: 'hightolow', component: FilterHightolowComponent },
    { path: 'lowtohigh', component: FilterLowtohighComponent },
    {
        path: 'product', children: [
            { path: 'listing', redirectTo: '', pathMatch: 'full' },
            { path: 'details/:id', component: ProductDetailsComponent },
            { path: 'add', component: ProductFormComponent },
            { path: 'edit/:id', component: ProductFormComponent }
        ]
    },
    { path: '**', component: NotFoundComponent }


];

@NgModule({
    imports: [RouterModule.forRoot(routes , {scrollPositionRestoration : 'top'})],
    exports: [RouterModule]
})

export class AppRoutingModule { }