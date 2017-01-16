import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {CommonDirectivesModule} from 'core/common-directives';
import {CommonDialogsModule} from 'core/common-dialogs';

import {RollcallFormRoutingModule} from './form-routing.module';
import {RollcallFormEditorComponent} from './form-editor.component';
import {RollcallDetailViewComponent} from './detail-view.component';
import {RollcallListViewComponent} from './list-view.component';
import {RollcallTileViewComponent} from './tile-view.component';
import {RollcallToggleBarComponent} from './toggle-bar.component';
import {RollcallStatusComponent} from './rollcall-status.component';
import {FocusDirective} from './focus.directive';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CommonDirectivesModule,
        CommonDialogsModule,
        RollcallFormRoutingModule,
    ],
    declarations: [
        RollcallFormEditorComponent,
        RollcallDetailViewComponent,
        RollcallListViewComponent,
        RollcallTileViewComponent,
        RollcallToggleBarComponent,
        RollcallStatusComponent,
        FocusDirective,
    ],
})
export class RoolcallFormEditorModule {}