import { useContext } from "react";
import { SpotifyUserContext } from "../../contexts/SpotifyUserContext";

const ArtistsCard = () => {
  const { spotifyUserData } = useContext(SpotifyUserContext);
  const artistsData = spotifyUserData.userTopArtists.data.items;

  return (
    <div className="w-56 md:w-80 my-auto bg-white bg-opacity-50 rounded-md">
      <div className="flex items-center justify-center m-2">
        <h1 className="text-2xl font-bold">Favorite Artists</h1>
      </div>
      <div>
        <ul>
          {artistsData.map((artist) => {
            return (
              <li
                key={artist.id}
                className="flex items-center m-1 rounded w-auto hover:bg-gray-300 overflow-x-auto no-scrollbar"
              >
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="m-1 min-w-max"
                  href={artist.external_urls.spotify}
                >
                  <img
                    className="h-16 w-16 rounded-full"
                    alt="album_cover"
                    src={artist.images[0].url}
                  />
                </a>
                <div className="h-14 flex items-center ">
                  <div className="h-fit">
                    <a
                      className=" hover:text-pink-700 font-semibold"
                      target="_blank"
                      rel="noreferrer"
                      href={artist.external_urls.spotify}
                    >
                      {artist.name}
                    </a>
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
export default ArtistsCard;
