import "../styles/globals.css";
import Link from "next/link";
import uniqid from "uniqid";

function RootLayout({ children }: any) {
  const tabs = [
    {
      title: "Ugly Websites",
      background: "https://picsum.photos/500/300",
      link: "ugly-websites",
    },
    {
      title: "Happy Birthday",
      background: "https://picsum.photos/500/400",
      link: "happy-birthday",
    },
  ];
  return (
    <html lang="en">
      <head>
        <title>MBM Lab</title>
      </head>
      <body>
        <nav className="bg-[#ffffff00] fixed left-0 top-1/2 -translate-y-1/2 h-[70vh] hover:p-2 rounded backdrop-blur-3xl shadow ring-white ring -translate-x-[93%] hover:translate-x-0 transition-all rounded-r-none flex flex-col items-center gap-4 duration-300 px-12 overflow-y-scroll noscroll border-2 z-50">
          {tabs.map(tab => {
            return (
              <Link key={uniqid()} href={"/" + tab.link}>
                <div
                  className="w-[10rem] h-[5rem] rounded bg-cover bg-no-repeat  shrink-0"
                  style={{
                    backgroundImage: `url(${tab.background})`,
                  }}
                >
                  <h1 className="flex items-center justify-center w-full h-full text-lg font-semibold text-center text-white uppercase transition-all duration-300 opacity-0 backdrop-brightness-75 hover:opacity-100">
                    {tab.title}
                  </h1>
                </div>
              </Link>
            );
          })}
        </nav>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
