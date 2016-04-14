import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {RouteParams} from "angular2/router";
import {Pen1Component} from "./pen/app.component.pen1";
import {Pen2Component} from "./pen/app.component.pen2";


@Component({
    templateUrl:'dev/products/app.component.pen.html'
    template: `
            <nav>
                <ul>
                <li>
                <a [routerLink]="['Pen1']">Pen1</a></li>
                
                <li>
                <a [routerLink]="['Pen2']">Pen2</a></li>
                </ul>
            
            </nav>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    })
@RouteConfig([
    {path: '/', name: 'Pen1', component: Pen1Component, useAsDefault: true},
    {path: '/pen2', name: 'Pen2', component: Pen2Component}

export class PenComponent {
}