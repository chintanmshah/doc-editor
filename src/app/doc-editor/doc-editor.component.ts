import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

@Component({
  selector: 'app-doc-editor',
  templateUrl: './doc-editor.component.html',
  styleUrls: ['./doc-editor.component.scss'],
})
export class DocEditorComponent implements OnInit {
  public Editor = ClassicEditor;
  document = '<p>Hello, world!</p>';

  constructor() {}

  ngOnInit(): void {}

  onChange({ editor }: ChangeEvent) {
    const data = editor.getData();

    // console.log(data);
  }
}
