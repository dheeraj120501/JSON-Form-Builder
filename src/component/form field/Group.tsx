import Label from "./Label";
import { GroupComponent } from "../../types";
import FieldFactory from "./FieldFactory";
import Toggle from "./Toggle";
import { useAdvField } from "../../hooks";

function Group({ input }: { input: GroupComponent }) {
  const [isAdvField, showAdvField, toggleAdvField] = useAdvField(
    input.subParameters
  );
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
              toggleAdvField();
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Group;
