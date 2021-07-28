import useAsync from "../../../../../../services/hooks/useAsync";
import { useState, useEffect } from "react";

import GameCard from "../GameCard";

import getGameCardsData from "./services/getGameCardsData";

export default function GameCardsManager({ className }) {
  const [gameCardsData, setGameCardsData] = useState([
    { universeId: 2082205150 },
    { universeId: 1077961373 },
    { universeId: 117307972 },
    { universeId: 552855493 },
    { universeId: 2471084 },
    { universeId: 1650291138 },
    { universeId: 2265532481 },
  ]);

  const { initiate, status, response, error } = useAsync(async () =>
    getGameCardsData(gameCardsData)
  );

  useEffect(initiate, []);
  useEffect(() => {
    setGameCardsData((value) => response || value);
  }, [response]);

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ${className}`}
    >
      {gameCardsData.map(
        (gameCardData, gameCardIndex) =>
          (Boolean(gameCardData.title) || status === "pending") && (
            <GameCard key={gameCardIndex} gameCardData={gameCardData} />
          )
      )}
    </div>
  );
}
