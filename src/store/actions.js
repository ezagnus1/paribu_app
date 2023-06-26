import axios from "axios";

export default {
  getCurrentUser(context, loginInformation) {
    const url = new URL("https://648082e1f061e6ec4d4967f2.mockapi.io/users");

    url.searchParams.append("email", loginInformation.email);
    url.searchParams.append("password", loginInformation.password);

    axios
      .get(url)
      .then((response) => {
        if (response.data.length > 0)
          context.commit("setCurrentUser", response.data);
      })
      .catch((error) => {
        return error;
      });
  },

  signUpUser(_, signedUser) {
    axios
      .post("https://648082e1f061e6ec4d4967f2.mockapi.io/users", signedUser)
      .then((response) => {
        return response.data;
      })
      .catch((error) => error);
  },
};
