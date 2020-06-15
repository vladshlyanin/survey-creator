import * as ko from "knockout";

import "./object-editor-tab.scss";
import { SurveyElementEditorTabModel } from "../questionEditors/questionEditor";
import { SurveyObjectProperty } from "../objectProperty";
const templateHtml = require("./object-editor-tab.html");

export class ObjectEditorTab {
  constructor(
    public name: string,
    public editorProperties: Array<SurveyObjectProperty>,
    public koAfterRenderProperty: any
  ) {}
}

ko.components.register("svd-object-editor-tab", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const model: SurveyElementEditorTabModel = params.model;
      return new ObjectEditorTab(
        model.name,
        model.editorProperties,
        model.koAfterRenderProperty
      );
    },
  },
  template: templateHtml,
});
