import { useState, useEffect } from "react";
import useAsync from "../../../../../../services/hooks/useAsync";

import LoadingGameCard from "./components/LoadingGameCard";
import FulfilledGameCard from "./components/FulfilledGameCard";

import loadCardData from "./services/loadCardData";

export default function GameCard({ universeId }) {
  const [gameCardData, setGameCardData] = useState({});

  const { initiate, status, response, error } = useAsync(async () =>
    loadCardData(universeId, setGameCardData)
  );

  useEffect(() => initiate(), []);

  return (
    <>
      {status === "pending" ? (
        <LoadingGameCard />
      ) : (
        status === "fulfilled" && (
          <FulfilledGameCard gameCardData={gameCardData} />
        )
      )}
    </>
  );
}
