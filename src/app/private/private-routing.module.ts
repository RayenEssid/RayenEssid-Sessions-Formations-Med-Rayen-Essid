import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'candidats', loadChildren: () => 
    import('./candidats/candidats.module')// Import dynamique
    .then(m => m.CandidatsModule) },      // Charge le module
  { path: 'formateurs', loadChildren: () => 
    import('./formateurs/formateurs.module').then(m => m.FormateursModule) },
  { path: '', loadChildren: () =>
     import('./formations/formations.module').then(m => m.FormationsModule) },
];

@NgModule({
   // forChild() : Pour les modules enfants (pas racine)
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
