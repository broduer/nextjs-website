export default function ResourceCard({ title, description }) {
  return (
    <div className="w-full mx-auto rounded-lg overflow-hidden shadow-lg">
      <img
        className="w-full object-cover object-center"
        src="https://blog.roblox.com/wp-content/uploads/2020/10/BlogPost_ExpandingStudioMarketplace_1080x1920-1024x576.jpg"
      />
      <div className="w-full h-full p-4 flex flex-col bg-nanobloxGray text-white">
        <div className="text-xl font-semibold">{title}</div>
        <div className="text-sm text-gray-300">{description}</div>
        <a href="#" className="text-sm text-blue-300 mt-4">
          Learn more...
        </a>
      </div>
    </div>
  );
}
