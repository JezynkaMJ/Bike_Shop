import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from 'src/app/modules/home/pages/home-page/home-page.component';
import { ShopPageComponent } from 'src/app/modules/shop/pages/shop-page.component';


const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'bikes', component: ShopPageComponent },
  { path: 'accessories', component: ShopPageComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomePageComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
