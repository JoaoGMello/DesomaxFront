<script lang="ts">
import Card from '@/components/atoms/Card/Card.vue'
import { defineComponent } from 'vue'
import TitleIcon from '../TitleIcon/TitleIcon.vue'
const name = 'CardTitle'

export default defineComponent({
  name,

  emits: ['clickTurnBack', 'clickSeeAll', 'clickChip', 'tabChip'],

  components: { Card, TitleIcon },

  props: {
    miniCard: {
      type: Boolean,
      default: false
    },

    title: {
      type: String,
      default: ''
    },

    titleColor: {
      type: String,
      default: '#434343'
    },

    subtitle: {
      type: String,
      default: ''
    },

    subtitleColor: {
      type: String,
      default: '#434343'
    },

    iconName: {
      type: String,
      default: ''
    },

    padding: {
      type: String,
      default: '0.5rem 0.5rem 1rem'
    },

    hasBtnSeeAll: {
      type: Boolean,
      default: false
    },

    hasSeparator: {
      type: Boolean,
      default: true
    },

    itsScrollable: {
      type: Boolean,
      default: true
    },

    paddingTitle: {
      type: String,
      default: '0.57rem 1rem 0.65em'
    },

    marginContent: {
      type: String,
      default: '0'
    },

    paddingContent: {
      type: String,
      default: '0'
    },

    hiddenIcon: {
      type: Boolean,
      default: false
    },

    quantityItems: {
      type: Number,
      default: 0
    },

    justTitle: {
      type: Boolean,
      default: false
    },

    turnBack: {
      type: Boolean,
      default: false
    },

    hasInfo: {
      type: Boolean,
      default: true
    },

    noInfoAddLabel: {
      type: Boolean,
      default: true
    },

    shadow: {
      type: Boolean,
      default: false
    },

    noHorizPadding: {
      type: Boolean,
      default: false
    }
  },

  mounted() {},

  updated() {},

  data() {
    return {}
  },

  methods: {},

  computed: {}
})
</script>

<template>
  <Card
    grid
    grid-structure="max-content 1fr"
    :padding="padding"
    :padding-content="paddingContent"
    :margin-content="marginContent"
    :shadow="shadow"
  >
    <template #header>
      <div>
        <div class="relative flex justify-between gap-x-10 px-4 pt-[0.77rem] title-icon">
          <div class="w-full flex items-center justify-between gap-x-4">
            <TitleIcon
              :title="title"
              :subtitle="subtitle"
              :hiddenIcon="hiddenIcon"
              :quantityItems="quantityItems"
              :justTitle="justTitle"
              :turnBack="turnBack"
              :title-color="titleColor"
              :mini-card="miniCard"
              v-if="title"
              @click="turnBack ? $emit('clickTurnBack') : ''"
            />
          </div>

          <slot name="headerButtons"></slot>
        </div>

        <div class="separator" v-if="hasSeparator"></div>
      </div>
    </template>

    <template #content>
      <div
        v-if="hasInfo"
        class="relative grid size-full overflow-x-hidden px-4 content-card-title"
        :class="{
          'overflow-y-auto': itsScrollable,
          'overflow-y-hidden': !itsScrollable,
          '!px-0': noHorizPadding
        }"
      >
        <slot></slot>
      </div>

      <div v-else class="size-full">
        <NoInfo :add-label="noInfoAddLabel" />
      </div>
    </template>

    <template #footer>
      <slot name="footer"></slot>
    </template>
  </Card>
</template>

<style scoped>
.title-icon {
  padding: v-bind('paddingTitle');
}
</style>
