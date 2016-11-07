import {NgModule} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';

import {PlanCommonModule} from '../../../common/module';
import {SchemePublicViewerModule} from '../../common/public-viewer/scheme-viewer.module';
import {SchemePublicItemComponent} from './public-item.component';

@NgModule({
    imports: [
        CommonModule,
        PlanCommonModule,
        SchemePublicViewerModule,
    ],
    declarations: [
        SchemePublicItemComponent,
    ],
    exports: [
        SchemePublicItemComponent,
    ],
    providers: [
        Title,
    ],
})
export class SchemePublicItemModule {}
