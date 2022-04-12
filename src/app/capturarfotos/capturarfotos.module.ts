import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapturarfotosPageRoutingModule } from './capturarfotos-routing.module';

import { CapturarfotosPage } from './capturarfotos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CapturarfotosPageRoutingModule
  ],
  declarations: [CapturarfotosPage]
})
export class CapturarfotosPageModule {}
