"use client"

import Apkmirror from "../../components/ugly-websites/Apkmirror"
import Image from "next/image"

export default () => {
  return (
    <>
      <section className="w-screen h-screen flex flex-col items-center justify-center">
        <h1 className="font-bold text-3xl p-4 uppercase">Ugly Websites</h1>
        <p className="font-semibold text-xl">
          In this experiment, I replicate old websites/apps designs and try to
          improve them
        </p>
      </section>
      <section
        className="h-screen w-screen flex items-center justify-center gap-16"
        id="apkmirror"
      >
        <Image
          src={"/images/apkmirror-old.png"}
          width={482}
          height={790}
          alt={"apkmirror screenshot"}
          className="rounded"
        />
        <Apkmirror />
      </section>
    </>
  )
}
