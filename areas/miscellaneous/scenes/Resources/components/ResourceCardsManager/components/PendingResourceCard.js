import NanobloxLogo from "../../../../../../../public/images/NanobloxLogo.png";

export default function PendingResourceCard() {
  return (
    <div className="w-full flex flex-col rounded-lg overflow-hidden shadow-lg">
      <div className="relative" style={{ paddingBottom: "60%" }}>
        <img
          className="absolute w-full h-full object-cover object-center"
          src={NanobloxLogo.src}
        />
      </div>
      <div className="w-full p-4 flex-grow flex flex-col bg-nanobloxGray">
        <div className="h-6 w-32 bg-gray-400 animate-pulse"></div>
        <div className="h-16 w-full mt-2 bg-gray-400 animate-pulse"></div>
        <div className="flex flex-grow mt-4">
          <div className="h-4 w-16 mt-auto bg-blue-300 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
