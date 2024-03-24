// modal-form.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalFormComponent } from './modal-form.component';
import {SeriousRadioButtonsModule} from "../radio-button/serious-radio-buttons.module";

@NgModule({
    declarations: [ModalFormComponent],
    imports: [CommonModule, SeriousRadioButtonsModule],
    exports: [ModalFormComponent]
})
export class ModalFormModule { }
