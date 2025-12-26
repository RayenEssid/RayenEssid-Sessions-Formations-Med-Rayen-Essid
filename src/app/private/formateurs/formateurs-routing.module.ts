import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFormateurComponent } from './list-formateur/list-formateur.component';
import { AddFormateurComponent } from './add-formateur/add-formateur.component';
import { EditFormateurComponent } from './edit-formateur/edit-formateur.component';

const routes: Routes = [
    {path:"", component: ListFormateurComponent},
    {path:"add", component: AddFormateurComponent},
    {path:"edit/:id", component: EditFormateurComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormateursRoutingModule { }
