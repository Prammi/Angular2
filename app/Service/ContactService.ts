import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import { Post } from './Post';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Contact } from '../Interface/contact';

@Injectable()
export class ContactService {
  private _resp: Response;

  insertContacts(newContact: any) {
    return this._http.post('http://localhost:26826/api/contact/InsertContact', newContact)
      .toPromise()
      .then(res => this._resp = res)
      .catch(this.handleError);
  }


  constructor(private _http: Http) { }

  getContacts(): Promise<Contact[]> {
    return this._http.get('http://localhost:26826/api/contact/getcontacts')
      .toPromise()
      .then(response => response.json() as Contact[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}