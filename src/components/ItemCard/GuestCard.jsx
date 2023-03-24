import DefaultUserPic from "../../assets/DefaultUserPic.png";
import LoginButton from "../LoginButton";

const GuestCard = () => {
  return (
    <div id="guestcard" className="flex flex-col items-center">
      <img alt="profile_picture" className="rounded-lg max-w-64 max-h-64 " src={DefaultUserPic} />
      <p className="text-lg font-semibold p-1 text-center">
        <span className="block">Welcome!</span>
        <span>Please sign in to continue.</span>
      </p>
      <LoginButton />
    </div>
  );
};
export default GuestCard;
