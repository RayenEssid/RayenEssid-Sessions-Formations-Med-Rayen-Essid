import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCandidatComponent } from './add-candidat/add-candidat.component';
import { ListCandidatComponent } from './list-candidat/list-candidat.component';
import { EditCandidatComponent } from './edit-candidat/edit-candidat.component';


const routes: Routes = [
  {path:"", component: ListCandidatComponent},
  {path:"add", component: AddCandidatComponent},
  {path:"edit/:id", component: EditCandidatComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatsRoutingModule { }
