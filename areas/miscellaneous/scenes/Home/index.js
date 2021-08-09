import RobloxGamesBackground from "../../../../public/images/RobloxGamesBackground.jpg";

import FadedNavigationBar from "../../../../components/navigationBars/FadedNavigationBar";
import Head from "next/head";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Head>
        <title>Nanoblox</title>
        <meta
          name="description"
          content="Nanoblox is an administration suite powering dynamic roles, modular commands, global broadcasts, moderation, monetization, audit logs, and more, used by many top Roblox games."
        />
      </Head>
      <FadedNavigationBar />
      <div
        className="w-full flex flex-grow bg-black bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${RobloxGamesBackground.src})` }}
      >
        <div className="w-full flex-grow bg-black bg-opacity-70">
          <div className="mx-auto flex flex-col container">
            <div className="mx-auto w-full px-8 sm:px-24 md:px-28 lg:px-32 xl:px-64 2xl:px-80 text-center font-semibold">
              <div className="mt-16 text-white text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-7xl">
                TAKE CONTROL OF <br className="hidden 2xl:block" /> YOUR{" "}
                <span className="text-red-500">GAME</span>
              </div>
              <div className="mt-4 text-gray-400 leading-5 sm:text-lg md:text-xl lg:text-xl xl:text-xl">
                Nanoblox is an administration suite powering dynamic roles,
                modular commands, global broadcasts, moderation, monetization,
                audit logs, and more, used by many top Roblox games.
              </div>
            </div>
            <div className="mt-4 sm:mt-16 flex flex-col sm:flex-row justify-center text-white font-semibold text-center">
              <div className="mt-4 sm:mt-0 flex-1">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl">
                  96+
                </div>
                <div className="text-red-500 text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl">
                  GAMES
                </div>
              </div>
              <div className="mt-4 sm:mt-0 flex-1">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl">
                  129,007
                </div>
                <div className="text-blue-500 text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl">
                  LIVE PLAYERS
                </div>
              </div>
              <div className="mt-4 sm:mt-0 flex-1">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl">
                  $2,040,390+
                </div>
                <div className="text-green-500 text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl">
                  EARNED
                </div>
              </div>
            </div>
            <button className="my-16 mx-auto py-3 px-12 sm:mt-24 text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl text-white rounded-full bg-gradient-to-r from-pink-600 to-purple-600 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-purple-500 focus:from-pink-500 focus:to-purple-500 hover:from-pink-500 hover:to-purple-500 active:from-pink-700 active:to-purple-700">
              INSTALL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
