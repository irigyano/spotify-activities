import { FaSpotify } from "react-icons/fa";

const LoginButton = () => {
  const CLINET_ID = process.env.REACT_APP_CLINET_ID;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
  const AUTH_ENDPOINT = process.env.REACT_APP_AUTH_ENDPOINT;
  const RESPONSE_TYPE = process.env.REACT_APP_RESPONSE_TYPE;
  const SCOPE = [
    "user-read-private",
    "user-top-read",
    "user-read-recently-played",
    "user-read-currently-playing",
  ];

  return (
    <>
      <div className="bg-green-500 rounded items-center gap-3 max-w-full hover:bg-green-400">
        <a
          href={`${AUTH_ENDPOINT}?client_id=${CLINET_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`}
        >
          <p className="text-xl font-semibold flex items-center gap-1 p-1">
            <FaSpotify size={40} />
            Sign In with Spotify
          </p>
        </a>
      </div>
    </>
  );
};
export default LoginButton;
