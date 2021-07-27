export default async function loadCardData(
  universeId,
  setThumbnailUrl,
  setTitle,
  setCreatorName,
  setOnlinePlayers,
  setTotalFavorites
) {
  const universeDataResponse = await fetch("/api/gamecard", {
    method: "POST",
    body: JSON.stringify({ universeId }),
  });
  const universeData = await universeDataResponse.json();

  if (!universeData) throw new Error("UniverseId is invalid");

  const { title, creatorName, onlinePlayers, totalFavorites, thumbnailUrl } =
    universeData.payload;

  setTitle(title);
  setCreatorName(creatorName);
  setOnlinePlayers(onlinePlayers);
  setTotalFavorites(totalFavorites);
  setThumbnailUrl(thumbnailUrl);
}
