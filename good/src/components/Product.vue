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
import { Icon } from "@iconify/vue";
export default {
  components: { Icon },
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
};
</script>

<style></style>
