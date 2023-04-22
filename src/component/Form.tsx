import Slot from "./Slot";
import Toggle from "./Toggle";
import FieldFactory from "./FieldFactory";
import { useState, useEffect } from "react";

function Form({ data }: { data: Array<any> }) {
  const [isAdvField, setIsAdvField] = useState(false);
  const [showAdvField, setShowAdvField] = useState(false);
  useEffect(() => {
    setIsAdvField(false);
    data.forEach((e) => {
      if (!e.validate.required) {
        setIsAdvField(true);
      }
    });
  }, [data]);
  return (
    <div className="max-h-screen overflow-y-scroll p-4">
      <div className="text-black text-xl font-bold border-b-2 pb-2 mb-6">
        Create Pasta
      </div>
      {data.map((d) => {
        if (!showAdvField && !d.validate.required) {
          return;
        }
        return FieldFactory(d) && <Slot>{FieldFactory(d)}</Slot>;
      })}
      <div className="text-black font-bold border-t-2 pt-4 flex justify-between items-center">
        {isAdvField ? (
          <Toggle
            label="Show Advanced Fields"
            labelDirection="left"
            onClick={() => {
              setShowAdvField(!showAdvField);
            }}
          />
        ) : (
          <div></div>
        )}
        <div className="flex">
          <div className="px-4 py-2 bg-white mr-2 rounded-md border-[2px] border-black cursor-pointer">
            Cancel
          </div>
          <div className="px-4 py-2 text-white bg-black mr-2 rounded-md border-[2px] border-black cursor-pointer">
            Submit
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
