import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { CandidatsRoutingModule } from './candidats-routing.module';
import { AddCandidatComponent } from './add-candidat/add-candidat.component';
import { EditCandidatComponent } from './edit-candidat/edit-candidat.component';
import { ListCandidatComponent } from './list-candidat/list-candidat.component';
import { NavBarComponent } from "../nav-bar/nav-bar.component";


@NgModule({
  declarations: [
    AddCandidatComponent,
    EditCandidatComponent,
    ListCandidatComponent
  ],
  imports: [
    CommonModule,
    CandidatsRoutingModule,
    FormsModule,
    NavBarComponent
]
})
export class CandidatsModule { }
