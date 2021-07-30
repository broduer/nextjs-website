export default async function getGameCardsData(gameCardsData) {
  const gameCardsWithData = gameCardsData.filter((gameCard) =>
    Boolean(gameCard.data)
  );
  const gameCardsWithoutData = gameCardsData.filter(
    (gameCard) => !Boolean(gameCard.data)
  );

  if (gameCardsWithoutData.length === 0) {
    return;
  }

  const universeIdsOfGameCardsWithoutData = gameCardsWithoutData.map(
    (element) => element.universeId
  );

  const universesDataResponse = await fetch("/api/gamecard", {
    method: "POST",
    body: JSON.stringify({ universeIds: universeIdsOfGameCardsWithoutData }),
  });
  const universesData = await universesDataResponse.json();

  if (universesData.success && Boolean(universesData.payload)) {
    const gameCardsWithNewData = gameCardsWithoutData.map((gameCard) => {
      const data = universesData.payload.filter(
        (universeData) => universeData.universeId === gameCard.universeId
      )[0]?.data;

      return {
        _id: gameCard._id,
        universeId: gameCard.universeId,
        data,
      };
    });

    return [...gameCardsWithData, ...gameCardsWithNewData];
  } else {
    return gameCardsData;
  }
}
