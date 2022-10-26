"use client"

import type { NextPage } from "next"
import { gsap } from "gsap"
import { useEffect, useRef, useState } from "react"
import { TextPlugin } from "gsap/TextPlugin"
import Image from "next/image"

const HomePage: NextPage = () => {
  const indexRef = useRef(null)
  const [isAnimationComplete, setIsAnimationComplete] = useState(false)

  const handleMouseEnter = () => {
    if (isAnimationComplete)
      gsap.context(() => {
        gsap.to(".dexter h1", {
          text: {
            value: "DeeDee Nooooooo!",
            delimiter: "  ",
          },
        })
      }, indexRef)
  }
  const handleMouseLeave = () => {
    if (isAnimationComplete)
      gsap.context(() => {
        gsap.to(".dexter h1", {
          text: {
            value: "Phew, Thank God",
            delimiter: "  ",
          },
        })
      }, indexRef)
  }

  useEffect(() => {
    gsap.registerPlugin(TextPlugin)

    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".dexter img",
        { x: "-150%" },
        { x: 0, delay: 6, duration: 0.3 }
      )
      gsap.fromTo(
        ".dexter h1",
        {},
        {
          text: {
            value: "Take you friend and get out of my Laboratory!",
            delimiter: " ",
          },
          delay: 7,
          duration: 1,
          onComplete: () => setIsAnimationComplete(true),
        }
      )
      gsap.fromTo(
        ".deedee img",
        { x: "150%" },
        { x: 0, delay: 1, duration: 0.3 }
      )
      gsap.to(".deedee h1", {
        text: {
          value: " Oooooh!",
          delimiter: "",
        },
        delay: 2,
        duration: 0.3,
      })
      gsap.to(".deedee h1", {
        text: {
          value: "What does this button do?",
          delimiter: "  ",
        },
        delay: 4,
        duration: 1,
        ease: "power2",
      })
    }, indexRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={indexRef}
      className="bg-slate-100 flex flex-col items-center justify-center min-h-screen py-2"
    >
      <div className="dexter absolute top-8 left-8 flex items-center gap-4">
        <Image
          src={"/images/dexter.png"}
          alt="Dexter"
          width={200}
          height={200}
          id="dexterimg"
        />
        <h1 className="text-4xl font-bold origin-left"></h1>
      </div>

      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex flex-col items-center justify-center bg-green-500 hover:bg-red-500 hover:after:bg-red-400 rounded-full h-48 w-48 shadow-xl after:[content:'Generate_random_Experiment!'] after:w-[inherit] after:h-[inherit] hover:after:[content:'and_destroy_the_world'] font-bold text-white uppercase transition-all after:bg-green-400 after:rounded-full after:-translate-y-6 after:flex after:flex-col after:items-center after:justify-center after:transition-all active:after:translate-y-0  border border-black"
      ></button>

      <div className="deedee absolute bottom-8 right-8 flex items-center gap-4">
        <h1 className="text-4xl font-bold origin-left"></h1>
        <Image
          src={"/images/deedee.png"}
          alt="DeeDee"
          width={200}
          height={200}
        />
      </div>
    </div>
  )
}

export default HomePage
