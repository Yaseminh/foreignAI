import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyButtonComponent } from './my-button.component';


@NgModule({
    declarations: [MyButtonComponent],
    exports: [ MyButtonComponent],
    imports: [
        CommonModule
    ],
})


export class MyButtonModule { }