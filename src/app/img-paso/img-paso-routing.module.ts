import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImgPasoPage } from './img-paso.page';

const routes: Routes = [
  {
    path: '',
    component: ImgPasoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImgPasoPageRoutingModule {}
