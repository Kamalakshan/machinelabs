import { NgModule } from '@angular/core';

import { AceEditorComponent } from './ace-editor/ace-editor.component';


@NgModule({
  declarations: [
    AceEditorComponent
  ],
  exports: [
    AceEditorComponent
  ]
})
export class EditorModule {}

