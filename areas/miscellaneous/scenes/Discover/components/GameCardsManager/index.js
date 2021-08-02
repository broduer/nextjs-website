import useAsync from "../../../../../../services/hooks/useAsync";
import { useState, useEffect, useRef } from "react";
import FulfilledGameCard from "./components/FulfilledGameCard";
import PendingGameCard from "./components/PendingGameCard";

import getGameCardsData from "./services/getGameCardsData";

export default function GameCardsManager({ className }) {
  const [gameCardsData, setGameCardsData] = useState([]);

  const noMorePagesRef = useRef(false);

  const [initiate, status, response, error] = useAsync(getGameCardsData);

  useEffect(() => initiate(gameCardsData), []);

  useEffect(() => {
    if (response) {
      if (response.length === 0) {
        noMorePagesRef.current = true;
      } else {
        setGameCardsData((value) => [...value, ...response]);
      }
    }
  }, [response]);

  useEffect(() => {
    const loadOnScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 10 >=
        document.documentElement.offsetHeight
      ) {
        if (status !== "pending" && !noMorePagesRef.current) {
          initiate(gameCardsData);
        }
      }
    };
    window.addEventListener("scroll", loadOnScroll);
    return () => window.removeEventListener("scroll", loadOnScroll);
  }, [status, gameCardsData]);

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ${className}`}
    >
      {gameCardsData.map((gameCardData, gameCardIndex) => (
        <FulfilledGameCard key={gameCardIndex} gameCardData={gameCardData} />
      ))}
      {status === "pending" &&
        [...Array(8).keys()].map((_, index) => <PendingGameCard key={index} />)}
    </div>
  );
}
