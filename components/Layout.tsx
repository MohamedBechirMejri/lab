import Link from "next/link";
import React from "react";
import uniqid from "uniqid";

const Layout = ({ children }: { children: any }) => {
  const tabs = [
    {
      title: "Ugly Websites",
      background: "https://picsum.photos/500/300",
      link: "ugly_websites",
    },
  ];

  return (
    <>
      <nav className="bg-[#ffffff9a] fixed right-0 top-1/2 -translate-y-1/2 h-[70vh] hover:p-2 rounded backdrop-blur-3xl shadow ring-white ring translate-x-[93%] hover:translate-x-0 transition-all rounded-r-none flex flex-col items-center gap-4 duration-300 px-12 overflow-y-scroll noscroll border-2">
        {tabs.map(tab => {
          return (
            <Link href={"/" + tab.link}>
              <a
                key={uniqid()}
                className="w-[10rem] h-[5rem] rounded bg-cover bg-no-repeat block shrink-0"
                style={{
                  backgroundImage: `url(${tab.background})`,
                }}
              >
                <h1 className="text-white font-semibold text-lg uppercase text-center backdrop-brightness-75 w-full h-full flex items-center justify-center hover:opacity-100 opacity-0 transition-all duration-300">
                  {tab.title}
                </h1>
              </a>
            </Link>
          );
        })}
      </nav>
      {children}
    </>
  );
};

export default Layout;
