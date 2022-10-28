"use client"

import Apkmirror from "../../components/ugly-websites/Apkmirror"
export default () => {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center">
      {/* <section className="w-screen h-screen flex flex-col items-center justify-center">
        <h1 className="font-bold text-3xl p-4 uppercase">Ugly Websites</h1>
        <p className="font-semibold text-xl">
          In this experiment, I replicate old websites/apps designs and try
          to improve them
        </p>
      </section> */}
      <section className="min-h-screen min-w-screen flex items-center">
        <Apkmirror />
      </section>
    </div>
  )
}
