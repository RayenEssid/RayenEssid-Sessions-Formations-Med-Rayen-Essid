import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleEspacePublicRoutingModule } from './public-routing.module';

import { DetailsFormationComponent } from './details-formation/details-formation.component';
import { RechercheFormationComponent } from './recherche-formation/recherche-formation.component';
import { AccueilComponent } from './accueil/accueil.component';
import { SearchModuleComponent } from "./search-module/search-module.component";
// Barre de navigation pour l'espace public
import { NavBarComponent } from "./nav-bar/nav-bar.component";

// Composant pour l'inscription d'un candidat
import { AddCandidatComponent } from './add-candidat/add-candidat.component';

// FormsModule : Pour utiliser ngModel (liaison de données bidirectionnelle)
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AccueilComponent,              // Page d'accueil
    DetailsFormationComponent,     // Détails formation
    RechercheFormationComponent,   // Recherche formations
    AddCandidatComponent           // Inscription candidat
  ],

  // imports : Ce que ce module UTILISE (autres modules, composants)
  imports: [
    CommonModule,                          // Directives Angular communes
    ModuleEspacePublicRoutingModule,       // Routes de l'espace public
    SearchModuleComponent,                 // Composant de recherche
    NavBarComponent,                       // Barre de navigation
    FormsModule                           // Pour les formulaires (ngModel)
  ]
})
export class PublicModule { }
