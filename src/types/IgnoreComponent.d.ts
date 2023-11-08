import { UIComponent } from ".";

interface IgnoreComponent {
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
  placeholder: string;
  conditions: Array<IgnoreCondition>;
  subParameters: Array<UIComponent>;
}

interface IgnoreCondition {
  jsonKey: string;
  op: string;
  value: string;
  action: string;
}

export default IgnoreComponent;
