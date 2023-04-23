import {
  SwitchComponent,
  GroupComponent,
  TextFieldComponent,
  DropDownComponent,
  RadioComponent,
} from ".";

type UIComponent =
  | GroupComponent
  | TextFieldComponent
  | DropDownComponent
  | SwitchComponent
  | RadioComponent;

export default UIComponent;
