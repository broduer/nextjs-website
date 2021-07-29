import useAsync from "../../../../../../services/hooks/useAsync";
import { useState, useEffect } from "react";

import GameCard from "../GameCard";

import getGameCardsData from "./services/getGameCardsData";
import getUniversesIds from "./services/getUniversesIds";

export default function GameCardsManager({ className }) {
  const [universeIdsData, setUniverseIdsData] = useState([]);
  const [gameCardsData, setGameCardsData] = useState([]);

  const [
    loadUniverseIds,
    universeIdsStatus,
    universeIdsResponse,
    universeIdsError,
  ] = useAsync(() => getUniversesIds(universeIdsData));

  const [
    loadGameCardsData,
    gameCardsDataStatus,
    gameCardsDataResponse,
    gameCardsDataError,
  ] = useAsync(() => getGameCardsData(universeIdsData));

  useEffect(() => loadUniverseIds(), []);

  useEffect(() => {
    setUniverseIdsData((value) => universeIdsResponse || value);
  }, [universeIdsResponse]);

  useEffect(() => loadGameCardsData(), [universeIdsData]);

  useEffect(() => {
    setGameCardsData((value) => gameCardsDataResponse || value);
  }, [gameCardsDataResponse]);

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ${className}`}
    >
      {gameCardsData.map(
        (gameCardData, gameCardIndex) =>
          (Boolean(gameCardData.data) || status === "pending") && (
            <GameCard key={gameCardIndex} gameCardData={gameCardData} />
          )
      )}
    </div>
  );
}
