import { Form, Editor } from "./component";
import { useState } from "react";
import sampleData from "./data/sample.json";

function App() {
  const [data, setData] = useState<string>(JSON.stringify(sampleData, null, 2));
  const validJSON = (text: string): boolean => {
    try {
      JSON.parse(text);
    } catch (e) {
      return false;
    }
    return true;
  };
  return (
    <div className="flex">
      <div className="basis-1/2">
        <Editor data={data} setData={setData} />
      </div>
      <div className="basis-1/2">
        {data ? (
          validJSON(data) ? (
            <Form data={JSON.parse(data)} />
          ) : (
            <div className="flex justify-center items-center h-screen text-xl font-bold">
              Please check the JSON's validity, if you are in the middle of
              typing then ignore.
            </div>
          )
        ) : (
          <div className="flex justify-center items-center h-screen text-xl font-bold">
            Feed the JSON and see the UI here
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
