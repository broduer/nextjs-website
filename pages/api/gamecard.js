import fetch from "node-fetch";

export default async function handler(request, response) {
  try {
    if (request.method === "POST") {
      const { universeId } = JSON.parse(request.body);

      const universeDataResponse = await fetch(
        `https://games.roblox.com/v1/games?universeIds=${universeId}`
      );
      const universeData = (await universeDataResponse.json()).data[0];

      if (!universeData) throw new Error("UniverseId is invalid");

      const {
        name: title,
        creator,
        playing: onlinePlayers,
        favoritedCount: totalFavorites,
      } = universeData;

      const creatorName = creator.name;

      const universeThumbnailResponse = await fetch(
        `https://thumbnails.roblox.com/v1/games/multiget/thumbnails?universeIds=${universeId}&size=768x432&format=Png&isCircular=false`
      );
      const universeThumbnailData = (await universeThumbnailResponse.json())
        .data[0];

      if (!universeThumbnailData)
        throw new Error("Unable to connect to Roblox web API");

      const rootPlaceThumbnailData = universeThumbnailData.thumbnails[0];

      if (!rootPlaceThumbnailData) throw new Error("Unable to find root place");

      const { imageUrl: thumbnailUrl } = rootPlaceThumbnailData;

      return response.status(200).json({
        success: true,
        payload: {
          title,
          creatorName,
          onlinePlayers,
          totalFavorites,
          thumbnailUrl,
        },
      });
    }
  } catch (error) {
    return response.status(500).json({
      success: false,
      errors: [{ path: ["server"], message: error.message }],
    });
  }
}
