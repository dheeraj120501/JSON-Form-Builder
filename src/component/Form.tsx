import Slot from "./Slot";
import Toggle from "./form field/Toggle";
import FieldFactory from "./form field/FieldFactory";
import { useAdvField } from "../hooks";
import { UIComponent } from "../types";
import { Formik, Form as FormikForm } from "formik";
import { useEffect, useRef } from "react";
import * as Yup from "yup";

function Form({ data }: { data: UIComponent[] }) {
  const [isAdvField, showAdvField, toggleAdvField] = useAdvField(data);
  const FormState = useRef({
    initialValues: {},
    validationSchema: Yup.object().shape({}),
  });

  useEffect(() => {
    FormState.current.initialValues = {};
    FormState.current.validationSchema = Yup.object().shape({});
    let vSchema = {};
    const getDefaults = (d: {
      required: boolean;
      immutable: boolean;
      defaultValue?: string;
    }) => d.defaultValue ?? "";
    const getFormState = (d: any) => {
      if (d.uiType !== "Group") {
        FormState.current.initialValues = {
          ...FormState.current.initialValues,
          [d.jsonKey]: getDefaults({ defaultValue: "", ...d.validate }),
        };
        if (d.uiType === "Input" && d.validate.pattern) {
          vSchema = {
            ...vSchema,
            [d.jsonKey]: Yup.string().matches(d.validate.pattern),
          };
        }
      } else {
        d.subParameters.forEach(getFormState);
      }
    };
    data.forEach((d: any) => {
      getFormState(d);
    });

    FormState.current.validationSchema = Yup.object().shape(vSchema);

    console.log(
      FormState.current.initialValues,
      FormState.current.validationSchema
    );
  }, [data]);

  return (
    <Formik
      initialValues={FormState.current.initialValues}
      onSubmit={async (values) => {
        console.log(values);
      }}
      validationSchema={FormState.current.validationSchema}
      enableReinitialize={true}
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
