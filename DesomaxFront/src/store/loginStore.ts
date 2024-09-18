import { defineStore } from 'pinia'

export const useLoginStore = defineStore('loginStore', {
  state: () => ({
    loginInfo: {
      userId: ''
    }
  })
})
