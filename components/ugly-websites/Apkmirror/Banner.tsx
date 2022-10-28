import Image from "next/image"
import { useState } from "react"
import { IoIosClose } from "react-icons/io"

const Banner = () => {
  const [isBannerHidden, setIsBannerHidden] = useState(false)

  return (
    <div
      className={`bg-[#f76912] w-[90%] h-max absolute left-1/2 top-16 -translate-x-1/2 rounded-lg text-[#f5f5f5] font-semibold flex items-center gap-4 overflow-hidden p-2 shadow-xl ${
        isBannerHidden && "animate-hide-banner "
      } cursor-pointer select-none z-10`}
    >
      <Image
        src={"/images/apkmirror-logo.png"}
        width={50}
        height={50}
        alt="apkmirror logo"
        className=""
        draggable="false"
      />
      <h1 className="text-sm">
        Download APKMirror Installer (Official) to install .apkm bundles
      </h1>
      <span
        onClick={() => setIsBannerHidden(true)}
        className="w-8 h-8 shrink-0 cursor-pointer flex justify-center items-center hover:bg-orange-400 rounded-full active:ring-1 transition-all ring-current"
      >
        <IoIosClose className="text-4xl" />
      </span>
    </div>
  )
}

export default Banner
