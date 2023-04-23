import { SwitchComponent } from "../../types";

function Switch({ input }: { input: SwitchComponent }) {
  return (
    <div className="flex items-center mb-4">
      <input
        id={input.jsonKey}
        name={input.jsonKey}
        type="checkbox"
        defaultChecked={input.validate.defaultValue}
        className="w-4 h-4 bg-gray-100 border-gray-300 rounded accent-black"
      />
      <label htmlFor={input.jsonKey} className="ml-2 font-bold text-gray-900 ">
        {input.label}
      </label>
    </div>
  );
}

export default Switch;
