import { useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";
import { SpotifyUserContext } from "../contexts/SpotifyUserContext";

const Auth = () => {
  const { spotifyUserData, setSpotifyUserData } = useContext(SpotifyUserContext);

  // parse token from Spotify API due to weird format
  const freshed_token = window.location.hash.substring(1).split("&")[0].split("=")[1];

  useEffect(() => {
    if (freshed_token) {
      setSpotifyUserData({ ...spotifyUserData, access_token: freshed_token });
      localStorage.setItem("access_token", freshed_token);
    }
  }, []);

  return freshed_token ? <Navigate to="/home" /> : <Navigate to="/" />;
};
export default Auth;
