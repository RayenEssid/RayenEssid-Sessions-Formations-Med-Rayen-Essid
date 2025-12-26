import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [{
    path: 'admin-space',
    loadChildren: () => import("./private/private.module").then(m => m.PrivateModule)
},{
    path: 'public-space',
    loadChildren: () => import("./public/public.module").then(m => m.PublicModule)
},{
    path: '', redirectTo: '/public-space', pathMatch:'full'
}
];
