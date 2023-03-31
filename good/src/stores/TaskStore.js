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
  actions: {
    addTask(task) {
      this.tasks.push(task);
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((t) => {
        return t.id !== id;
      });
    },
    toggleFav(id) {
      const task = this.tasks.find((t) => t.id === id);
      task.isFav = !task.isFav;
    },
  },
});
