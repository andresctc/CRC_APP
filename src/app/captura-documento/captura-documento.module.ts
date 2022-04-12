import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapturaDocumentoPageRoutingModule } from './captura-documento-routing.module';

import { CapturaDocumentoPage } from './captura-documento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CapturaDocumentoPageRoutingModule
  ],
  declarations: [CapturaDocumentoPage]
})
export class CapturaDocumentoPageModule {}
