export default function NavigationLinks({ className }) {
  return (
    <div className={`text-white hidden sm:block ${className}`}>
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
  );
}
