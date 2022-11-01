"use client";

import Link from "next/link";
import { useState } from "react";

const Generator = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <label htmlFor="name" className="mb-2 text-left w-80">
        Name:
      </label>
      <input
        type="text"
        placeholder="Name"
        className="transition-all rounded w-80"
        onChange={e => setName(e.target.value)}
        value={name}
        id="name"
      />
      <label htmlFor="date" className="mt-8 mb-2 text-left w-80">
        Birth Date:
      </label>
      <input
        type="date"
        name="date"
        id="date"
        onChange={e => setDate(e.target.value)}
        value={date}
        className="transition-all rounded w-80"
      />
      {name && date && (
        <Link
          href={"/happy-birthday/" + name + "?date=" + date}
          className="p-3 mt-8 font-bold text-white transition-all rounded bg-rose-500"
        >
          Generate Countdown
        </Link>
      )}
    </div>
  );
};

export default Generator;
