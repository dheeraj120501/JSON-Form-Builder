import Label from "./Label";
import GroupComponent from "../types/GroupComponent";
import FieldFactory from "./FieldFactory";
import Toggle from "./Toggle";
import { useEffect, useState } from "react";

function Group({ input }: { input: GroupComponent }) {
  const [isAdvField, setIsAdvField] = useState(false);
  const [showAdvField, setShowAdvField] = useState(false);
  useEffect(() => {
    setIsAdvField(false);
    input.subParameters.forEach((e) => {
      if (!e.validate.required) {
        setIsAdvField(true);
      }
    });
  }, [input.subParameters]);
  return (
    <div>
      <div className="text-black font-bold border-b-2 pb-2 mb-4 flex">
        <Label
          label={input.label}
          required={input.validate.required}
          description={input.description}
        />
      </div>
      {input.subParameters.map((e) => {
        if (!showAdvField && !e.validate.required) {
          return;
        }
        return <div className="mb-4">{FieldFactory(e)}</div>;
      })}
      {isAdvField && (
        <div className="text-black font-bold border-t-2 pt-4">
          <Toggle
            label="Show Advanced Fields"
            labelDirection="left"
            onClick={() => {
              setShowAdvField(!showAdvField);
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Group;
