import { useState, useEffect } from "react";
import useAsync from "../../../../../../services/hooks/useAsync";

import LoadingGameCard from "./components/LoadingGameCard";
import FulfilledGameCard from "./components/FulfilledGameCard";

export default function GameCard({ gameCardData }) {
  return (
    <>
      {gameCardData.title ? (
        <FulfilledGameCard gameCardData={gameCardData} />
      ) : (
        <LoadingGameCard />
      )}
    </>
  );
}
