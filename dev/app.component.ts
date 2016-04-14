import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {PenComponent} from './products/app.component.pen';
import {BookComponent} from './products/app.component.book';




@Component({
    selector: 'my-app',
    template: `
            <nav>
                <ul>
                <li>
                <a [routerLink]="['Penn']">Pen</a></li>
                
                <li>
                <a [routerLink]="['Book',{id:1}]">Book</a></li>
                </ul>
            
            </nav>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers:[ROUTER_PROVIDERS]

})

@RouteConfig([
    {path: '/penn/...', name: 'Penn', component: PenComponent},
    {path: '/book/:id', name: 'Book', component: BookComponent}


])


export class AppComponent {

}
