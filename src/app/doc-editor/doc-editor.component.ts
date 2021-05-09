import { Component, OnInit } from '@angular/core';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

@Component({
  selector: 'app-doc-editor',
  templateUrl: './doc-editor.component.html',
  styleUrls: ['./doc-editor.component.scss'],
})
export class DocEditorComponent implements OnInit {
  public Editor = DecoupledEditor;

  onReady(editor) {
    editor.ui
      .getEditableElement()
      .parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
      );
  }

  document = '<p>Hello, world!</p>';

  constructor() {}

  ngOnInit(): void {}

  onChange({ editor }: ChangeEvent) {
    const data = editor.getData();

    // console.log(data);
  }
}
