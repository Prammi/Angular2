import { Component, OnInit } from "@angular/core";
import { Contact } from '../Interface/contact';
import {ContactService} from '../Service/ContactService';

@Component({
    selector: "about-Conf",
    templateUrl: 'app/Templates/AComponent.html',
   
})

export class AboutComponent implements OnInit {
    newContact: Contact ;

  
    constructor(private _contactService: ContactService) { }
 

    onSelectionChange(status :any) {
        this.newContact.hosting = status;
    }    

    ngOnInit(): any {
        debugger;
        this.newContact = { firstName: '', lastName: '', eMail: '', state: '', hosting:''}
    }
    onSubmit() {
        debugger;
      //  console.log(this.newContact.firstName + ' ' + this.newContact.lastName + ' ' + this.newContact.eMail + '  ' + this.newContact.state + '  ' + this.newContact.hosting);
     this._contactService.insertContacts(this.newContact);

    }
}