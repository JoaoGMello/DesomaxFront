<script lang="ts">
import { defineComponent } from 'vue'
import RadioButton from 'primevue/radiobutton'
import LabelValue from '@/shared/LabelValue'

const name = 'FormRadioButton'

export default defineComponent({
  name,

  emits: ['update:modelValue', 'change', 'input'],

  components: {
    RadioButton
  },

  props: {
    modelValue: {},

    options: {
      type: Array<LabelValue>,
      default: []
    },

    optionLabel: {
      type: String,
      default: ''
    },

    optionValue: {},

    disabled: {
      type: Boolean,
      default: false
    },

    isInvalid: {
      type: Boolean,
      default: false
    },

    invalidLabel: {
      type: String,
      default: ''
    },

    errorsMessages: {
      type: Array<string>,
      default: []
    },

    invalidable: {
      type: Boolean,
      default: true
    },

    inputLabel: {
      type: String,
      default: ''
    },

    column: {
      type: Boolean,
      default: false
    },

    between: {
      type: Boolean,
      default: false
    },

    labelColor: {
      type: String,
      default: '#505050'
    },

    fontLabel: {
      type: String,
      default: 'Poppins Regular'
    },

    weightLabel: {
      type: String,
      default: '500'
    },

    fontLabelRadio: {
      type: String,
      default: 'Poppins Medium'
    },

    weightLabelRadio: {
      type: String,
      default: '500'
    },

    mandatory: {
      type: Boolean,
      default: false
    }
  },

  mounted() {
    this.internalValue = this.modelValue as any
  },

  updated() {},

  data() {
    return {
      internalValue: null
    }
  },

  methods: {
    updateVModel(eventName: any, event: Event | Boolean) {
      this.$emit('update:modelValue', this.internalValue)
      this.$emit(eventName, event)
    }

    // returnsRadioLabel(o: any) : string {
    //   return this.optionLabel != null ? o[this.optionLabel] : o
    // },

    // returnsRadioValue(o: LabelValue) : any {
    //   return this.optionValue ? o[this.optionValue] : o
    // }
  },

  computed: {
    errorMessage(): string {
      if (this.errorsMessages.length > 0) return this.errorsMessages.join(', ')
      return this.invalidLabel
    }
  },

  watch: {
    modelValue(newValue) {
      this.internalValue = newValue
    }
  }
})
</script>

<template>
  <div class="w-full h-max">
    <div
      class="w-full note1:text-[0.8rem] note2:text-[0.82rem] monitor1:text-[0.95rem] mb-[0.4rem] poppins-light input-label"
      :class="{ 'invalid-color': isInvalid }"
    >
      {{ inputLabel }}<span class="text-[red]" v-if="mandatory"> *</span>
    </div>

    <div
      class="flex flex-wrap gap-x-6 gap-y-2"
      :class="{ 'flex-col': column, 'justify-between': between }"
    >
      <div v-for="(o, index) in options" :key="index">
        <div class="flex items-start gap-x-2">
          <RadioButton
            :class="{ 'p-invalid': isInvalid }"
            :value="o.value"
            :disabled="disabled"
            v-model="internalValue"
            @change="updateVModel('change', $event)"
            @input="updateVModel('input', $event)"
          />
          <div
            class="text-[#505050] note1:text-[0.8rem] note2:text-[0.82rem] monitor1:text-[0.9rem] poppins-medium label-radio"
          >
            {{ o.label }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.input-label {
  color: v-bind('labelColor');
  font-family: v-bind('fontLabel');
  font-weight: v-bind('weightLabel');
}

.label-radio {
  font-family: v-bind('fontLabelRadio');
  font-weight: v-bind('weightLabelRadio');
}

:deep(.p-radiobutton-box) {
  display: none;
}
</style>
