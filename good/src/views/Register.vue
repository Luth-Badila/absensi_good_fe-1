<template>
  <div class="relative flex text-lg text-black overflow-hidden h-[100vh] justify-center self-center my-0 mx-auto w-[90%] lg:w-[100%] z-99">
    <form class="py-0 px-[10px] lg:px-[50px] relative flex flex-col flex-1 justify-center items-center">
      <p class="mb-[32px] text-black dark:text-white">
        Already have an account ?
        <router-link to="/login" exact class="underline"> Login </router-link>
      </p>
      <h2 class="text-center text-black dark:text-[#f2e6ff] lg:text-[32px] text-[40px] mb-[40px] leading-10">Create your account</h2>
      <div class="w-[100%] max-w-[350px]">
        <div class="relative flex justify-center items-center mb-[8px]">
          <input type="text" class="w-[100%] border-none bg-[#f2f7f6] py-[4px] pr-[4px] pl-[30px] h-[50px] focus:outline-none" placeholder="First Name" />
        </div>
        <div class="relative flex justify-center items-center mb-[8px]">
          <input type="text" class="w-[100%] border-none bg-[#f2f7f6] py-[4px] pr-[4px] pl-[30px] h-[50px] focus:outline-none" placeholder="Last Name" />
        </div>
        <div class="relative flex justify-center items-center mb-[8px]">
          <input type="text" class="w-[100%] border-none bg-[#f2f7f6] py-[4px] pr-[4px] pl-[30px] h-[50px] focus:outline-none" placeholder="Username" />
        </div>
        <div class="relative flex justify-center items-center mb-[8px]">
          <input type="email" class="w-[100%] border-none bg-[#f2f7f6] py-[4px] pr-[4px] pl-[30px] h-[50px] focus:outline-none" placeholder="Your Email" />
        </div>
        <div class="relative flex justify-center items-center mb-[8px]">
          <input type="password" class="w-[100%] border-none bg-[#f2f7f6] py-[4px] pr-[4px] pl-[30px] h-[50px] focus:outline-none" placeholder="Your Password" />
        </div>
      </div>
      <router-link class="text-black dark:text-white cursor-pointer text-[14px] mt-[16px] mb-[30px] mx-0 transition ease-out duration-500" to="#">Forgot Your Password ?</router-link>
      <button class="border-none py-[12px] px-[24px] bg-[#303030] text-white rounded-md uppercase focus:outline-none hover:bg-[#000]">Sign In</button>
      <div class="text-red-600">error</div>
    </form>
    <div class="hidden flex-1 bg-cover w-[250%] h-[120%] lg:block bg-register"></div>
  </div>
</template>

<script></script>
