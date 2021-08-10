import useAsync from "../../../../../../services/hooks/useAsync";
import { useState, useEffect, useRef } from "react";

import ResourceCard from "./components/ResourceCard";

import getResourceCardsData from "./services/getResourceCardsData";
import hasScrolledToBottom from "../../../../../../services/utilities/hasScrolledToBottom";

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
    if (hasScrolledToBottom()) {
      if (status === "fulfilled" && !noMorePagesRef.current) {
        initiate(resourceCardsData);
      }
    }

    if (document.documentElement.offsetHeight > window.innerHeight) {
      const loadOnScroll = () => {
        if (hasScrolledToBottom()) {
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
          <ResourceCard
            key={resourceCardIndex}
            resourceCardData={resourceCardData}
          />
        ))}
      </div>
      {status === "pending" && (
        <div className="flex my-16">
          <div className="loader mx-auto ease-linear rounded-full border-8 border-gray-200 h-16 w-16"></div>
        </div>
      )}
    </>
  );
}
