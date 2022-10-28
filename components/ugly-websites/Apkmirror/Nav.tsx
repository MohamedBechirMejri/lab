import { HiSearch, HiUpload, HiUserCircle } from "react-icons/hi"

const Nav = () => {
  return (
    <div className="bg-[#ff860d] absolute bottom-0 left-0 w-full h-[3.75rem] flex  items-center justify-evenly text-4xl text-white z-20">
      <HiSearch className=" cursor-pointer active:scale-90 transition-all" />
      <span className="bg-[#f5f5f5] text-[#ff860d] w-[5rem] h-[5rem] rounded-full mb-14 border cursor-pointer">
        <HiUpload className="p-4 active:scale-90 transition-all w-full h-full" />
      </span>
      <HiUserCircle className=" cursor-pointer active:scale-90 transition-all" />
    </div>
  )
}

export default Nav
