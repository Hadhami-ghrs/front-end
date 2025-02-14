import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
 { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
 { path: 'auth/login',canActivate: [AuthGuard], component: LoginComponent },

   {
    path:'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
