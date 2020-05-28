import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "https://pintreach1.herokuapp.com/",
    headers: {
      authorization: token,
    },
  });
};
