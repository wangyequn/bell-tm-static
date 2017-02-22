import {Directive, EventEmitter, Input, Output} from '@angular/core';

import {RevokeOptions, Workflow} from './workflow.service';

@Directive({
    selector: 'button[workflow-revoke]',
    host: {
        '(click)': 'click()',
        '[class]': '"btn btn-danger"',
        '[disabled]': 'workflow.pending',
    },
})
export class WorkflowRevokeButton {
    @Input('workflow-revoke') options: RevokeOptions;
    @Output() accepted = new EventEmitter<any>();

    constructor(private workflow: Workflow) {}

    click() {
        this.workflow.revoke(this.options).then(data => {
            this.accepted.emit(data);
        }, (error) => {
            alert(error);
        });
    }
}