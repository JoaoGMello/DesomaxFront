<script lang="ts">
import Icon from '@/components/atoms/Icon/Icon.vue'
import { defineComponent } from 'vue'
const name = 'TitleIcon'

export default defineComponent({
  name,

  emits: ['clickTurnBack'],

  components: { Icon },

  props: {
    miniCard: {
      type: Boolean,
      default: false
    },

    iconName: {
      type: String,
      default: ''
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
      default: '#828282'
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
  <div
    class="h-max w-max flex items-center gap-x-3"
    :class="{ 'cursor-pointer': turnBack }"
    @click="$emit('clickTurnBack')"
  >
    <div v-if="!justTitle">
      <Icon
        :its-url="false"
        iconHeight="1.1rem"
        iconHeightResp="1rem"
        iconName="pi pi-arrow-circle-left"
        v-if="!hiddenIcon"
      />

      <div
        v-else
        class="h-full w-[1.6rem] note1:text-[0.75rem] monitor1:text-[0.8rem] poppins-medium bg-[transparent] center border-[2px] rounded-[0.25rem]"
      >
        {{ quantityItems > 0 && quantityItems < 10 ? `0${quantityItems}` : quantityItems }}
      </div>
    </div>

    <div class="whitespace-normal center gap-x-1">
      <div
        class="poppins-medium text-ellipsis whitespace-normal overflow-hidden title"
        :class="{
          'note1:text-[0.8rem] note2:text-[0.85rem] monitor1:text-[0.95rem]': miniCard,
          'note1:text-[0.8rem] note2:text-[0.87rem] monitor1:text-[1rem]': !miniCard
        }"
      >
        {{ title }}
      </div>

      <div
        class="poppins-regular text-ellipsis whitespace-nowrap overflow-hidden subtitle"
        :class="{
          'note1:text-[0.8rem] note2:text-[0.85rem] monitor1:text-[0.9rem]': miniCard,
          'note1:text-[0.8rem] note2:text-[0.87rem] monitor1:text-[1rem]': !miniCard
        }"
      >
        {{ subtitle }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  color: v-bind('titleColor');
}

.subtitle {
  color: v-bind('subtitleColor');
}
</style>
