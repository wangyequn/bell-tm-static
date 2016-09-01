import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PlanCommonModule} from '../../common/module';
import {CommonDirectivesModule} from '../../../core/common-directives';
import {VisionViewerComponent} from './vision-viewer.component';

@NgModule({
    imports: [
        CommonModule,
        PlanCommonModule,
        CommonDirectivesModule,
    ],
    declarations: [
        VisionViewerComponent,
    ],
    exports: [
        VisionViewerComponent,
    ],
})
export class VisionViewerModule {}