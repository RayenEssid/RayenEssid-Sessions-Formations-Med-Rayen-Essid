import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleEspacePublicRoutingModule } from './public-routing.module';

import { DetailsFormationComponent } from './details-formation/details-formation.component';
import { RechercheFormationComponent } from './recherche-formation/recherche-formation.component';
import { AccueilComponent } from './accueil/accueil.component';
import { SearchModuleComponent } from "./search-module/search-module.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { AddCandidatComponent } from './add-candidat/add-candidat.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AccueilComponent,
    DetailsFormationComponent,
    RechercheFormationComponent,
    AddCandidatComponent
  ],
  imports: [
    CommonModule,
    ModuleEspacePublicRoutingModule,
    SearchModuleComponent,
    NavBarComponent,
    FormsModule
]
})
export class PublicModule { }
