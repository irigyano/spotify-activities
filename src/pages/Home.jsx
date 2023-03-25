import { useContext } from "react";
import PageTurner from "../components/Layout/PageTurner";
import Loading from "../components/Loading";
import { SpotifyUserContext } from "../contexts/SpotifyUserContext";

const Home = () => {
  const { spotifyUserData } = useContext(SpotifyUserContext);

  return spotifyUserData.userProfile ? <PageTurner /> : <Loading />;
};
export default Home;
