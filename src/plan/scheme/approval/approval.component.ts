import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {ListOption} from 'core/models';

@Component({
    selector: 'scheme-approval-container',
    template: `
<nav-tabs [options]="options"></nav-tabs>
<router-outlet></router-outlet>
    `,
})
export class SchemeApprovalComponent {
    options: ListOption[] = [
        {type: 'todo', label: '待审批', class: 'badge-success'},
        {type: 'done', label: '已审批', class: 'badge-danger'},
        {type: 'tobe', label: '未审核', class: 'badge-warning'},
    ];
}
