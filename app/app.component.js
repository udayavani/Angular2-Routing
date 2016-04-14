System.register(['angular2/core', 'angular2/router', './products/app.component.pen', './products/app.component.book'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, app_component_pen_1, app_component_book_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_component_pen_1_1) {
                app_component_pen_1 = app_component_pen_1_1;
            },
            function (app_component_book_1_1) {
                app_component_book_1 = app_component_book_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n            <nav>\n                <ul>\n                <li>\n                <a [routerLink]=\"['Penn']\">Pen</a></li>\n                \n                <li>\n                <a [routerLink]=\"['Book',{id:1}]\">Book</a></li>\n                </ul>\n            \n            </nav>\n        <router-outlet></router-outlet>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [router_1.ROUTER_PROVIDERS]
                    }),
                    router_1.RouteConfig([
                        { path: '/penn/...', name: 'Penn', component: app_component_pen_1.PenComponent },
                        { path: '/book/:id', name: 'Book', component: app_component_book_1.BookComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQ0E7Z0JBQUE7Z0JBRUEsQ0FBQztnQkE5QkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLCtVQVlUO3dCQUNELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO3dCQUMvQixTQUFTLEVBQUMsQ0FBQyx5QkFBZ0IsQ0FBQztxQkFFL0IsQ0FBQztvQkFFRCxvQkFBVyxDQUFDO3dCQUNULEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxnQ0FBWSxFQUFDO3dCQUMxRCxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsa0NBQWEsRUFBQztxQkFHOUQsQ0FBQzs7Z0NBQUE7Z0JBS0YsbUJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHVDQUVDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVDb25maWcsIFJPVVRFUl9ESVJFQ1RJVkVTLCBST1VURVJfUFJPVklERVJTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtQZW5Db21wb25lbnR9IGZyb20gJy4vcHJvZHVjdHMvYXBwLmNvbXBvbmVudC5wZW4nO1xuaW1wb3J0IHtCb29rQ29tcG9uZW50fSBmcm9tICcuL3Byb2R1Y3RzL2FwcC5jb21wb25lbnQuYm9vayc7XG5cblxuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnUGVubiddXCI+UGVuPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnQm9vaycse2lkOjF9XVwiPkJvb2s8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgICBwcm92aWRlcnM6W1JPVVRFUl9QUk9WSURFUlNdXG5cbn0pXG5cbkBSb3V0ZUNvbmZpZyhbXG4gICAge3BhdGg6ICcvcGVubi8uLi4nLCBuYW1lOiAnUGVubicsIGNvbXBvbmVudDogUGVuQ29tcG9uZW50fSxcbiAgICB7cGF0aDogJy9ib29rLzppZCcsIG5hbWU6ICdCb29rJywgY29tcG9uZW50OiBCb29rQ29tcG9uZW50fVxuXG5cbl0pXG5cblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
