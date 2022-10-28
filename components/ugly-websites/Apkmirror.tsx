import { HiSearch, HiUpload, HiUserCircle } from "react-icons/hi"
import { IoIosClose } from "react-icons/io"
import { useState } from "react"
import Image from "next/image"

const Apkmirror = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(false)

  return (
    <div className="min-h-screen min-w-screen flex items-center">
      <div className="bg-[#f5f5f5] h-[85vh] w-[400px] relative rounded-xl shadow-2xl overflow-hidden border">
        <div
          className={`bg-[#f76912] w-[90%] h-max absolute left-1/2 top-8 -translate-x-1/2 rounded-lg text-[#f5f5f5] font-semibold flex items-center gap-4 overflow-hidden p-2 shadow-xl ${
            isBannerVisible && "animate-hide-banner "
          } `}
        >
          <Image
            src={"/images/apkmirror-logo.png"}
            width={50}
            height={50}
            alt="apkmirror logo"
            className=""
          />
          <h1 className="text-sm">
            Download APKMirror Installer (Official) to install .apkm bundles
          </h1>
          <span
            onClick={() => setIsBannerVisible(true)}
            className="w-8 h-full shrink-0 cursor-pointer flex justify-center items-center "
          >
            <IoIosClose className="text-4xl" />
          </span>
        </div>

        <div className="bg-[#f76912] absolute bottom-0 left-0 w-full h-16 flex  items-center justify-evenly text-4xl text-white">
          <HiSearch className=" cursor-pointer active:scale-90 transition-all" />
          <span className="bg-[#f5f5f5] text-[#f76912] w-[5rem] h-[5rem] rounded-full mb-14 border cursor-pointer">
            <HiUpload className="p-4 active:scale-90 transition-all w-full h-full" />
          </span>
          <HiUserCircle className=" cursor-pointer active:scale-90 transition-all" />
        </div>
      </div>
    </div>
  )
}

export default Apkmirror
