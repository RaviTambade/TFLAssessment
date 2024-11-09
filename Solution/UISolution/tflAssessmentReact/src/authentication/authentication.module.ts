import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './Components/Login';
import { UpdateContactNumber } from './Components/UpdateContactNumber';
import { ChangePassword } from './Components/ChangePassword';
import { UsersList } from './Components/UsersList';
import { NewUserComponent } from './Components/NewUser';
import { AuthService } from './services/auth.service';


 const authRoutes:Routes=[
  { path: 'login', component: Login },
]

@NgModule({
  declarations: [
    Login,
    UpdateContactNumber,
    ChangePassword,
    UsersList,
    NewUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,RouterModule.forChild(authRoutes)
  ],
  exports:[Login],
  
  providers:[
    AuthService
  ]
})

export class AuthenticationModule { }
