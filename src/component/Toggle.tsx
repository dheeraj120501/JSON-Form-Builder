import { MouseEventHandler } from "react";

function Toggle({
  label,
  labelDirection,
  onClick,
}: {
  label: string;
  labelDirection: "left" | "right";
  onClick: MouseEventHandler<HTMLInputElement>;
}) {
  return (
    <div className="flex items-center">
      <label className=" inline-flex items-center cursor-pointer">
        {labelDirection === "left" && <span className="mr-3">{label}</span>}
        <div className="relative">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            onClick={onClick}
          />
          <div className="w-11 h-6 bg-primary-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </div>
        {labelDirection === "right" && <span className="ml-3">{label}</span>}
      </label>
    </div>
  );
}

export default Toggle;
