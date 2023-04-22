import TextFieldComponent from "../types/TextFieldComponent";
import Label from "./Label";

function Input({ input }: { input: TextFieldComponent }) {
  return (
    <div className="font-bold flex justify-between items-center">
      <Label
        name={input.label}
        required={input.validate.required}
        description={input.description}
      />
      <div className="w-1/3">
        <input
          type="text"
          className="w-full bg-primary-200 border-placeholder border-[1px]
                placeholder:text-placeholder
                px-4 py-1
                outline-none
                text-input
                rounded-md
                "
          placeholder={input.placeholder}
        />
      </div>
    </div>
  );
}

export default Input;
