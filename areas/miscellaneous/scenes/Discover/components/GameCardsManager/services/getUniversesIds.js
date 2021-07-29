import { BACKEND_SERVER_URL } from "../../../../../../../services/utilities/constants";

export default async function getUniversesIds(universeIdsData) {
  const response = await (universeIdsData.length === 0
    ? fetch(`${BACKEND_SERVER_URL}/api/games/verified/page`)
    : fetch(
        `${BACKEND_SERVER_URL}/api/games/verified/page/${
          universeIdsData[universeIdsData.length - 1]._id
        }`
      ));

  const data = await response.json();

  if (data.success && data.payload) {
    return [...universeIdsData, ...data.payload];
  } else {
    return universeIdsData;
  }
}
