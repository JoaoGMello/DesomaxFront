import router from '@/router'
import axios from 'axios'

const api = () => {
  const retorno = axios.create({
    baseURL: import.meta.env.VITE_API_PATH
    // headers: {
    //   Authorization: `Bearer ${JWTService.GetToken()}`
    // }
  })

  retorno.interceptors.response.use(
    (response) => {
      return response
    },
    (erro) => {
      const Erro = {}
      Erro.data = erro.config.data
      Erro.url = erro.config.url
      Erro.mensagem = erro.message
      Erro.status = erro.response.status
      if (Erro.status == 401) {
        router.push('/')
      }
    }
  )

  return retorno
}

export default api
