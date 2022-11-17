"use client";

import { useEffect, useState } from "react";

//! NOT FOR PRODUCTION; had the idea when i needed a text to arr converter so i'm currently making the feature work for this use case only. I'll update it in the future to be customizable

// TODO: add advanced features like setting separator and output items
// for example using a template for the output
// {
//  id: index,
//  value: {${ value } }
// }

const Text2Array = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState([{ id: 0, fact: "" }]);

  useEffect(() => {
    if (text) {
      const words = text.split("\n");
      setArray(
        words.map((w, i) => {
          return {
            id: i,
            fact: w,
          };
        })
      );
    }
  }, [text]);

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8">
      wip
      <input
        type="file"
        //  TODO: clean up code
        onChange={(e) => {
          const reader = new FileReader();
          reader.onload = async (e) => {
            const text = e.target!.result;
            if (typeof text === "string") setText(text);
          };
          reader.readAsText(e.target.files![0]);
        }}
      />
      <div
        className="flex flex-col overflow-scroll w-[35rem] h-[60vh]"
        onClick={() => {
          navigator.clipboard.writeText(JSON.stringify(array));
        }}
      >
        [
        {array.map(
          (item) =>
            item.fact && (
              <p key={item.id} className="flex flex-col pl-2">
                <span>{`{`}</span>
                <span className="pl-2">id: {item.id},</span>
                <span className="pl-2">fact: "{item.fact}"</span>
                <span>{`}`},</span>
              </p>
            )
        )}
        ]
      </div>
    </div>
  );
};

export default Text2Array;
