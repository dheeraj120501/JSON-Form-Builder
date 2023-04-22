interface DropDownComponent {
  sort: number;
  label: string;
  description: string;
  validate: {
    required: boolean;
    immutable: boolean;
    defaultValue: string;
    options: Array<SelectOption>;
  };
  jsonKey: string;
  icon: string;
  level: number;
  uiType: string;
  placeholder: string;
}

interface SelectOption {
  label: string;
  value: string;
  description: string;
  icon: string;
}

export default DropDownComponent;
