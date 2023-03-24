import axios from "axios";

export const sendRequest = (token, endpoint) => {
  return axios.get(`https://api.spotify.com/v1/${endpoint}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};
