import ProfileCard from "./ItemCard/ProfileCard";
import TracksCard from "./ItemCard/TracksCard";
import ArtistsCard from "./ItemCard/ArtistsCard";
import RecentPlayedCard from "./ItemCard/RecentPlayedCard";
import LogoutButton from "./LogoutButton";

const User = ({ page }) => {
  const pages = [<ProfileCard />, <ArtistsCard />, <TracksCard />, <RecentPlayedCard />];

  return (
    <div className="flex flex-col">
      {pages[page]}
      <LogoutButton />
    </div>
  );
};
export default User;
