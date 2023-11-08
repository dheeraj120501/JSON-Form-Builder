import {
  CheckboxComponent,
  GroupComponent,
  TextFieldComponent,
  DropDownComponent,
  RadioComponent,
} from ".";

type UIComponent =
  | GroupComponent
  | TextFieldComponent
  | DropDownComponent
  | CheckboxComponent
  | RadioComponent;

export default UIComponent;
