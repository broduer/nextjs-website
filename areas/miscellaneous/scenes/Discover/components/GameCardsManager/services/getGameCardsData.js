export default async function getGameCardsData(gameCardsUrl) {
  const response = await fetch(gameCardsUrl);

  const data = await response.json();

  return data.payload;
}
