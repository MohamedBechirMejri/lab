"use client"

import type { NextPage } from "next"
import { gsap } from "gsap"
import { useEffect, useRef } from "react"
import { TextPlugin } from "gsap/TextPlugin"

const HomePage: NextPage = () => {
  const indexRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(TextPlugin)

    let ctx = gsap.context(() => {
      gsap.fromTo("h1", { y: "0" }, { y: "20px", yoyo: true, repeat: -1 })
    }, indexRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={indexRef}
      className="bg-slate-100 flex flex-col items-center justify-center min-h-screen py-2"
    >
      <h1 className="text-4xl font-bold"> Welcome to my Lab</h1>
    </div>
  )
}

export default HomePage
