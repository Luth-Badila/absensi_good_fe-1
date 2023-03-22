<template>
  <div class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border shadow">
    <h2 class="font-bold text-lg text-gray-800 dark:text-gray-200">Latest Transactions</h2>
    <p class="text-gray-400 font-lexend font-normal">This is a list of latest transactions</p>
    <div class="wrapping-table mt-10">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 lg:overflow-auto overflow-x-scroll">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="uppercase px-6 py-3">Transaction</th>
            <th scope="col" class="uppercase px-6 py-3">Date & Time</th>
            <th scope="col" class="uppercase px-6 py-3">Amount</th>
            <th scope="col" class="uppercase px-6 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50" v-for="items in tableTransaction" :key="items.transaction">
            <td class="px-6 py-4">
              {{ items.transaction }}
            </td>
            <td class="px-6 py-4">
              {{ items.datetime }}
            </td>
            <td class="px-6 py-4">
              {{ items.amount }}
            </td>
            <td class="px-6 py-4">
              <span class="text-green-800 bg-green-300 px-3 py-1 rounded-md" v-if="items.statusTransaction == 'completed'">
                {{ items.statusTransaction }}
              </span>
              <span class="text-purple-800 bg-purple-300 px-3 py-1 rounded-md" v-else-if="items.statusTransaction == 'progress'">
                {{ items.statusTransaction }}
              </span>
              <span class="text-red-800 bg-red-300 px-3 py-1 rounded-md" v-else>
                {{ items.statusTransaction }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="wrapper-button mt-3">
      <select name="" id="" class="dark:bg-gray-800 dark:hover:bg-gray-700 border-gray-200 dark:border-gray-300 border max-w-lg px-4 py-3 block rounded-md text-gray-500 dark:text-gray-400">
        <option value="">Last 7 years</option>
      </select>
      <button class="uppercase float-right -mt-7 border-b border-red-600 text-red-600">Transaction Report</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
  },
};
</script>

<style></style>
