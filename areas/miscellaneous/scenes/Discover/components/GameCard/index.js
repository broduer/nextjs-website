import { useState, useEffect } from "react";
import useAsync from "../../../../../../services/hooks/useAsync";

import LoadingGameCard from "./components/LoadingGameCard";
import FulfilledGameCard from "./components/FulfilledGameCard";

export default function GameCard({ gameCardData }) {
  return (
    <>
      {Boolean(gameCardData.data) ? (
        <FulfilledGameCard gameCardData={gameCardData} />
      ) : (
        <LoadingGameCard />
      )}
    </>
  );
}
