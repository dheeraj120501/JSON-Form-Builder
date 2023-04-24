interface CheckboxComponent {
  sort: number;
  label: string;
  description: string;
  validate: {
    required: boolean;
    immutable: boolean;
    defaultValue: boolean;
  };
  jsonKey: string;
  icon: string;
  level: number;
  uiType: string;
  placeholder: string;
}

export default CheckboxComponent;
