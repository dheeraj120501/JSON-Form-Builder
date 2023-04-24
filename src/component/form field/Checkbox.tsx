import { CheckboxComponent } from "../../types";
import { useField } from "formik";

function Checkbox({ input }: { input: CheckboxComponent }) {
  const [field, meta] = useField({ name: input.jsonKey, type: "checkbox" });
  return (
    <>
      <div className="flex items-center mb-4">
        <input
          id={input.jsonKey}
          type="checkbox"
          defaultChecked={input.validate.defaultValue}
          className="w-4 h-4 bg-gray-100 border-gray-300 rounded accent-black"
          {...field}
        />
        <label
          htmlFor={input.jsonKey}
          className="ml-2 font-bold text-gray-900 "
        >
          {input.label}
        </label>
      </div>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
}

export default Checkbox;
