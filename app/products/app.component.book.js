System.register(['angular2/core', "angular2/router"], function(exports_1, context_1) {
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
    var core_1, router_1;
    var BookComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            BookComponent = (function () {
                function BookComponent(_params) {
                    this._params = _params;
                    this.bookid = _params.get('id');
                }
                BookComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'dev/products/app.component.book.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams])
                ], BookComponent);
                return BookComponent;
            }());
            exports_1("BookComponent", BookComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RzL2FwcC5jb21wb25lbnQuYm9vay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BO2dCQUlJLHVCQUFvQixPQUFtQjtvQkFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtvQkFFbkMsSUFBSSxDQUFDLE1BQU0sR0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsQyxDQUFDO2dCQVhMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsV0FBVyxFQUFDLHNDQUFzQztxQkFDckQsQ0FBQzs7aUNBQUE7Z0JBVUYsb0JBQUM7WUFBRCxDQVJBLEFBUUMsSUFBQTtZQVJELHlDQVFDLENBQUEiLCJmaWxlIjoicHJvZHVjdHMvYXBwLmNvbXBvbmVudC5ib29rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1JvdXRlUGFyYW1zfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlVXJsOidkZXYvcHJvZHVjdHMvYXBwLmNvbXBvbmVudC5ib29rLmh0bWwnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQm9va0NvbXBvbmVudFxyXG57XHJcbmJvb2tpZDpTdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcGFyYW1zOlJvdXRlUGFyYW1zKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuYm9va2lkPV9wYXJhbXMuZ2V0KCdpZCcpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
