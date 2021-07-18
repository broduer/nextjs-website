import { useState } from "react";

import NanobloxIcon from "../../../../public/icons/Nanoblox.svg";
import RobloxGamesBackground from "../../../../public/images/RobloxGamesBackground.jpg";

export default function Home() {
  const [isNavigationMenuOpen, setIsNavigationMenuOpen] = useState(false);

  return (
    <div className="w-full h-screen flex flex-col">
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
      <div
        className="w-full flex-grow bg-black bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${RobloxGamesBackground.src})` }}
      >
        <div className="w-full h-full bg-black bg-opacity-70">
          <div className="h-full flex flex-col container mx-auto px-8">
            <div className="mt-16 text-center text-white font-semibold text-5xl">
              TAKE CONTROL OF YOUR <span className="text-red-500">GAME</span>
            </div>
            <div className="mt-4 text-center font-semibold text-gray-400 leading-5">
              An administration system powering dynamic roles, modular commands,
              global broadcasts, studio and in-game panels, moderations, logs,
              and much more.
            </div>
            <div className="mt-4 flex flex-col sm:flex-row justify-center font-semibold text-center">
              <div className="mt-4 flex-1">
                <div className="text-white text-2xl">96+</div>
                <div className="text-red-500 text-lg">GAMES</div>
              </div>
              <div className="mt-4 flex-1">
                <div className="text-white text-2xl">129,007</div>
                <div className="text-blue-500 text-lg">LIVE PLAYERS</div>
              </div>
              <div className="mt-4 flex-1">
                <div className="text-white text-2xl">$2,040,390+</div>
                <div className="text-green-500 text-lg">EARNED</div>
              </div>
            </div>
            <button class="my-10 mx-auto py-3 px-12 sm:mb-10 sm:mt-auto text-white text-2xl rounded-full bg-gradient-to-r from-pink-600 to-purple-600 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-purple-500 focus:from-pink-500 focus:to-purple-500 hover:from-pink-500 hover:to-purple-500 active:from-pink-700 active:to-purple-700">
              INSTALL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
