import { defineStore } from 'pinia';

export const getLocalStore = (key: string) => JSON.parse(window.localStorage.getItem(key) ?? "{}").value

export const setLocalStore = (key: string, value: string) => {
  const objSave = {
    value: value,
  }
  window.localStorage.setItem(key, JSON.stringify(objSave))
}

const defaultValue = 'defaultValue'
const setGetLocalStore = (key: string, obj: any | undefined) => {
  if(obj === defaultValue) return getLocalStore(key)
  setLocalStore(key, obj)
}

const baseParam = 'baseParam'

export const useBaseParam = defineStore(baseParam, {
  state: () => {
    return {
      baseParam: getLocalStore(baseParam) || undefined,
    }
  },
  getters: {
    getbaseParam: (state) => {
      return state.baseParam
    },
  },
  actions: {
    setbaseParam(newValue: any) {
      this.baseParam = newValue;
      setLocalStore(baseParam, this.baseParam)
    },
  },
})

export const storeHelper = {
  login: {
    logedUser: {
      logedUserData: {
        infoData: (obj: any = defaultValue) => setGetLocalStore('infoData', obj)
      },
    },
  },
}
