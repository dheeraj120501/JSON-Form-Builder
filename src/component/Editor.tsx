import { ChangeEvent } from "react";

export default function Editor({
  data,
  setData,
}: {
  data: string;
  setData: React.Dispatch<React.SetStateAction<string>>;
}) {
  const storeData = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setData(value);
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
          value={data}
          onChange={storeData}
        />
      </div>
    </div>
  );
}
