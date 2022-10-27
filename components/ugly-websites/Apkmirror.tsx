import { HiSearch, HiUpload, HiUserCircle } from "react-icons/hi"

const Apkmirror = () => {
  return (
    <div className="min-h-screen min-w-screen flex items-center">
      <div className="bg-[#f5f5f5] h-[85vh] w-[400px] relative rounded-lg shadow-2xl overflow-hidden">
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
