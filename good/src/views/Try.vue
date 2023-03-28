<template>
  <div>
    <div v-for="item in listItems" :key="item">
      {{ item.data }}
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      listItems: [],
    };
  },
  methods: {
    async getData() {
      // const res = await axios.get("https://fr-absen.jogjaide.web.id/api/menu_service/all", {
      //   headers: {
      //     "x-api-key": "8C16C3D13211DB231DD030C341B1EFB5",
      //     "x-token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImlkIjoiOSJ9LCJpYXQiOjE2Nzk2NDUyNzcsImV4cCI6MTY3OTczMTY3N30.wPTV47jmRixJ6l0h1R8dbZRd5ka3kq0vpgswG8pFwTw",
      //   },
      // });
      // const finalRes = await res.json();
      // this.listItems = finalRes;
      // const headers = new Headers();
      // headers.append("x-api-key", "8C16C3D13211DB231DD030C341B1EFB5");
      // headers.append("x-token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImlkIjoiOSJ9LCJpYXQiOjE2Nzk2NDUyNzcsImV4cCI6MTY3OTczMTY3N30.wPTV47jmRixJ6l0h1R8dbZRd5ka3kq0vpgswG8pFwTw");
      // headers: headers,

      fetch("https://fr-absen.jogjaide.web.id/api/menu_service/all", {
        method: "GET",
        headers: {
          "x-api-key": "8C16C3D13211DB231DD030C341B1EFB5",
          "x-token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImlkIjoiOSJ9LCJpYXQiOjE2Nzk5OTA0MTIsImV4cCI6MTY4MDA3NjgxMn0.KBOX6pj7S933PhjdozsYxngNseTQ7Jao-uM5Tsrpn0Q",
        },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
