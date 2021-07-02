import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PgPCPageRoutingModule } from './pg-pc-routing.module';

import { PgPCPage } from './pg-pc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PgPCPageRoutingModule
  ],
  declarations: [PgPCPage]
})
export class PgPCPageModule {}
