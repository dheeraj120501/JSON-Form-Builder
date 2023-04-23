interface RadioComponent {
  sort: number;
  label: string;
  description: string;
  validate: {
    required: boolean;
    immutable: boolean;
    defaultValue: string;
    options: Array<RadioOption>;
  };
  jsonKey: string;
  icon: string;
  level: number;
  uiType: string;
  placeholder: string;
}

interface RadioOption {
  label: string;
  value: string;
  description: string;
  icon: string;
}

export default RadioComponent;
