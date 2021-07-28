export default async function getGameCardsData(gameCardsData) {
  const universeIds = gameCardsData
    .filter((gameCardData) => !gameCardData.data)
    .map((gameCardData) => gameCardData.universeId);

  const universeDataResponse = await fetch("/api/gamecard", {
    method: "POST",
    body: JSON.stringify({ universeIds }),
  });
  const universeData = await universeDataResponse.json();

  return universeData.payload;
}
