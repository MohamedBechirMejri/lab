import Banner from "./Apkmirror/Banner"
import Nav from "./Apkmirror/Nav"

const Apkmirror = () => {
  return (
    <div className="bg-[#f5f5f5] h-[85vh] w-[400px] relative rounded-xl shadow-2xl overflow-hidden border">
      <Banner />
      <Nav />
      <main className="w-full h-full bg-black">
        <div></div>
      </main>
    </div>
  )
}

export default Apkmirror
