import { createContext, useEffect, useState } from "react";
import { sendRequest } from "../utils/fetchAPI";

export const SpotifyUserContext = createContext();

export const SpotifyUserContextProvider = ({ children }) => {
  const [spotifyUserData, setSpotifyUserData] = useState({
    access_token: null,
    userProfile: null,
    userTopTracks: null,
    userTopArtists: null,
    userRecentPlay: null,
  });

  useEffect(() => {
    const untested_token = window.localStorage.getItem("access_token");
    if (untested_token) {
      sendRequest(untested_token, "me")
        // token passed testing
        .then((res) => {
          Promise.all([
            sendRequest(untested_token, "me"),
            sendRequest(untested_token, "me/top/tracks?limit=10&time_range=short_term"),
            sendRequest(untested_token, "me/top/artists?limit=10&time_range=short_term"),
            sendRequest(untested_token, "me/player/recently-played?limit=50"),
          ]).then((res) => {
            const [userProfile, userTopTracks, userTopArtists, userRecentPlay] = res;
            setSpotifyUserData({
              access_token: untested_token,
              userProfile,
              userTopTracks,
              userTopArtists,
              userRecentPlay,
            });
          });
        })
        .catch((err) => {
          // maybe clear setState
          console.log("Token expired");
          window.localStorage.removeItem("access_token");
        });
    }
  }, []);
  return (
    <SpotifyUserContext.Provider
      value={{
        spotifyUserData,
        setSpotifyUserData,
      }}
    >
      {children}
    </SpotifyUserContext.Provider>
  );
};
