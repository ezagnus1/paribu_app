import User from "@/models/User.js";

export default {
  setCurrentUser(state, payload) {
    state.currentUser = new User({
      name: payload[0].name,
      email: payload[0].email,
      password: payload[0].password,
    });
  },
};
