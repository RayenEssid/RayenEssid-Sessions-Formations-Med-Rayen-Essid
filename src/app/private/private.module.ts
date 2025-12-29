// NgModule : Décorateur pour créer des modules Angular
import { NgModule } from '@angular/core';
// CommonModule : Fournit les directives communes (*ngIf, *ngFor, etc.)
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
