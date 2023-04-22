interface TextFieldComponent {
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
}

export default TextFieldComponent;
