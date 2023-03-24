import { useContext } from "react";
import { Link } from "react-router-dom";
import { SpotifyUserContext } from "../contexts/SpotifyUserContext";
import { IoLogOut } from "react-icons/io5";

const LogoutButton = () => {
  const { spotifyUserData, setSpotifyUserData } = useContext(SpotifyUserContext);
  const CleanUserData = () => {
    const nullifyValues = (obj) => {
      const nullObj = {};
      for (const key in obj) {
        nullObj[key] = null;
      }
      return nullObj;
    };

    setSpotifyUserData(nullifyValues(spotifyUserData));
    localStorage.removeItem("access_token");
  };

  return (
    <Link
      to="/"
      className="text-gray-200 text-3xl m-2 hover:text-pink-700 hover:border-pink-700 mx-auto border border-gray-200 rounded"
      onClick={() => {
        CleanUserData();
      }}
    >
      <IoLogOut />
    </Link>
  );
};
export default LogoutButton;
