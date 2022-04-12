import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CapturaDocumentoPage } from './captura-documento.page';

const routes: Routes = [
  {
    path: '',
    component: CapturaDocumentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapturaDocumentoPageRoutingModule {}
