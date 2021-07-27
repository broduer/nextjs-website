import DefaultRobloxPlace from "../../../../../../../public/images/DefaultRobloxPlace.png";

export default function LoadingGameCard() {
  return (
    <div className="w-full flex flex-col rounded-lg overflow-hidden shadow-lg">
      <div className="relative" style={{ paddingBottom: "56%" }}>
        <img
          className="absolute w-full h-full object-cover object-center"
          src={DefaultRobloxPlace.src}
        />
      </div>
      <div className="w-full p-4 flex-grow flex flex-col bg-nanobloxGray text-white">
        <div className="w-32 h-6 mt-1 bg-gray-400 animate-pulse"></div>
        <div className="w-16 h-4 mt-2 bg-gray-400 animate-pulse"></div>
        <div className="flex items-center pt-4">
          <div className="w-24 h-10 bg-green-400 animate-pulse"></div>
          <div className="flex flex-col pl-4">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 text-green-500 inline-block mr-2 animate-pulse"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="w-24 h-4 bg-gray-400 animate-pulse"></div>
            </div>
            <div className="flex items-center mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 text-yellow-500 inline-block mr-2 animate-pulse"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="w-24 h-4 bg-gray-400 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
