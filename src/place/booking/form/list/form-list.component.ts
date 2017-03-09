import {Component} from '@angular/core';

import {CommonDialog} from 'core/common-dialogs';

import {BookingFormService} from '../form.service';

@Component({
    styleUrls: ['form-list.component.scss'],
    templateUrl: 'form-list.component.html',
})
export class BookingFormListComponent {
    user: {phoneNumber: string};
    count: number;
    forms: any[];
    max = 10;

    constructor(private dialog: CommonDialog, private service: BookingFormService) {
        this.loadData(0);
    }

    loadData(offset: number) {
        this.service.loadList({offset, max: this.max}).subscribe(data => {
            this.user = data.user;
            this.count = data.count;
            this.forms = data.forms;
        });
    }

    showNotice() {
        this.dialog.notice();
    }
}
