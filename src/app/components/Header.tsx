import React from "react";
import Nav from "./Nav";

const Header = () => {
    return (
        <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
            <Nav />
            <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center lg:static lg:size-auto font-bold text-3xl">
                <a className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                    href="/"
                >
                    Till Robin Kurz
                </a>
            </div>
      </div>
  );
}

export default Header