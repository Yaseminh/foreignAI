import { Component } from '@angular/core';
import {Info, DateTime } from 'luxon';

@Component({
    selector: 'app-timezone',
    templateUrl: './timezone.component.html',
    styleUrls: ['./timezone.component.css']
})
export class TimezoneComponent {
    browserTimestamp: number = new Date().getTime();
    tokyoTime: string = '';
    tokyoTime2: string = '';
    browserTimezone: string = '';
    browserTimeLocal: string = '';
    browserLanguage: string = '';
    browserDateTime2: string = '';
    commonTimeZone: string = '';
    convertedBrowserLangTime: string = '';
    constructor() {
        this.convertToTokyoTime();
    }

    convertToTokyoTime() {
        const browserTimezone = DateTime.local().zoneName;
        const browserDateTime = DateTime.fromMillis(this.browserTimestamp, {zone: browserTimezone});
        this.browserTimezone = browserDateTime.zoneName;
        this.browserTimeLocal = browserDateTime.toFormat('dd.MM.yyyy HH:mm:ss');
        this.tokyoTime = browserDateTime.setZone('Asia/Tokyo').toFormat('dd.MM.yyyy HH:mm:ss');
        this.browserTimezone = DateTime.local().zoneName;
        // Tarayıcının dil ayarlarını al
        this.browserLanguage = navigator.language;
        // Tarayıcının dil ayarlarına göre tarih ve saat bilgisini al
        // Dilin yaygın olarak kullanılan zaman dilimini belirle (örneğin "tr" için Europe/Istanbul)


        // this.tokyoTime'nın timestampe çevrilmiş halini al
        // Şu anki tarihi ve saati Tokyo'nun zaman dilimine göre al
        const nowInTokyo = DateTime.local().setZone('Asia/Tokyo');

        // this.tokyoTime'nın timestampe çevrilmiş halini al
        //const tokyoTimestamp = DateTime.fromFormat(this.tokyoTime, 'dd.MM.yyyy HH:mm:ss', { zone: 'Asia/Tokyo' }).toMillis();

        // tokyoTimestamp'i kullanarak this.browserDateTime2'yi oluştur
        this.browserDateTime2 = nowInTokyo
            .setLocale(this.browserLanguage)
            .toLocaleString({
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });

        Info.defaultLocale = this.browserLanguage;

// Tarayıcının dil ayarlarını al
        const browserLanguage = window.navigator.language;

// Dil ayarlarını Luxon'a tanıt
        Info.defaultLocale = browserLanguage;

// Şu anki tarihi ve saatleri al
        const nowInArabic = DateTime.local().setZone('Asia/Riyadh');

// Arapça tarih ve saat formatını elde et
        const formattedDateTime = nowInArabic.toLocaleString({
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
        });




        console.log("ddd",formattedDateTime); //

        // Arapça tarih formatını elde et
        const year = nowInArabic.toFormat('yyyy');
        const month = nowInArabic.toFormat('MM');
        const day = nowInArabic.toFormat('dd');
        const hour = nowInArabic.toFormat('HH');
        const minute = nowInArabic.toFormat('mm');
        const second = nowInArabic.toFormat('ss');
        console.log(`Yıl: ${year}, Ay: ${month}, Gün: ${day}, Saat: ${hour}, Minute: ${minute}, Second: ${second}`); // Yıl, ay ve gün bilgilerini yazdır



        // Tarayıcının dil ayarlarını al
        const browserLanguage2 = window.navigator.language;

// Dil ayarlarını Luxon'a tanıt
        Info.defaultLocale = browserLanguage2;

// Şu anki tarihi ve saatleri al
        const nowInArabic2 = DateTime.local().setZone('Asia/Riyadh');

// Yıl, ay, gün, saat, dakika ve saniye bilgilerini al
        const year2 = nowInArabic2.toFormat('yyyy');
        const month2 = nowInArabic2.toFormat('MM');
        const day2 = nowInArabic2.toFormat('dd');
        const hour2 = nowInArabic2.toFormat('HH');
        const minute2 = nowInArabic2.toFormat('mm');
        const second2= nowInArabic2.toFormat('ss');

// Yeni bir Luxon tarih nesnesi oluştur
        const formattedDateTime2 = DateTime.fromObject({
            year: parseInt(year2),
            month: parseInt(month2),
            day: parseInt(day2),
            hour: parseInt(hour2),
            minute: parseInt(minute2),
            second: parseInt(second2),
            zone: 'Asia/Riyadh' // Şehir ismi değil, tam zaman dilimi adını kullanın
        }).toLocaleString({
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
            timeZoneName: 'short',
            hourCycle: 'h23'
        });

        console.log(formattedDateTime2); // Tam tarih-saat birleşimini yazdır





    }
    getCommonTimeZone(language: string): string {
        // Dilleri ve bunlara karşılık gelen zaman dilimlerini içeren bir sözlük
        const timeZoneDictionary: { [key: string]: string } = {
            'tr': 'Europe/Istanbul',
            'en': 'America/New_York',
            'fr': 'Europe/Paris',
            'ja': 'Asia/Tokyo'
            // Diğer diller için eklemeler yapabilirsiniz
        };

        // Dil koduna karşılık gelen zaman dilimini al
        const timeZone = timeZoneDictionary[language.toLowerCase()];

        // Eğer dil bulunamazsa, varsayılan olarak UTC'yi kullan
        return timeZone || 'UTC';
    }


}
