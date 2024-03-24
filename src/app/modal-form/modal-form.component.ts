import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-modal-form',
    templateUrl: './modal-form.component.html',
    styleUrls: ['./modal-form.component.scss']
})
export class ModalFormComponent {

    @ViewChild('dialog') dialog!: ElementRef<HTMLDialogElement>;

    closeModal() {
        this.dialog.nativeElement.close();
        this.dialog.nativeElement.classList.remove('opened');
    }

    openModal() {
        this.dialog.nativeElement.showModal();
        this.dialog.nativeElement.classList.add('opened');
    }

    ngAfterViewInit() {
        this.dialog.nativeElement.addEventListener('click', (event: MouseEvent) => {
            const target = event.target as Element;
            if (target.nodeName === 'DIALOG') {
                this.closeModal();
            }
        });
    }


}
