import {Component, ElementRef} from '@angular/core';

import {Label} from 'core/models';

import {RollcallLabels, RollcallType} from '../../rollcall/form/form.model';
import {AttendanceItemMainService} from './main.service';

@Component({
    selector: 'attendance-item',
    styleUrls: ['item.component.scss'],
    templateUrl: 'item.component.html',
})
export class AttendanceItemComponent {
    rollcalls: any[];
    leaves: any[];
    student: any;
    loaded = false;
    constructor(elementRef: ElementRef, service: AttendanceItemMainService) {
        const studentId = elementRef.nativeElement.getAttribute('studentId');
        service.loadItem(studentId).subscribe(dto => {
            this.loaded = true;
            this.rollcalls = dto.list.filter((it: any) => it.type !== 4);
            this.leaves = dto.list.filter((it: any) => it.type === 4);
            this.student = dto.student;
        }, (error) => {
            if (error.status === 403) {
                alert('无权访问。');
            }
        });
    }

    getLabels(type: RollcallType): Label[] {
        return RollcallLabels[type];
    }
}
