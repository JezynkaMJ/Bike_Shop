import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroBasicComponent } from './components/intro-basic/intro-basic.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavbarComponent, FooterComponent, IntroBasicComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavbarComponent, FooterComponent, IntroBasicComponent]
})
export class SharedModule { }
