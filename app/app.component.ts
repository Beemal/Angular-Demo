/**
 * Created by bimal on 2/17/17.
 */
import { Component } from '@angular/core';
import { User } from './shared/models/user';


@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls:['./app/app.component.css']
})

export class AppComponent {
    message = 'Hello message!';
    users :User[]= [{
        id: 25,
        name: 'Bimal',
        username: 'bimalparajuli'
    },
    {
        id: 28,
        name: 'Bishal',
        username: 'bishalpoudel'
    },
    {
        id: 28,
        name: 'Pratik',
        username: 'pratikacharya'
    }
    ];
    activeUser :User;

    selectUser(user) {
        this.activeUser = user;
        console.log(this.activeUser);
    }

    onUserCreated(event){
        this.users.push(event.user);
    }

}