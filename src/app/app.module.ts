import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { routing } from './app.routing';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        routing
    ],
    declarations: [
        AppComponent
    ],
    entryComponents: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
