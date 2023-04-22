import { ChangeEvent, useState } from "react";

export default function Editor({
  data,
  setData,
}: {
  data: string;
  setData: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [formattedData, setFormattedData] = useState<string>();

  const beautifyJSON = () => {
    if (data && !isJSON(data)) {
      alert("Invalid JSON - Please paste the valid JSON");
    } else if (data) {
      setFormattedData(JSON.stringify(data, null, 2));
    }
  };

  const storeData = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setData(value);
  };

  const isJSON = (str: string) => {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  };

  return (
    <div className="col w-full p-4 border-r-2 h-screen">
      <div className="box border rounded flex flex-col shadow bg-white h-full">
        <div className="box__title bg-grey-lighter px-3 py-2 border-b">
          <div className="flex text-lg text-grey-darker justify-center font-bold">
            JSON Here
          </div>
        </div>
        <textarea
          id="jsondata"
          placeholder="Paste the JSON here"
          className="text-grey-darkest flex-1 p-2 m-1 bg-transparent focus:outline-none font-mono  "
          name="inputJSON"
          value={formattedData}
          onChange={storeData}
          // onBlur={beautifyJSON}
        />
      </div>
    </div>
  );
}
