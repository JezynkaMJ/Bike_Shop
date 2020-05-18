import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [FooterComponent, NavbarComponent, HomePageComponent],
  imports: [CommonModule, SharedModule],
  exports: [HomePageComponent]
})
export class HomeModule {}
