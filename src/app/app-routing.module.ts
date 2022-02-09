import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { MainComponent } from './home/main/main.component';
import { AuthGuard } from './shared/auth.guard';
import { IsLoggedinGuard } from './shared/is-loggedin.guard';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent,canActivate:[IsLoggedinGuard]},
  {path:'signup',component:SignupComponent},
  {path:'main',loadChildren:()=>import('./home/home.module').then(a=>a.HomeModule),canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
