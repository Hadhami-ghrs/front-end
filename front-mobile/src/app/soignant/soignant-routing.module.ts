import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path:"Add-soignant",component:SoignantAddComponent},
  // {path:"Delete-soignant",component:SoignantDeleteComponent},
  // {path:"List-soignant",component:SoignantListComponent},
  // {path:"Update-soignant",component:SoignantUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoignantRoutingModule { }
