import { useContext } from "react";
import { SpotifyUserContext } from "../../contexts/SpotifyUserContext";

const ProfileCard = () => {
  const { spotifyUserData } = useContext(SpotifyUserContext);
  const profileData = spotifyUserData.userProfile.data;
  const artistsData = spotifyUserData.userTopArtists.data.items;
  const tracksData = spotifyUserData.userTopTracks.data.items;

  return (
    <div id="profilecard" className=" bg-white bg-opacity-50 rounded-md w-56 md:w-80">
      <div className="flex justify-center items-center">
        {/* <div className="w-64 h-64 flex p-2"> */}
        <img
          alt="profile_picture"
          className="w-64 h-64 p-2 rounded-2xl object-cover"
          src={profileData.images[0].url}
        />
        {/* </div> */}
      </div>

      <div className="text-center">
        <h1>
          Welcome! <span className="font-bold">{profileData.display_name}</span>
        </h1>
        <a
          className="hover:text-pink-700"
          target="_blank"
          rel="noreferrer"
          href={profileData.external_urls.spotify}
        >
          {"@" + profileData.id}
        </a>
      </div>

      <div>
        <h2 className="text-center font-bold text-xl p-1">Favorite Artists</h2>
        <ul>
          {artistsData.slice(0, 3).map((artist) => {
            return (
              <li key={artist.id} className="flex items-center">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="m-1 min-w-max"
                  href={artist.external_urls.spotify}
                >
                  <img className="h-16 w-16 rounded" alt="album_cover" src={artist.images[0].url} />
                </a>
                <div className="flex flex-col justify-center items-start h-14  truncate ...">
                  <a
                    className="max-w-min hover:text-pink-700 font-semibold"
                    target="_blank"
                    rel="noreferrer"
                    href={artist.external_urls.spotify}
                  >
                    {artist.name}
                  </a>
                  <span>
                    {"Popularity(Global): "}
                    {artist.popularity}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <h2 className="font-bold text-xl text-center p-1">Favorite Songs</h2>
        <ul className="">
          {tracksData.slice(0, 3).map((track) => {
            return (
              <li key={track.id} className="flex items-center">
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
                <div className="flex flex-col justify-center h-14  truncate ...">
                  <a
                    className="max-w-min hover:text-pink-700 font-semibold"
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
                          <div key={artist.id}>
                            <a
                              className="max-w-min hover:text-pink-700 text-sm"
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
                          <div key={artist.id}>
                            <a
                              className="max-w-min hover:text-pink-700 text-sm"
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
export default ProfileCard;
