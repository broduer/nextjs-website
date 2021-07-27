import { useState, useEffect } from "react";
import useAsync from "../../../../../../services/hooks/useAsync";

import LoadingGameCard from "./components/LoadingGameCard";
import FulfilledGameCard from "./components/FulfilledGameCard";

import loadCardData from "./services/loadCardData";

export default function GameCard({ universeId }) {
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [title, setTitle] = useState("");
  const [creatorName, setCreatorName] = useState("");
  const [onlinePlayers, setOnlinePlayers] = useState(0);
  const [totalFavorites, setTotalFavorites] = useState(0);

  const { initiate, status, response, error } = useAsync(async () =>
    loadCardData(
      universeId,
      setThumbnailUrl,
      setTitle,
      setCreatorName,
      setOnlinePlayers,
      setTotalFavorites
    )
  );

  useEffect(() => initiate(), []);

  return (
    <>
      {status === "pending" ? (
        <LoadingGameCard />
      ) : (
        status === "fulfilled" && (
          <FulfilledGameCard
            thumbnailUrl={thumbnailUrl}
            title={title}
            creatorName={creatorName}
            onlinePlayers={onlinePlayers}
            totalFavorites={totalFavorites}
          />
        )
      )}
    </>
  );
}
