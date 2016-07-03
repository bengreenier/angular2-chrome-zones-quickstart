import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<h1>{{AppName}}</h1>'
})
export class AppComponent implements OnInit {
    public AppName : string = "My First Angular App";

    ngOnInit() {
        (<any>chrome).storage.local.set({key: "val"}, () => {
            // use setTimeout to simulate some other async work
            // mostly just to illustrate the point better
            // this could be removed (and just be this.AppName = "StorageSet")
            // or it could be something actually async like a web request
            setTimeout(() => {
                this.AppName = "StorageSet";
            }, 5000);
        });
    }
}
