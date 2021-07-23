export default function NavigationMenu({ className }) {
  return (
    <div className={`px-4 flex flex-col text-white sm:hidden ${className}`}>
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
  );
}
