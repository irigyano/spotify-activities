import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { SpotifyUserContext } from "../contexts/SpotifyUserContext";
import PageTurner from "../components/Layout/PageTurner";

const Index = () => {
  const { spotifyUserData } = useContext(SpotifyUserContext);

  return spotifyUserData.userProfile ? <Navigate to="/home" /> : <PageTurner />;
};

export default Index;
