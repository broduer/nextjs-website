import NanobloxIcon from "../../../../../../public/icons/Nanoblox.svg";

import { useState } from "react";

export default function NavigationBar() {
  const [isNavigationMenuOpen, setIsNavigationMenuOpen] = useState(false);
  return (
    <div className="w-full bg-black select-none">
      <div className="w-full px-4 py-2 flex items-center justify-between">
        <div className="flex flex items-center">
          <img className="w-10 h-10" src={NanobloxIcon.src} />
          <div className="text-white font-bold text-lg">Nanoblox</div>
        </div>
        <button
          className="text-white sm:hidden"
          onClick={() => setIsNavigationMenuOpen((value) => !value)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class={`h-6 w-6 ${isNavigationMenuOpen ? "hidden" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class={`h-6 w-6 ${!isNavigationMenuOpen ? "hidden" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="text-white hidden sm:block">
          <a
            href="#"
            className="px-4 text-left hover:text-gray-300 active:text-gray-400"
          >
            Home
          </a>
          <a
            href="#"
            className="px-4 text-left hover:text-gray-300 active:text-gray-400"
          >
            Discover
          </a>
          <a
            href="#"
            className="px-4 text-left hover:text-gray-300 active:text-gray-400"
          >
            Resources
          </a>
        </div>
      </div>
      <div
        className={`px-4 flex flex-col text-white sm:hidden ${
          !isNavigationMenuOpen ? "hidden" : ""
        }`}
      >
        <button className="p-1 text-left hover:text-gray-300 active:text-gray-400">
          Home
        </button>
        <button className="p-1 text-left hover:text-gray-300 active:text-gray-400">
          Discover
        </button>
        <button className="p-1 mb-1 text-left hover:text-gray-300 active:text-gray-400">
          Resources
        </button>
      </div>
      <div className="w-full h-16 absolute bg-gradient-to-b from-black"></div>
    </div>
  );
}
