import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  const navbar = [
    { name: "All Posts", link: "/allposts" },
    { name: "Random Post", link: "/randompost" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <header className="w-full bg-color1 p-6 shadow-xl">
      <div className="flex sm:flex-row flex-col items-center sm:space-x-8 space-x-4 mx-auto w-full sm:w-8/12 justify-between">
        <div className="bg-main px-2 py-2 rounded">
          <Link href="/" className="flex space-x-3">
            <span className="flex items-center text-3xl font-mono">msblog</span>
            <Image src="blog.svg" alt="msblog-logo" width={32} height={32} />
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-6 text-main font-mono font-extrabold text-lg">
            <li className="hover:text-text hover:transition-all duration-1000">
              <button className="flex items-center space-x-1">
                <span>Explore</span>
                <Image
                  src="expandmore.svg"
                  alt="expand-more"
                  height={16}
                  width={16}
                />
              </button>
            </li>{" "}
            {/* <-- TODO: Toggle dropdown menu --> */}
            {navbar.map((item, i) => (
              <li
                key={i}
                className="hover:text-text hover:transition-all duration-1000"
              >
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
            <li>
              <button className="flex items-center">
                <Image
                  src="search.svg"
                  alt="search-button"
                  height={24}
                  width={24}
                />
              </button>
              {/* <-- TODO: Search function --> */}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
