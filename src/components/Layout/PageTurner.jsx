import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import { useState, useContext } from "react";
import User from "../User";
import { SpotifyUserContext } from "../../contexts/SpotifyUserContext";
import GuestCard from "../ItemCard/GuestCard";

const PageTurner = () => {
  const [pageIndex, SetPageIndex] = useState(0);
  const { spotifyUserData } = useContext(SpotifyUserContext);

  const PreviousPage = () => {
    SetPageIndex((prev) => prev - 1);
  };

  const NextPage = () => {
    SetPageIndex((prev) => prev + 1);
  };

  return (
    <div className="flex justify-center" id="pageturner">
      {spotifyUserData.userProfile ? (
        <div className="flex items-center" id="prevbtn">
          <button
            className={
              pageIndex === 0
                ? "text-gray-400 text-3xl p-2 cursor-default"
                : "text-gray-200 text-3xl p-2 hover:text-pink-700"
            }
            onClick={pageIndex === 0 ? null : PreviousPage}
          >
            <BsArrowLeftSquareFill />
          </button>
        </div>
      ) : null}

      {spotifyUserData.userProfile ? <User page={pageIndex} /> : <GuestCard />}

      {spotifyUserData.userProfile ? (
        <div className="flex items-center" id="nxtbtn">
          <button
            className={
              pageIndex === 3
                ? "text-gray-400 text-3xl p-2 cursor-default"
                : "text-gray-200 text-3xl p-2 hover:text-pink-700"
            }
            onClick={pageIndex === 3 ? null : NextPage}
          >
            <BsArrowRightSquareFill />
          </button>
        </div>
      ) : null}
    </div>
  );
};
export default PageTurner;
