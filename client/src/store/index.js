import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import createSocketioPlugin from "./socketioStorePlugin";
import socket from "../socket";

Vue.use(Vuex);

const socketioPlugin = createSocketioPlugin(socket);

export default new Vuex.Store({
  state: {
    currentView: "Login",
    userType: "",
    userData: {
      uuid: 911327098,
      name: "Simon Wensleydale",
      email: "cheese-enthusiast@email.com",
      location: "Utsunomiya",
      languages: ["English", "Japanese", "Burmese", "Xhosa"],
      rating: 0,
      weekdays: ["Monday", "Friday"],
      blacklist: [],
      whitelist: [],
      completedTours: 55,
      bio:
        "Wensleydale cheese was first made by French Cistercian monks from the Roquefort region, who had settled in Wensleydale. They built a monastery at Fors, but some years later the monks moved to Jervaulx in Lower Wensleydale. They brought with them a recipe for making cheese from sheep's milk. During the 14th century cows' milk began to be used instead, and the character of the cheese began to change. A little ewes' milk was still mixed in since it gave a more open texture, and allowed the development of the blue mould. At that time, Wensleydale was almost always blue with the white variety almost unknown."
    },
    filteredGuides: []
  },
  plugins: [socketioPlugin],
  // sync stuff - Use "commit"
  mutations: {
    changeView(state, payload) {
      this.state.currentView = payload;
    },
    setUserType(state, payload) {
      this.state.userType = "traveller";
    },
    setFilteredGuides(state, payload) {
      this.state.filteredGuides = payload;
    }
  },
  // async stuff - Use "dispatch"
  actions: {
    search(state, payload) {
      state.commit("setFilteredGuides");
    },

    dispatchMessage(state, payload) {
      socket.emit("Message", payload);
      console.log("I SENT IT YOU PRICK");
    }
  }
});
