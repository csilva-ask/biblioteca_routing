import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'product', component:ProductComponent},
  {path: 'product/:id', component:ProductDetailComponent},
  {path: '**',    component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
