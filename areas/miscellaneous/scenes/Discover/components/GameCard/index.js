export default function GameCard() {
  return (
    <div className="w-full mx-auto rounded-lg overflow-hidden shadow-lg">
      <img
        className="w-full object-cover object-center "
        src="https://t1.rbxcdn.com/d3d92c240136e1bd600cbc42fc56a228"
      />
      <div className="w-full h-full p-4 flex flex-col bg-nanobloxGray text-white">
        <div className="text-xl font-semibold">Guest World</div>
        <div className="text-sm">By HD Team</div>
        <div className="flex pt-4">
          <button className="px-6 rounded-lg text-xl text-white bg-gradient-to-r from-green-400 to-green-500 focus:outline-none focus:ring-4 focus:ring-opacity-50 focus:ring-green-400 focus:from-green-300 focus:to-green-400 hover:from-green-300 hover:to-green-400 active:from-green-500 active:to-green-600">
            PLAY
          </button>
          <div className="flex flex-col pl-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 text-green-500 inline-block mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16z"
                  clip-rule="evenodd"
                />
              </svg>
              6720 Online
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 text-yellow-500 inline-block mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16z"
                  clip-rule="evenodd"
                />
              </svg>
              2000 Favorites
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
