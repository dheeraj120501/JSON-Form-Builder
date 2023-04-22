import {
  SwitchComponent,
  GroupComponent,
  TextFieldComponent,
  DropDownComponent,
} from ".";

type UIComponent =
  | GroupComponent
  | TextFieldComponent
  | DropDownComponent
  | SwitchComponent;

export default UIComponent;
