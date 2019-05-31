import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { APP_ROUTING } from './app.routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { UserService} from "./services/user.service";

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UserEditComponent } from './components/user/user-edit.component';
import { NewUserComponent } from './components/user/new-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserEditComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    APP_ROUTING
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
