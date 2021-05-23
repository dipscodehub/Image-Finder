import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID CVh6AJFiZP7XaOTRszGHWSlFbSDq_fHfJe_ZAtpEmls",
  },
});

