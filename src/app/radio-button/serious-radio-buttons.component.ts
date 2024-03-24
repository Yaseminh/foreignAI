import { Component } from '@angular/core';

@Component({
    selector: 'app-serious-radio-buttons',
    templateUrl: './serious-radio-buttons.component.html',
    styleUrls: ['./serious-radio-buttons.component.css']
})
export class SeriousRadioButtonsComponent {
    selectedOption: string | null = null;

    options = [
        { label: 'Arasira', value: '5 dakika/gün (50xp)' },
        { label: 'Ilgili', value: '10 dakika/gün (100xp)' },
        { label: 'Ciddi', value: '30 dakika/gün (300xp)' },
        { label: 'Kararlı', value: '60 dakika/gün (600xp)' },
        { label: 'Adamış', value: '120 dakika/gün (1200xp)' }
    ];

    selectOption(value: string) {
        this.selectedOption = value;
    }
}
