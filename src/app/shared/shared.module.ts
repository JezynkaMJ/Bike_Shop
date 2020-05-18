import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroBasicComponent } from './components/intro-basic/intro-basic.component';



@NgModule({
  declarations: [IntroBasicComponent],
  imports: [
    CommonModule
  ],
  exports: [IntroBasicComponent]
})
export class SharedModule { }
