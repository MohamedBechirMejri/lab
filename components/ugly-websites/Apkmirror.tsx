import Banner from "./Apkmirror/Banner"
import Nav from "./Apkmirror/Nav"

const Apkmirror = () => {
  return (
    <div className="min-h-screen min-w-screen flex items-center">
      <div className="bg-[#f5f5f5] h-[85vh] w-[400px] relative rounded-xl shadow-2xl overflow-hidden border">
        <Banner />
        <Nav />
      </div>
    </div>
  )
}

export default Apkmirror
