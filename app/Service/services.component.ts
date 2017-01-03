import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Contact } from '../Interface/contact';
import { ContactService } from '../Service/ContactService';
import { Post } from './Post';

@Component({
    selector: "serv-Conf",
    templateUrl: 'app/Templates/SComponent.html',

 
})
export class ServicesComponent implements OnInit {

  //  gotcontacts: Contact;
    private _postArray : Post[];
    constructor(private _router: Router,private _contactService :ContactService) { }

    navigateFn() {
        this._router.navigate(['about']);
    }

    ngOnInit() {
         this._contactService.getContacts().then(res=> this.showMethod(res));
    }
    showMethod(result:Post[]){
        debugger;
        this._postArray=result;
        console.log(result);
    }   
}