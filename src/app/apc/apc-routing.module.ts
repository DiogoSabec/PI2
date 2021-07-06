import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApcPage } from './apc.page';

const routes: Routes = [
  {
    path: '',
    component: ApcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApcPageRoutingModule {}
