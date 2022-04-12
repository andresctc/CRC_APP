import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CapturarfotosPage } from './capturarfotos.page';

const routes: Routes = [
  {
    path: '',
    component: CapturarfotosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapturarfotosPageRoutingModule {}
