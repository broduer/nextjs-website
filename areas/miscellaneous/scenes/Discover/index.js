import NavigationBarWithSearchBar from "../../../../components/navigationBars/NavigationBarWithSearchBar";
import GameCard from "./components/GameCard";
import SearchFilters from "./components/SearchFilters";

export default function Discover() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-nanobloxGray-light">
      <NavigationBarWithSearchBar />
      <div className="container mx-auto my-2 flex-grow">
        <SearchFilters />

        <div className="px-4 pt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
        </div>
      </div>
    </div>
  );
}
