import UIComponent from "./UIComponent";

interface GroupComponent {
  sort: number;
  label: string;
  description: string;
  validate: {
    required: boolean;
    immutable: boolean;
  };
  jsonKey: string;
  icon: string;
  level: number;
  uiType: string;
  subParameters: Array<UIComponent>;
}

export default GroupComponent;
