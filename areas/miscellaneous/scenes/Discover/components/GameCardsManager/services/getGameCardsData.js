export default async function getGameCardsData(universeIdsData) {
  if (universeIdsData.length === 0) {
    return;
  }

  const universeIds = universeIdsData.map((element) => element.universeId);

  const universeDataResponse = await fetch("/api/gamecard", {
    method: "POST",
    body: JSON.stringify({ universeIds }),
  });
  const universeData = await universeDataResponse.json();

  if (universeData.success && Boolean(universeData.payload)) {
    const existingData = universeIdsData.filter((oldData) =>
      universeData.payload.some((newData) => newData._id === oldData)
    );

    return [...existingData, ...universeData.payload];
  }
}
