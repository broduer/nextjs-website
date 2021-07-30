import useAsync from "../../../../../../services/hooks/useAsync";
import { useState, useEffect, useRef } from "react";

import GameCard from "../GameCard";

import getGameCardsData from "./services/getGameCardsData";
import getUniversesIds from "./services/getUniversesIds";

export default function GameCardsManager({ className }) {
  const loadGameCardsDataRef = useRef(false);
  const [gameCardsData, setGameCardsData] = useState([]);

  const [
    loadUniverseIds,
    universeIdsStatus,
    universeIdsResponse,
    universeIdsError,
  ] = useAsync(getUniversesIds);

  const [
    loadGameCardsData,
    gameCardsDataStatus,
    gameCardsDataResponse,
    gameCardsDataError,
  ] = useAsync(getGameCardsData);

  useEffect(() => loadUniverseIds(gameCardsData), []);

  useEffect(() => {
    if (loadGameCardsDataRef.current) {
      loadGameCardsData(gameCardsData);
      loadGameCardsDataRef.current = false;
    }
  }, [gameCardsData]);

  useEffect(() => {
    setGameCardsData((value) => universeIdsResponse || value);
    loadGameCardsDataRef.current = true;
  }, [universeIdsResponse]);

  useEffect(() => {
    setGameCardsData((value) => gameCardsDataResponse || value);
  }, [gameCardsDataResponse]);

  useEffect(() => {
    const loadOnScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 10 >=
        document.documentElement.offsetHeight
      ) {
        if (universeIdsStatus !== "pending") {
          loadUniverseIds(gameCardsData);
        }
      }
    };
    window.addEventListener("scroll", loadOnScroll);
    return () => window.removeEventListener("scroll", loadOnScroll);
  }, [gameCardsData]);

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ${className}`}
    >
      {gameCardsData.map(
        (gameCardData, gameCardIndex) =>
          (Boolean(gameCardData.data) || gameCardsDataStatus === "pending") && (
            <GameCard key={gameCardIndex} gameCardData={gameCardData} />
          )
      )}
    </div>
  );
}
