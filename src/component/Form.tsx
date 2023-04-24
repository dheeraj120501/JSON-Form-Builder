import Slot from "./Slot";
import Toggle from "./form field/Toggle";
import FieldFactory from "./form field/FieldFactory";
import { useAdvField } from "../hooks";
import { UIComponent } from "../types";
import { Formik, Form as FormikForm } from "formik";
import { useEffect, useRef } from "react";

function Form({ data }: { data: UIComponent[] }) {
  const [isAdvField, showAdvField, toggleAdvField] = useAdvField(data);
  const FormState = useRef({
    initialValues: {},
    validate: () => {
      return {};
    },
  });

  useEffect(() => {
    data.forEach((d) => {
      if (d.uiType !== "Group") {
        FormState.current.initialValues = {
          ...FormState.current.initialValues,
          [d.jsonKey]: "",
        };
      }
    });
  }, [data]);

  return (
    <Formik
      initialValues={FormState.current.initialValues}
      onSubmit={async (values) => {
        console.log(values);
      }}
    >
      <FormikForm>
        <div className="max-h-screen overflow-y-scroll p-4">
          <div className="text-black text-xl font-bold border-b-2 pb-2 mb-6">
            Create Pasta
          </div>
          {data.map((d) => {
            if (!showAdvField && !d.validate.required) {
              return null;
            }
            return (
              FieldFactory(d) && <Slot key={d.jsonKey}>{FieldFactory(d)}</Slot>
            );
          })}
          <div className="text-black font-bold border-t-2 pt-4 flex justify-between items-center">
            {isAdvField ? (
              <Toggle
                label="Show Advanced Fields"
                labelDirection="left"
                onClick={() => {
                  toggleAdvField();
                }}
              />
            ) : (
              <></>
            )}
            <div className="flex">
              <div className="px-4 py-2 bg-white mr-2 rounded-md border-[2px] border-black cursor-pointer">
                <button type="reset">Cancel</button>
              </div>
              <div className="px-4 py-2 text-white bg-black mr-2 rounded-md border-[2px] border-black cursor-pointer">
                <button type="submit">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </FormikForm>
    </Formik>
  );
}

export default Form;
