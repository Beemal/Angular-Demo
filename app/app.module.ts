/**
 * Created by bimal on 2/17/17.
 */
//we can encapsulate all
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {UserProfileComponent} from './users/user-profile.component';
import {UserFormComponent} from './users/user-form.component';


@NgModule({
    imports:[
        BrowserModule,
        FormsModule
        ],
    declarations: [
         AppComponent,
         UserProfileComponent,
         UserFormComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule{}