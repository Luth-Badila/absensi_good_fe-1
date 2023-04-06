<template>
  <div class="flex text-lg text-black overflow-hidden h-[100vh] justify-center self-center my-0 mx-auto w-[90%] lg:w-[100%]">
    <form class="py-0 px-[10px] lg:px-[50px] relative flex flex-col flex-1 justify-center items-center" @submit.prevent="handleSubmit">
      <p class="mb-[32px] text-black dark:text-white">
        Don't have an account ?
        <router-link to="/register" exact class="underline">Register</router-link>
      </p>
      <h2 class="text-center text-black dark:text-[#f2e6ff] lg:text-[32px] text-[40px] mb-[40px]">Create your account</h2>
      <div class="w-[100%] max-w-[350px]">
        <div class="relative flex justify-center items-center mb-[8px]">
          <input type="email" class="w-[100%] border-none bg-[#f2f7f6] py-[4px] pr-[4px] pl-[30px] h-[50px] focus:outline-none" placeholder="Your Email" name="username" v-model="username" required />
        </div>
        <div class="relative flex justify-center items-center mb-[8px]">
          <input type="password" class="w-[100%] border-none bg-[#f2f7f6] py-[4px] pr-[4px] pl-[30px] h-[50px] focus:outline-none" placeholder="Your Password" name="password" v-model="password" required />
        </div>
      </div>
      <router-link class="text-black dark:text-white cursor-pointer text-[14px] mt-[16px] mb-[30px] mx-0 transition ease-out duration-500" to="#">Forgot Your Password ?</router-link>
      <button class="text-black border-none py-[12px] px-[24px] bg-[#303030] dark:text-white rounded-md uppercase focus:outline-none hover:bg-[#333333]">Sign In</button>
      <div v-if="error" class="text-red-600">{{ error }}</div>
    </form>
    <div class="hidden overflow-hidden bg-cover flex-1 w-[100%] h-[100%] lg:block bg-register"></div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
export default {
  setup() {
    const username = ref("mamat@mamat.com");
    const password = ref("12345678");
    const error = ref(null);

    const handleSubmit = async () => {
      const api = "https://fr-absen.jogjaide.web.id/api/user/login";
      const data = {
        username: username.value,
        password: password.value,
      };
      const headers = {
        "x-api-key": import.meta.env.VITE_APP_KEY1,
      };
      try {
        const response = await axios.post(api, data, { headers });
        console.log(response);
        this.$router.push("/");
        return;
      } catch (error) {
        console.error(error);
      }
    };
    return { handleSubmit, username, password, error };
  },
};
</script>
