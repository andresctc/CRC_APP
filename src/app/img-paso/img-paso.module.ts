import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImgPasoPageRoutingModule } from './img-paso-routing.module';

import { ImgPasoPage } from './img-paso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImgPasoPageRoutingModule
  ],
  declarations: [ImgPasoPage]
})
export class ImgPasoPageModule {}
