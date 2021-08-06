import useAsync from "../../../../../../services/hooks/useAsync";
import { useState, useEffect, useRef } from "react";
import FulfilledGameCard from "./components/FulfilledGameCard";
import PendingGameCard from "./components/PendingGameCard";

import getGameCardsData from "./services/getGameCardsData";
import getGameCardsUrl from "./services/getGameCardsUrl";

export default function GameCardsManager({ className, searchFilter }) {
  const [gameCardsData, setGameCardsData] = useState([]);

  const noMorePagesRef = useRef(false);

  const [initiate, status, response, error] = useAsync(
    ({ searchFilter, gameCardsData }) =>
      getGameCardsData(getGameCardsUrl(searchFilter, gameCardsData))
  );

  useEffect(() => {
    setGameCardsData([]);
    noMorePagesRef.current = false;
    initiate({ searchFilter, gameCardsData: [] });
  }, [searchFilter]);

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
    if (document.documentElement.offsetHeight > window.innerHeight) {
      const loadOnScroll = () => {
        if (
          window.innerHeight + document.documentElement.scrollTop + 10 >=
          document.documentElement.offsetHeight
        ) {
          if (
            status !== "idle" &&
            status !== "pending" &&
            !noMorePagesRef.current
          ) {
            initiate({ searchFilter, gameCardsData });
          }
        }
      };
      window.addEventListener("scroll", loadOnScroll);
      return () => window.removeEventListener("scroll", loadOnScroll);
    } else {
      if (
        status !== "idle" &&
        status !== "pending" &&
        !noMorePagesRef.current
      ) {
        initiate({ searchFilter, gameCardsData });
      }
    }
  }, [status, gameCardsData]);

  return (
    <>
      {status === "fulfilled" && gameCardsData.length === 0 && (
        <div className="mt-16 w-full text-center text-gray-200 text-xl">
          Search result returned nothing
        </div>
      )}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ${className}`}
      >
        {gameCardsData.map((gameCardData, gameCardIndex) => (
          <FulfilledGameCard key={gameCardIndex} gameCardData={gameCardData} />
        ))}
        {status === "pending" &&
          [...Array(8).keys()].map((_, index) => (
            <PendingGameCard key={index} />
          ))}
      </div>
    </>
  );
}
