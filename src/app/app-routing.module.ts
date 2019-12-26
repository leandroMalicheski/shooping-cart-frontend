import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { ItemUpdateComponent } from './item-update/item-update.component';
import { ItemCreateComponent } from './item-create/item-create.component';
import { UserComponent } from './user/user.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  { path: 'item', component: ItemComponent },
  { path: 'item-update/:id', component: ItemUpdateComponent },
  { path: 'item-create', component: ItemCreateComponent },
  { path: 'user', component: UserComponent },
  { path: 'user-update/:id', component: UserUpdateComponent },
  { path: 'user-create', component: UserCreateComponent },
  { path: 'cart/:id', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
