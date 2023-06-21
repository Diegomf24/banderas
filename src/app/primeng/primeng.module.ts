import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TieredMenuModule} from "primeng/tieredmenu";
import {RippleModule} from "primeng/ripple";
import {ButtonModule} from "primeng/button";
import {PanelModule} from "primeng/panel";
import {DialogModule} from "primeng/dialog";
import {ToastModule} from "primeng/toast";
import {CardModule} from "primeng/card";



@NgModule({

  imports: [
    CommonModule,
  ],
  exports: [
    TieredMenuModule,
    RippleModule,
    ButtonModule,
    PanelModule,
    DialogModule,
    ToastModule,
    CardModule
  ]
})
export class PrimengModule { }
