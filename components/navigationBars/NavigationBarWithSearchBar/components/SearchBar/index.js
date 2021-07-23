export default function SearchBar({ className }) {
  return (
    <div className={className}>
      <div className="overflow-hidden rounded-lg flex bg-nanobloxGray-dark">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 p-1 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          className="w-full pl-1 flex-grow bg-nanobloxGray-dark text-white outline-none"
          type="text"
          value=""
          placeholder="Search"
        ></input>
      </div>
    </div>
  );
}
