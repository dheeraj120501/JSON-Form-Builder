import Input from "./Input";
import Select from "./Select";
import Group from "./Group";
import {
  DropDownComponent,
  GroupComponent,
  TextFieldComponent,
} from "../types";

const FieldFactory = (obj: any) => {
  switch (obj.uiType) {
    case "Select":
      return <Select input={obj as DropDownComponent} />;
    case "Group":
      return <Group input={obj as GroupComponent} />;
    case "Input":
      return <Input input={obj as TextFieldComponent} />;
    default:
      return <></>;
  }
};

export default FieldFactory;
