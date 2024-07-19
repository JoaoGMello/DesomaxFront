import { ref } from 'vue'
import api from '../server/api.js'

const valoresIniciais = [null, [], {}, '', undefined]

function get(url, valorInicial = 0) {
  const res = ref(valoresIniciais[valorInicial])
  const erro = ref(null)

  const requisicao = api()
    .get(url, {})
    .then((response) => {
      return response
    })
    .catch((err) => {
      erro.value = err
      return err
    })

  return { res, erro, requisicao }
}

function getArray(url) {
  return get(url, 1)
}

function getObj(url) {
  return get(url, 2)
}

function postArray(url, data) {
  return post(url, data, 1)
}

function post(url, data, valorIncial = 0) {
  const res = ref(valoresIniciais[valorIncial])
  const erro = ref(null)

  const requisicao = api()
    .post(url, { ...data }, {})
    .then((response) => {
      return response
    })
    .catch((err) => {
      erro.value = err
      return err
    })

  return { res, erro, requisicao }
}

function put(url, data, valorIncial = 0) {
  const res = ref(valoresIniciais[valorIncial])
  const erro = ref(null)

  const requisicao = api()
    .put(url, { ...data }, {})
    .then((response) => {
      return response
    })
    .catch((err) => {
      erro.value = err
      return err
    })

  return { res, erro, requisicao }
}
const http = {
  get,
  getArray,
  post,
  getObj,
  postArray,
  put
}

export default http
