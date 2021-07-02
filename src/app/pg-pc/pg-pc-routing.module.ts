import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PgPCPage } from './pg-pc.page';

const routes: Routes = [
  {
    path: '',
    component: PgPCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PgPCPageRoutingModule {}
