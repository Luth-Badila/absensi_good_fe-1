import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [
      {
        id: 1,
        title: "buy some milk",
        isFav: false,
      },
      {
        id: 2,
        title: "play gloomhaven",
        isFav: true,
      },
      {
        id: 3,
        title: "buy some drink",
        isFav: true,
      },
    ],
    menuItems: [],
  }),
  getters: {
    favs() {
      return this.tasks.filter((t) => t.isFav);
    },
    favCount() {
      return this.tasks.reduce((prev, cur) => {
        return cur.isFav ? prev + 1 : prev;
      }, 0);
    },
    totalCount: (state) => {
      return state.tasks.length;
    },
  },
});
