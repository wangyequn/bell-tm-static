import {Component} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {ReissueAdminService} from '../admin.service';

/**
 * 补办学生证列表（管理员）。
 */
@Component({
    selector: 'reissue-admin-list',
    styleUrls: ['admin-list.component.scss'],
    templateUrl: 'admin-list.component.html',
})
export class ReissueAdminListComponent {
    statuses: any[] = [
        {status: 'COMMITTED', label: '待审核', class: 'tag-success'},
        {status: 'APPROVED',  label: '已审核', class: 'tag-info'},
        {status: 'MAKING',    label: '制作中', class: 'tag-info'},
        {status: 'FINISHED',  label: '已完成', class: 'tag-danger'},
    ];

    private counts: {[key: string]: number};
    private forms: any[];
    private status = 'COMMITTED';
    private offset: number;
    private max = 10;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private service: ReissueAdminService,
    ) {
        this.route.params.subscribe(params => {
            this.status = params['status'];
            this.loadData(0);
        });
    }

    loadData(offset: number) {
        this.offset = offset;
        this.service.loadList({
            status: this.status,
            offset: this.offset,
            max: this.max,
        }).subscribe(result => {
            this.counts = result.counts;
            this.forms = result.forms;
        });
    }
}