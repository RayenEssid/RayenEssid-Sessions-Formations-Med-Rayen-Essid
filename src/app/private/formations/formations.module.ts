import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormationsRoutingModule } from './formations-routing.module';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { DetailsFormationComponent } from './details-formation/details-formation.component';
import { RechercheFormationComponent } from './recherche-formation/recherche-formation.component';
import { AddFormationComponent } from './add-formation/add-formation.component';
import { EditFormationComponent } from './edit-formation/edit-formation.component';
import { FormsModule } from '@angular/forms';
import { AddSessionComponent } from './add-session/add-session.component';
import { EditSessionComponent } from './edit-session/edit-session.component';


@NgModule({
  declarations: [
    DetailsFormationComponent,
    RechercheFormationComponent,
    AddFormationComponent,
    EditFormationComponent,
    AddSessionComponent,
    EditSessionComponent
  ],
  imports: [
    CommonModule,
    FormationsRoutingModule,
    NavBarComponent,
    FormsModule
  ]
})
export class FormationsModule { }
