import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ShopComponent } from './components/shop/shop.component';

const routes: Routes = [
  {path: 'shop', component: ShopComponent},
  {path: 'product', component: ProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
