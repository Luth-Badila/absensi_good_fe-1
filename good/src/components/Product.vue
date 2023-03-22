<template>
  <div class="mt-2 lg:flex block lg:gap-2">
    <div class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border shadow">
      <h2 class="font-bold text-lg text-gray-800 dark:text-gray-200">1,780</h2>
      <p class="text-gray-400 font-lexend font-normal">New products this week</p>
      <span class="float-right">
        <h2 class="text-green-500 -mt-12 flex">
          <span class="mr-2"> 27.9% </span
          ><span>
            <Icon icon="akar-icons:arrow-up" />
          </span>
        </h2>
      </span>
      <div class="wrapper-chart mt-5">
        <apexchart width="100%" height="380" type="bar" :options="optionsBar" :series="seriesBar"></apexchart>
        <br />
        <hr />
        <div class="wrapper-button mt-3">
          <select name="" id="" class="dark:bg-gray-800 dark:hover:bg-gray-700 border-gray-200 dark:border-gray-300 border max-w-lg px-4 py-3 block rounded-md text-gray-500 dark:text-gray-400">
            <option value="">Last 7 days</option>
          </select>
          <button class="uppercase float-right -mt-7 border-b border-red-600 text-red-600">Product Report</button>
        </div>
      </div>
    </div>
    <div class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border shadow">
      <h2 class="font-bold text-lg text-gray-800 dark:text-gray-200">5,355</h2>
      <p class="text-gray-400 font-lexend font-normal">Visitor this week</p>
      <span class="float-right">
        <h2 class="text-green-500 -mt-12 flex">
          <span class="mr-2"> 47.9% </span
          ><span>
            <Icon icon="akar-icons:arrow-up" />
          </span>
        </h2>
      </span>
      <div class="wrapper-chart mt-5">
        <apexchart width="100%" height="380" type="area" :options="optionsVisitor" :series="seriesVisitor"></apexchart>
        <br />
        <hr />
        <div class="wrapper-button mt-3">
          <select name="" id="" class="dark:bg-gray-800 dark:hover:bg-gray-700 border-gray-200 dark:border-gray-300 border max-w-lg px-4 py-3 block rounded-md text-gray-500 dark:text-gray-400">
            <option value="">Last 7 days</option>
          </select>
          <button class="uppercase float-right -mt-7 border-b border-red-600 text-red-600">Vistor Report</button>
        </div>
      </div>
    </div>
    <div class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border shadow">
      <h2 class="font-bold text-lg text-gray-800 dark:text-gray-200">475</h2>
      <p class="text-gray-400 font-lexend font-normal">User signups this week</p>

      <div class="wrapper-chart mt-5">
        <apexchart width="100%" height="380" type="pie" :options="optionsDonut" :series="seriesDonut"></apexchart>
        <div class="p-3"></div>
        <br />
        <hr />
        <div class="wrapper-button mt-3">
          <select name="" id="" class="dark:bg-gray-800 dark:hover:bg-gray-700 border-gray-200 dark:border-gray-300 border max-w-lg px-4 py-3 block rounded-md text-gray-500 dark:text-gray-400">
            <option value="">Last 7 years</option>
          </select>

          <button class="uppercase float-right -mt-7 border-b border-red-600 text-red-600">User Report</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
