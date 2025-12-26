import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'candidats', loadChildren: () => import('./candidats/candidats.module').then(m => m.CandidatsModule) },
  { path: 'formateurs', loadChildren: () => import('./formateurs/formateurs.module').then(m => m.FormateursModule) },
  { path: '', loadChildren: () => import('./formations/formations.module').then(m => m.FormationsModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
