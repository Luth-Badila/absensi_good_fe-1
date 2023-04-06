import { defineStore } from "pinia";
import axios from "axios";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [],
    loading: false,
    menuItems: [],
    key1: import.meta.env.VITE_APP_KEY1,
    key2: import.meta.env.VITE_APP_KEY2,
    name: "Rooney",
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
    sidebarToggle() {
      document.querySelector(".flex-sidebar").classList.add("hidden");
    },
    async getMenu() {
      try {
        const res = await axios.get("https://fr-absen.jogjaide.web.id/api/menu_service/all", {
          headers: {
            "x-api-key": this.key1,
            "x-token": this.key2,
          },
        });
        sessionStorage.setItem("menuItems", res.menuItems);
        // console.log(res.data.data.menu_service);
        this.menuItems = res.data.data.menu_service;
      } catch (error) {
        console.log(error);
      }
      // const data = sessionStorage.getItem("menuItems");
      // if (data) {
      //   this.menuItems = JSON.parse(data);
      // } else {
      //   this.loading = true;
      //   const res = await fetch("https://fr-absen.jogjaide.web.id/api/menu_service/all", {
      //     method: "GET",
      //     headers: {
      //       "x-api-key": this.key1,
      //       "x-token": this.key2,
      //     },
      //   });
      //   const jsonData = await res.json();
      //   sessionStorage.setItem("menuItems", JSON.stringify(jsonData));
      //   this.menuItems = jsonData.data.menu_service;
      //   this.loading = false;
      // }
    },

    // const res = await fetch("https://fr-absen.jogjaide.web.id/api/menu_service/all", {
    //   method: "GET",
    //   headers: {
    //     "x-api-key": this.key1,
    //     "x-token": this.key2,
    //   },
    // });
    // const data = await res.json();
    // const finalRes = sessionStorage.setItem("menuItems", JSON.stringify(res.data.menu_service));
    // console.log((this.menuItems = finalRes));
    // this.menuItems = data.data.menu_service;
    // this.loading = false;
    // },
    // getMenu() {
    //   fetch("https://fr-absen.jogjaide.web.id/api/menu_service/all", {
    //     method: "GET",
    //     headers: {
    //       "x-api-key": this.key1,
    //       "x-token": this.key2,
    //     },
    //   })
    //     .then((response) => {
    //       console.log(response.data.menu_service);
    //       sessionStorage.setItem("menuItems", JSON.stringify(response.data.menu_service));
    //     })
    //     .catch((error) => {
    //       console.error(error.message);
    //     });
    // },
    async getTasks() {
      this.loading = true;
      const res = await fetch("http://localhost:3000/tasks");
      const data = await res.json();

      this.tasks = data;
      this.loading = false;
    },

    async addTask(task) {
      this.tasks.push(task);

      const res = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        body: JSON.stringify(task),
        headers: { "Content-type": "application/json" },
      });
      if (res.error) {
        console.log(res.error);
      }
    },
    async deleteTask(id) {
      this.tasks = this.tasks.filter((t) => {
        return t.id !== id;
      });
      const res = await fetch("http://localhost:3000/tasks/" + id, {
        method: "DELETE",
      });
      if (res.error) {
        console.log(res.error);
      }
    },
    async toggleFav(id) {
      const task = this.tasks.find((t) => t.id === id);
      task.isFav = !task.isFav;
      const res = await fetch("http://localhost:3000/tasks" + id, {
        method: "PATCH",
        body: JSON.stringify({ isFav: task.isFav }),
        headers: { "Content-type": "application/json" },
      });
      if (res.error) {
        console.log(res.error);
      }
    },
  },
});
