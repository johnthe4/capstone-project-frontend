import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';

const routes: Routes = [
  { path: "", redirectTo:"/user/list", pathMatch: "full" },
  { path: "user/list", component: UserListComponent },
  { path: "login", component: UserLoginComponent },
  { path: "user/create", component: UserCreateComponent },
  { path: "user/detail/:id", component: UserDetailComponent },
  { path: "user/edit/:id", component: UserEditComponent },
  { path: "vend/list", component: VendorListComponent },
  { path: "vend/create", component: VendorCreateComponent },
  { path: "vend/detail/:id", component: VendorDetailComponent },
  { path: "vend/edit/:id", component: VendorEditComponent },
  { path: "prod/list", component: ProductListComponent },
  { path: "prod/create", component: ProductCreateComponent },
  { path: "prod/detail/:id", component: ProductDetailComponent },
  { path: "prod/edit/:id", component: ProductEditComponent },
  { path: "**", component: UserListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
