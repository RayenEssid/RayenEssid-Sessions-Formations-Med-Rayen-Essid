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
  // declarations : Les composants CRÉÉS dans ce module
  declarations: [
    DetailsFormationComponent,     // Détails formation (admin)
    RechercheFormationComponent,   // Recherche/liste (admin)
    AddFormationComponent,         // Ajouter formation
    EditFormationComponent,        // Modifier formation
    AddSessionComponent,           // Ajouter session
    EditSessionComponent           // Modifier session
  ],
  
  // imports : Ce que ce module UTILISE
  imports: [
    CommonModule,                  // Directives Angular de base
    FormationsRoutingModule,       // Routes des formations
    NavBarComponent,               // ⭐ NAVBAR ADMIN (standalone)
    FormsModule                    // Pour les formulaires
  ]
})
export class FormationsModule { }
