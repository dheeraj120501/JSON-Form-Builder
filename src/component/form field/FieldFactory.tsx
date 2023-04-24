import TextField from "./TextField";
import Select from "./Select";
import Group from "./Group";
import Checkbox from "./Checkbox";
import {
  DropDownComponent,
  GroupComponent,
  TextFieldComponent,
  CheckboxComponent,
  UIComponent,
} from "../../types";

const FieldFactory = (obj: UIComponent) => {
  switch (obj.uiType) {
    case "Select":
      return <Select input={obj as DropDownComponent} />;
    case "Group":
      return <Group input={obj as GroupComponent} />;
    case "Input":
      return <TextField input={obj as TextFieldComponent} />;
    case "Switch":
      return <Checkbox input={obj as CheckboxComponent} />;
    default:
      return <></>;
  }
};

export default FieldFactory;
