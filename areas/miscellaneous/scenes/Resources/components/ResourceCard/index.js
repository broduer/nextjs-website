export default function ResourceCard({ imageUrl, title, description }) {
  return (
    <div className="w-full flex flex-col mx-auto rounded-lg overflow-hidden shadow-lg">
      <img className="w-full object-cover object-center" src={imageUrl} />
      <div className="w-full p-4 flex-grow flex flex-col bg-nanobloxGray text-white">
        <div className="text-xl font-semibold">{title}</div>
        <div className="text-sm text-gray-300">{description}</div>
        <a href="#" className="text-sm text-blue-300 mt-4">
          Learn more...
        </a>
      </div>
    </div>
  );
}
