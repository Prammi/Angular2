import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a routerLink="about" class="navbar-brand">About</a>
            <a routerLink="services" class="navbar-brand">Services</a>
        </div>

    </div>
</div>
<div class="container">
    <router-outlet></router-outlet>
</div>`,
  
})
export class AppComponent  { name = 'hi'; }
