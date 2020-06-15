import * as ko from "knockout";

import "./object-editor-content.scss";
import { SurveyElementEditorContentModel } from "../questionEditors/questionEditor";
const templateHtml = require("./object-editor-content.html");

export class ObjectEditorContent {
  constructor(
    public useTabsInElementEditor: any,
    public koTabs: any,
    public koActiveTab: any,
    public onTabClick: any
  ) {}
}

ko.components.register("svd-object-editor-content", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const model: SurveyElementEditorContentModel =
        params.elementEditorContent;
      return new ObjectEditorContent(
        model.useTabsInElementEditor,
        model.koTabs,
        model.koActiveTab,
        model["onTabClick"] //TODO the property doesn't exist in SurveyElementEditorContentModel but exists in SurveyQuestionEditor
      );
    },
  },
  template: templateHtml,
});
