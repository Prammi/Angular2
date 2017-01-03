import { ModuleWithProviders } from  '@angular/core';
import { Routes, RouterModule} from  '@angular/router';
import { AboutComponent } from './About/about.component' ;
import { ServicesComponent } from './Service/services.component' ;

export const router : Routes = [
    { path: '', redirectTo: 'about', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'services', component: ServicesComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);