import * as ko from "knockout";

import "./object-editor.scss";
const templateHtml = require("./object-editor.html");

import {
  PropertyGridObjectEditorModel,
  SurveyElementEditorContentModel,
} from "../questionEditors/questionEditor";

export class ObjectEditor {
  constructor(
    public koIsOldTableAppearance: ko.Observable<boolean>,
    public koElementEditor: ko.Observable<
      SurveyElementEditorContentModel
    >,
    public koHasObject: ko.Observable<boolean>
  ) {}
}

ko.components.register("svd-object-editor", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const model: PropertyGridObjectEditorModel = params.model;
      return new ObjectEditor(
        model.koIsOldTableAppearance,
        model.koElementEditor,
        model.koHasObject
      );
    },
  },
  template: templateHtml,
});
