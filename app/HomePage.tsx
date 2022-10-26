"use client"

import type { NextPage } from "next"
import { gsap } from "gsap"
import { useEffect, useRef } from "react"
import { TextPlugin } from "gsap/TextPlugin"
import Image from "next/image"

const HomePage: NextPage = () => {
  const indexRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(TextPlugin)

    let ctx = gsap.context(() => {
      gsap.fromTo(
        "h1",
        { scale: 1, rotateY: "90deg" },
        { scale: 1, rotateY: 0, delay: 1, duration: 2 }
      )
    }, indexRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={indexRef}
      className="bg-slate-100 flex flex-col items-center justify-center min-h-screen py-2"
    >
      <Image src={"/images/dexter.png"} alt="Dexter" width={200} height={200} />
      <h1 className="text-4xl font-bold origin-left">
        Take you friend and get out of my Laboratory!
      </h1>
      <button className="flex flex-col items-center justify-center bg-green-500 hover:bg-red-500 hover:after:bg-red-400 rounded-full h-48 w-48 shadow-xl after:[content:'Generate_random_Experiment!'] after:w-[inherit] after:h-[inherit] hover:after:[content:'and_destroy_the_world'] font-bold text-white uppercase transition-all after:bg-green-400 after:rounded-full after:-translate-y-6 after:flex after:flex-col after:items-center after:justify-center after:transition-all active:after:translate-y-0  border border-black"></button>
      <h1 className="text-4xl font-bold origin-left">
        Ooh! What does this button do?
      </h1>
      <Image src={"/images/deedee.png"} alt="DeeDee" width={200} height={200} />
    </div>
  )
}

export default HomePage
