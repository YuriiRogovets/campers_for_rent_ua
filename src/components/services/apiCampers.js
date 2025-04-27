import axios from "axios";

axios.defaults.baseURL = "https://67fb7a978ee14a54262a22d0.mockapi.io";

export const fetchCampers = async () => {
  const { data } = await axios.get(`adverts`);
  return data;
};
