import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from "./components/user/user.component";
import { UserEditComponent } from "./components/user/user-edit.component";
import { NewUserComponent } from "./components/user/new-user.component";


const app_routes: Routes = [
  { path: 'users', component: UserComponent },
  { path: 'users/new', component: NewUserComponent },
  { path: 'users/:id', component: UserEditComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'users'},
  { path: '', redirectTo: 'users', pathMatch: 'full' }
];


export const APP_ROUTING = RouterModule.forRoot(app_routes);