import NavigationBarWithSearchBar from "../../../../components/navigationBars/NavigationBarWithSearchBar";
import GameCardsManager from "./components/GameCardsManager";
import SearchFilters from "./components/SearchFilters";

export default function Discover() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-nanobloxGray-light">
      <NavigationBarWithSearchBar />
      <div className="container mx-auto my-2 flex-grow">
        <SearchFilters />
        <GameCardsManager className="px-4 pt-4" />
      </div>
    </div>
  );
}
