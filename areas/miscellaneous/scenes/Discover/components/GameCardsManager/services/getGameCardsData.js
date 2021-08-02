import { BACKEND_SERVER_URL } from "../../../../../../../services/utilities/constants";

export default async function getGameCardsData(gameCardsData) {
  const response = await (gameCardsData.length === 0
    ? fetch(`${BACKEND_SERVER_URL}/api/games/verified/page`)
    : fetch(
        `${BACKEND_SERVER_URL}/api/games/verified/page/${
          gameCardsData[gameCardsData.length - 1]._id
        }`
      ));

  const data = await response.json();

  return data.payload;
}
