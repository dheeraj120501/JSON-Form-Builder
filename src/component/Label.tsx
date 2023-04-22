function Label({
  name,
  description = "",
  required = false,
}: {
  name: string;
  required: boolean;
  description: string;
}) {
  return (
    <div className="flex items-center relative">
      {name}
      {required && <span className="text-red-500 ml-1 text-base">*</span>}
      {description && (
        <>
          <div className="font-mono text-xs bg-placeholder text-white ml-2 w-4 h-4 rounded-full flex justify-center items-center cursor-default peer">
            i
          </div>
          <div className="absolute bg-white w-[400px] py-4 px-4 border-[1px] border-placeholder rounded-md left-[120%] hidden peer-hover:block shadow-lg text-sm">
            <div className="text-black font-bold border-b-2 pb-2 mb-2">
              {name}
            </div>
            <div className="text-placeholder">{description}</div>
          </div>
        </>
      )}
    </div>
  );
}

export default Label;
