import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopPageComponent } from './pages/shop-items/shop-page.component';
import {MatCardModule} from '@angular/material/card';
import { ShopItemComponent } from './pages/shop-item/shop-item.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ShopPageComponent, ShopItemComponent],
  imports: [
    RouterModule,
    CommonModule,
    MatCardModule
  ]
})
export class ShopModule { }
