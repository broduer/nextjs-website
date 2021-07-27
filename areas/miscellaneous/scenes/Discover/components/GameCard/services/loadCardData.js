export default async function loadCardData(universeId, setGameCardData) {
  const universeDataResponse = await fetch("/api/gamecard", {
    method: "POST",
    body: JSON.stringify({ universeId }),
  });
  const universeData = await universeDataResponse.json();

  if (!universeData) throw new Error("UniverseId is invalid");

  setGameCardData(universeData.payload);
}
