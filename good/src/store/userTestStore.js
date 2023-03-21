import { defineStore } from 'pinia'
import { getTransactions } from '@/api/test/UserTest'
export const useMahasiswaStore = defineStore('transaction', {
  state: () => ({
    transaction: [] ,
  }),
  actions: {
    async get(){
        await getTransactions()
        .then(res => {
            this.transaction = res.data
            console.log("get transaction")
        })
        .catch(err => {
            console.log(err)
        })
    }
  },
  getters: {
    totalOutCome: state => {
      let total = 0
      state.transaction.forEach(item => {
        if (item.isIncome === false) {
          total += item.amount
        }
      })
      return total
    },
    totalIncome: state => {
      let total = 0
      state.transaction.forEach(item => {
        if (item.isIncome === true) {
          total += item.amount
        }
      })
      return total
    },
    allTransaction: state => {
      return state.transaction.sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
      })
    },
    incomeTransaction: state => {
      return state.transaction.filter(item => item.isIncome === true).sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
      })
    },
    outComeTransaction: state => {
      return state.transaction.filter(item => item.isIncome === false).sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
      })
    }
  }
})
