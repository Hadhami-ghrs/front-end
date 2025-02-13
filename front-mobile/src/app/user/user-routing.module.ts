import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserUpdateComponent } from './user-update/user-update.component';



const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'create', component: UserDeleteComponent },
  { path: 'update/:id', component: UserUpdateComponent },
  { path: 'delete/:id', component: UserDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
