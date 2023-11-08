import Label from "./Label";
import { DropDownComponent } from "../../types";
import { useField } from "formik";

function Select({ input }: { input: DropDownComponent }) {
  const [field, meta] = useField({ name: input.jsonKey });

  return (
    <>
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
            // defaultValue={input.validate.defaultValue}
            key={input.validate.defaultValue}
            {...field}
          >
            {input.validate.options.map(({ label, value, description }) => (
              <option value={value} title={description} key={label}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
}

export default Select;
