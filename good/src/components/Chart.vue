<template>
  <div class="mt-2 lg:flex block lg:gap-2">
    <div class="bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border shadow">
      <h2 class="font-bold text-lg text-gray-800 dark:text-gray-200">Total Sales</h2>
      <p class="text-gray-400 font-lexend font-normal">your sales chart per-years</p>
      <span class="float-right mr-20">
        <h2 class="text-red-500 -mt-12 flex">
          <span class="mr-2"> 15.9% </span
          ><span>
            <Icon icon="akar-icons:arrow-down" />
          </span>
        </h2>
      </span>
      <span class="float-right">
        <h2 class="text-green-500 -mt-12 flex">
          <span class="mr-2"> 87.9% </span
          ><span>
            <Icon icon="akar-icons:arrow-up" />
          </span>
        </h2>
      </span>
      <br />
      <apexchart
        width="100%"
        height="380"
        type="area"
        :options="optionsArea"
        :series="seriesArea"
        :sparkline="{
          enabled: true,
        }"
      ></apexchart>
      <br />
      <hr />
      <div class="wrapper-button mt-3">
        <select name="" id="" class="dark:bg-gray-800 dark:hover:bg-gray-700 border-gray-200 dark:border-gray-300 border max-w-lg px-4 py-3 block rounded-md text-gray-500 dark:text-gray-400">
          <option value="">Last 7 years</option>
        </select>
        <button class="uppercase float-right -mt-7 border-b border-red-600 text-red-600">Sales Report</button>
      </div>
    </div>
    <div class="bg-white dark:bg-gray-800 p-5 lg:w-96 lg:mt-0 mt-4 shadow rounded-md w-full">
      <h2 class="dark:text-gray-200 text-xl font-bold">Daftar User</h2>
      <p class="text-gray-400">Yang terakhir Absensi</p>
      <p class="font-medium font-lg mt-5 dark:text-gray-200">PT A</p>
      <div class="mt-4 grid grid-cols-1 gap-4">
        <button-list :buttons="buttonItems"></button-list>
      </div>
      <div class="mt-4 grid grid-cols-1 gap-4">
        <p class="font-medium font-lg mt-5 dark:text-gray-200">PT B</p>
        <button class="w-full box-border flex gap-4">
          <span>
            <img src="../assets/img/user4.png" alt="" width="50" height="50" class="rounded-full" />
          </span>
          <span class="text-left">
            <h1 class="font-bold text-xl dark:text-gray-200">Taylor Neal</h1>
            <p class="text-gray-400 dark:text-gray-200">2 Hours ago</p>
          </span>
        </button>
        <button class="w-full box-border flex gap-4">
          <span>
            <img src="../assets/img/user5.png" alt="" width="50" height="50" class="rounded-full" />
          </span>
          <span class="text-left">
            <h1 class="font-bold text-xl dark:text-gray-200">Bruno Barron</h1>
            <p class="text-gray-400 dark:text-gray-200">4 Hours ago</p>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import ButtonList from "@/components/ButtonList.vue";
export default {
  data() {
    return {
      // for more guide apexchart.js
      // https://apexcharts.com/docs/chart-types/line-chart/

      // chart data area

      buttonItems: [{ label: "Pegawai 1" }, { label: "Pegawai 2" }, { label: "Pegawai 3" }],
      optionsArea: {
        xaxis: {
          categories: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
        },
        fontFamily: "Segoe UI, sans-serif",
        stroke: {
          curve: "straight",
        },

        markers: {
          size: 0,
        },
        yaxis: {
          show: false,
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100],
          },
        },
      },

      chart: {
        fontFamily: "lexend, sans-serif",
      },

      seriesArea: [
        {
          name: "Revenue",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
        {
          name: "Revenue (Previous period)",
          data: [20, 34, 45, 55, 79, 87, 90, 98],
        },
      ],
      optionsBar: {
        chart: {
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
          sparkline: {
            enabled: true,
          },
        },
        legend: {
          show: false,
        },
        xaxis: {
          show: false,
        },
        yaxis: {
          show: false,
        },
        colors: ["#4f46e5", "#DC2626"],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
      },

      seriesBar: [
        {
          name: "Product 1",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
        {
          name: "Product 2",
          data: [20, 34, 45, 55, 79, 87, 90, 98],
        },
      ],
      optionsVisitor: {
        chart: {
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
          sparkline: {
            enabled: true,
          },
        },
        legend: {
          show: false,
        },
        xaxis: {
          show: false,
        },
        yaxis: {
          show: false,
        },
        colors: ["#4f46e5"],
        dataLabels: {
          enabled: false,
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100],
          },
        },
        stroke: {
          curve: "smooth",
        },
      },

      seriesVisitor: [
        {
          name: "Visitor ",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
      optionsDonut: {
        chart: {
          type: "donut",
        },
        legend: false,
        dataLabels: {
          enabled: false,
        },
        labels: ["admin", "SuperAdmin", "User", "Costumer"],
      },

      seriesDonut: [20, 15, 63, 83],
      tableTransaction: [
        {
          transaction: "Payment from Ike yolanda",
          datetime: "Apr 22, 2022",
          amount: "Rp.450.000",
          statusTransaction: "completed",
        },
        {
          transaction: "Payment from Ice Wulandari",
          datetime: "May 2, 2022",
          amount: "Rp.250.000",
          statusTransaction: "completed",
        },
        {
          transaction: "Payment from Alfiah Gipta Jannatil Hasanah",
          datetime: "May 5, 2022",
          amount: "Rp.150.000",
          statusTransaction: "progress",
        },
        {
          transaction: "Payment failed from #046577",
          datetime: "May 5, 2022",
          amount: "Rp.180.000",
          statusTransaction: "cancelled",
        },
      ],
    };
    // end chart data line
  },
  components: {
    Icon,
    ButtonList,
  },
};
</script>

<style></style>
