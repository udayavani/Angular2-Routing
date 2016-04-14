import {Component} from 'angular2/core';
import {RouteParams} from "angular2/router";

@Component({
    templateUrl:'dev/products/app.component.book.html'
})

export class BookComponent
{
bookid:String;

    constructor(private _params:RouteParams)
    {
        this.bookid=_params.get('id');
    }
}