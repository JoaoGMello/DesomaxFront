import './assets/desomax-theme.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
    locale: {
      startsWith: 'Começa com',
      contains: 'Contém',
      notContains: 'Não contém',
      endsWith: 'Termina com',
      equals: 'Igual',
      notEquals: 'Diferente',
      noFilter: 'Sem filtro',
      lt: 'Menor que',
      lte: 'Menor ou igual',
      gt: 'Maior que',
      gte: 'Maior ou igual',
      dateIs: 'Date is',
      dateIsNot: 'Date is not',
      dateBefore: 'Date is before',
      dateAfter: 'Date is after',
      clear: 'Limpar',
      apply: 'Aplicar',
      matchAll: 'Match All',
      matchAny: 'Match Any',
      addRule: 'Adicionar regra',
      removeRule: 'Remove regra',
      accept: 'Sim',
      reject: 'Não',
      choose: 'Escolha',
      upload: 'Upload',
      cancel: 'Cancelar',
      dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
      dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
      dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
      monthNames: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
      ],
      monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      today: 'Hoje',
      weekHeader: 'Nº sem.',
      firstDayOfWeek: 1,
      dateFormat: 'dd/mm/yyyy',
      weak: 'Fraco',
      medium: 'Médio',
      strong: 'Forte',
      passwordPrompt: 'Insira a senha',
      emptyFilterMessage: 'Digite para pesquisar...',
      emptyMessage: 'Sem opções diponíveis'
    }
  })

app.mount('#app')
