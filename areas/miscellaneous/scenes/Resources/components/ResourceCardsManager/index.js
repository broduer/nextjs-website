import useAsync from "../../../../../../services/hooks/useAsync";
import { useState, useEffect, useRef } from "react";

import PendingResourceCard from "./components/PendingResourceCard";
import FulfilledResourceCard from "./components/FulfilledResourceCard";

import getResourceCardsData from "./services/getResourceCardsData";

export default function ResourceCardsManager({ className }) {
  const [resourceCardsData, setResourceCardsData] = useState([]);

  const noMorePagesRef = useRef(false);

  const [initiate, status, response, error] = useAsync((resourceCardsData) =>
    getResourceCardsData(resourceCardsData)
  );

  useEffect(() => {
    initiate(resourceCardsData);
  }, []);

  useEffect(() => {
    if (response) {
      if (response.length === 0) {
        noMorePagesRef.current = true;
      } else {
        setResourceCardsData((value) => [...value, ...response]);
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
          if (status === "fulfilled" && !noMorePagesRef.current) {
            initiate(resourceCardsData);
          }
        }
      };
      window.addEventListener("scroll", loadOnScroll);
      return () => window.removeEventListener("scroll", loadOnScroll);
    } else {
      if (status === "fulfilled" && !noMorePagesRef.current) {
        initiate(resourceCardsData);
      }
    }
  }, [status, resourceCardsData]);

  return (
    <>
      {(status === "fulfilled" || status === "rejected") &&
        resourceCardsData.length === 0 && (
          <div className="mt-16 w-full text-center text-gray-200 text-xl">
            No Resources Found
          </div>
        )}
      <div
        className={`${className} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4`}
      >
        {resourceCardsData.map((resourceCardData, resourceCardIndex) => (
          <FulfilledResourceCard
            key={resourceCardIndex}
            resourceCardData={resourceCardData}
          />
        ))}
        {status === "pending" &&
          [...Array(8).keys()].map((_, index) => (
            <PendingResourceCard key={index} />
          ))}
      </div>
    </>
  );
}
