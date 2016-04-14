System.register(['angular2/core', 'angular2/router', "./pen/app.component.pen1", "./pen/app.component.pen2"], function(exports_1, context_1) {
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
    var core_1, router_1, app_component_pen1_1, app_component_pen2_1;
    var PenComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_component_pen1_1_1) {
                app_component_pen1_1 = app_component_pen1_1_1;
            },
            function (app_component_pen2_1_1) {
                app_component_pen2_1 = app_component_pen2_1_1;
            }],
        execute: function() {
            PenComponent = (function () {
                function PenComponent() {
                }
                PenComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'dev/products/app.component.pen.html',
                        template: "\n            <nav>\n                <ul>\n                <li>\n                <a [routerLink]=\"['Pen1']\">Pen1</a></li>\n                \n                <li>\n                <a [routerLink]=\"['Pen2']\">Pen2</a></li>\n                </ul>\n            \n            </nav>\n        <router-outlet></router-outlet>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Pen1', component: app_component_pen1_1.Pen1Component, useAsDefault: true },
                        { path: '/pen2', name: 'Pen2', component: app_component_pen2_1.Pen2Component }]), 
                    __metadata('design:paramtypes', [])
                ], PenComponent);
                return PenComponent;
            }());
            exports_1("PenComponent", PenComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RzL2FwcC5jb21wb25lbnQucGVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBNEJBO2dCQUFBO2dCQUNBLENBQUM7Z0JBdEJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsV0FBVyxFQUFDLHFDQUFxQzt3QkFDakQsUUFBUSxFQUFFLHlVQVlUO3dCQUNELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO3FCQUM5QixDQUFDO29CQUNMLG9CQUFXLENBQUM7d0JBQ1QsRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGtDQUFhLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBQzt3QkFDdkUsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGtDQUFhLEVBQUMsQ0FBQSxDQUFBOztnQ0FBQTtnQkFHM0QsbUJBQUM7WUFBRCxDQURBLEFBQ0MsSUFBQTtZQURELHVDQUNDLENBQUEiLCJmaWxlIjoicHJvZHVjdHMvYXBwLmNvbXBvbmVudC5wZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Um91dGVDb25maWcsIFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5pbXBvcnQge1JvdXRlUGFyYW1zfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XHJcbmltcG9ydCB7UGVuMUNvbXBvbmVudH0gZnJvbSBcIi4vcGVuL2FwcC5jb21wb25lbnQucGVuMVwiO1xyXG5pbXBvcnQge1BlbjJDb21wb25lbnR9IGZyb20gXCIuL3Blbi9hcHAuY29tcG9uZW50LnBlbjJcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlVXJsOidkZXYvcHJvZHVjdHMvYXBwLmNvbXBvbmVudC5wZW4uaHRtbCdcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJ1BlbjEnXVwiPlBlbjE8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWydQZW4yJ11cIj5QZW4yPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG4gICAgYCxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXHJcbiAgICB9KVxyXG5AUm91dGVDb25maWcoW1xyXG4gICAge3BhdGg6ICcvJywgbmFtZTogJ1BlbjEnLCBjb21wb25lbnQ6IFBlbjFDb21wb25lbnQsIHVzZUFzRGVmYXVsdDogdHJ1ZX0sXHJcbiAgICB7cGF0aDogJy9wZW4yJywgbmFtZTogJ1BlbjInLCBjb21wb25lbnQ6IFBlbjJDb21wb25lbnR9XHJcblxyXG5leHBvcnQgY2xhc3MgUGVuQ29tcG9uZW50IHtcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
