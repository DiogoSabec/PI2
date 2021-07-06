import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApcPageRoutingModule } from './apc-routing.module';

import { ApcPage } from './apc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApcPageRoutingModule
  ],
  declarations: [ApcPage]
})
export class ApcPageModule {}
