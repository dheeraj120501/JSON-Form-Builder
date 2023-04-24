import { TextFieldComponent } from "../../types";
import { useField } from "formik";
import Label from "./Label";
import ErrorBox from "./ErrorBox";

function TextField({ input }: { input: TextFieldComponent }) {
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
            {...field}
          />
        </div>
      </div>
      {meta.touched && meta.error ? <ErrorBox text={meta.error} /> : null}
    </>
  );
}

export default TextField;
