import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TimezoneComponent } from './timezone.component';

@NgModule({
    declarations: [
        TimezoneComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    exports: [
        TimezoneComponent
    ],
    bootstrap: [TimezoneComponent]
})
export class TimezoneModule { }
