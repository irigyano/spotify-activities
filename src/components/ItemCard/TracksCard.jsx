import { useContext } from "react";
import { SpotifyUserContext } from "../../contexts/SpotifyUserContext";

const TracksCard = () => {
  const { spotifyUserData } = useContext(SpotifyUserContext);
  const tracksData = spotifyUserData.userTopTracks.data.items;

  return (
    <div className="w-56 md:w-80 my-auto bg-white bg-opacity-50 rounded-md">
      <div className="flex items-center justify-center m-2">
        <h1 className="text-2xl font-bold">Favorite Songs</h1>
      </div>
      <div>
        <ul>
          {tracksData.map((track) => {
            return (
              <li
                key={track.id}
                className="flex items-center m-1 rounded w-auto hover:bg-gray-300 overflow-x-auto no-scrollbar"
              >
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="m-1 min-w-max"
                  href={track.album.external_urls.spotify}
                >
                  <img
                    className="h-16 w-16 rounded"
                    alt="album_cover"
                    src={track.album.images[0].url}
                  />
                </a>
                <div className="flex flex-col justify-center h-14">
                  <a
                    className="w-max hover:text-pink-700 font-semibold"
                    target="_blank"
                    rel="noreferrer"
                    href={track.external_urls.spotify}
                  >
                    {track.name}
                  </a>

                  <div className="flex">
                    {track.artists.map((artist, index) => {
                      if (index === track.artists.length - 1) {
                        return (
                          <div className="w-max" key={artist.id}>
                            <a
                              className="hover:text-pink-700 text-sm"
                              target="_blank"
                              rel="noreferrer"
                              href={artist.external_urls.spotify}
                            >
                              {artist.name}
                            </a>
                          </div>
                        );
                      } else {
                        return (
                          <div className="w-max" key={artist.id}>
                            <a
                              className="w-max hover:text-pink-700 text-sm"
                              target="_blank"
                              rel="noreferrer"
                              href={artist.external_urls.spotify}
                            >
                              {artist.name}
                            </a>
                            <span>,</span>
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default TracksCard;
