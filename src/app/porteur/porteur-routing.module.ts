import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorteurAddComponent } from './porteur-add/porteur-add.component';
import { PorteurDeleteComponent } from './porteur-delete/porteur-delete.component';
import { PorteurListComponent } from './porteur-list/porteur-list.component';
import { PorteurUpdateComponent } from './porteur-update/porteur-update.component';
import { AuthGuard } from '../auth/auth.guard';
import { PorteurComponent } from './porteur.component';

const routes: Routes = [
  {
    path:"", component:PorteurComponent,canActivate: [AuthGuard]
  },
  {
    path:"add-porteur", component:PorteurAddComponent,canActivate: [AuthGuard]
  },
  {
    path:"update-porteur/:id", component:PorteurUpdateComponent,canActivate: [AuthGuard]
  },
  {
    path:"delete-porteur", component:PorteurDeleteComponent,canActivate: [AuthGuard]
  },
  {
    path:"detail-porteur", component:PorteurListComponent,canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PorteurRoutingModule { }
