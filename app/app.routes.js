"use strict";
var router_1 = require('@angular/router');
var about_component_1 = require('./About/about.component');
var services_component_1 = require('./Service/services.component');
exports.router = [
    { path: '', redirectTo: 'about', pathMatch: 'full' },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'services', component: services_component_1.ServicesComponent }
];
exports.routes = router_1.RouterModule.forRoot(exports.router);
//# sourceMappingURL=app.routes.js.map