import Label from "./Label";
import DropDownComponent from "../types/DropDownComponent";

function Select({ input }: { input: DropDownComponent }) {
  return (
    <div className="font-bold flex justify-between items-center">
      <Label
        label={input.label}
        required={input.validate.required}
        description={input.description}
      />
      <div className="w-1/3">
        <select
          className="w-full rounded-md bg-primary-200 border-placeholder border-[1px]
                placeholder:text-placeholder
                px-4 py-1
                outline-none
                text-input
                "
        >
          {input.validate.options.map(({ label, value, description }) => (
            <option
              value={value}
              selected={input.validate.defaultValue === value}
              title={description}
            >
              {label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Select;
