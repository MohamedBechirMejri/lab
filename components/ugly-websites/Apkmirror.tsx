import Banner from "./Apkmirror/Banner"
import Nav from "./Apkmirror/Nav"
import { useState } from "react"

const Apkmirror = () => {
  const forYou = [
    {
      developer: "Google",
      title: "Youtube",
      version: "1.2.0",
      size: "10.18MB",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/640px-YouTube_full-color_icon_%282017%29.svg.png",
    },
    {
      developer: "Google",
      title: "Youtube",
      version: "1.2.0",
      size: "10.18MB",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/640px-YouTube_full-color_icon_%282017%29.svg.png",
    },
    {
      developer: "Google",
      title: "Youtube",
      version: "1.2.0",
      size: "10.18MB",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/640px-YouTube_full-color_icon_%282017%29.svg.png",
    },
    {
      developer: "Google",
      title: "Youtube",
      version: "1.2.0",
      size: "10.18MB",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/640px-YouTube_full-color_icon_%282017%29.svg.png",
    },
    {
      developer: "Google",
      title: "Youtube",
      version: "1.2.0",
      size: "10.18MB",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/640px-YouTube_full-color_icon_%282017%29.svg.png",
    },
    {
      developer: "Google",
      title: "Youtube",
      version: "1.2.0",
      size: "10.18MB",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/640px-YouTube_full-color_icon_%282017%29.svg.png",
    },
    {
      developer: "Google",
      title: "Youtube",
      version: "1.2.0",
      size: "10.18MB",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/640px-YouTube_full-color_icon_%282017%29.svg.png",
    },
    {
      developer: "Google",
      title: "Youtube",
      version: "1.2.0",
      size: "10.18MB",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/640px-YouTube_full-color_icon_%282017%29.svg.png",
    },
    {
      developer: "Google",
      title: "Youtube",
      version: "1.2.0",
      size: "10.18MB",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/640px-YouTube_full-color_icon_%282017%29.svg.png",
    },
    {
      developer: "Google",
      title: "Youtube",
      version: "1.2.0",
      size: "10.18MB",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/640px-YouTube_full-color_icon_%282017%29.svg.png",
    },
  ]
  const Latest = [
    {
      developer: "Google",
      title: "Youtube",
      version: "1.2.0",
      size: "10.18MB",
      logo: "https://picsum.photos/500",
    },
  ]
  const Popular = [
    {
      developer: "Google",
      title: "Youtube",
      version: "1.2.0",
      size: "10.18MB",
      logo: "https://picsum.photos/500",
    },
  ]

  const [apps, setApps] = useState(forYou)
  return (
    <div className="bg-[#f5f5f5] h-[85vh] w-[400px] relative rounded-xl shadow-2xl overflow-hidden border">
      <h1 className="w-full text-center p-4 font-bold text-xl">APKMirror</h1>
      <Banner />
      <Nav />
      <main className="w-full h-full bg-s;late-700 px-4 pb-16">
        <div className="w-full h-12 bg-[#f76a1254] grid grid-cols-3 grid-rows-1 text-[#f76912] font-semibold text-center text-lg rounded-xl shadow-xl backdrop-blur-3xl overflow-hidden">
          <span className="flex items-center justify-center bg-[#ff860d] text-white">
            For You
          </span>
          <span className="flex items-center justify-center border-x">
            Latest
          </span>
          <span className="flex items-center justify-center">Popular</span>
        </div>
        <div className="overflow-y-scroll h-[85%] noscroll">
          <div className="p-2 py-8 flex flex-col gap-4">
            {apps.map(app => (
              <div className="flex border shadow p-4 rounded-lg items-center gap-4 cursor-pointer select-none hover:ring-1 transition-all ring-current">
                <img
                  src={app.logo}
                  width={40}
                  height={40}
                  alt={app.title}
                  className="rounded scale-110"
                  draggable="false"
                />
                <div>
                  <h1 className="font-semibold">{app.title}</h1>
                  <p className="text-xs text-gray-500">{app.developer}</p>
                </div>
                <div className="w-full flex flex-col items-end">
                  <p>{app.version}</p>
                  <p>{app.size}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Apkmirror
