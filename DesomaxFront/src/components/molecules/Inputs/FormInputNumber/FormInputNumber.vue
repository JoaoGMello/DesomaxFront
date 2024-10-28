<script lang="ts">
import { defineComponent } from 'vue'
import InputNumber from 'primevue/inputnumber'

const name = 'FormInputNumber'

export default defineComponent({
  name,

  emits: ['update:modelValue', 'change', 'input', 'blur', 'actionButton'],

  components: {
    InputNumber
  },

  props: {
    modelValue: {},

    disabled: {
      type: Boolean,
      default: false
    },

    invalidLabel: {
      type: String,
      default: ''
    },

    errorMessage: {
      type: String,
      default: ''
    },

    prefix: {
      type: String,
      default: ''
    },

    suffix: {
      type: String,
      default: ''
    },

    min: {
      type: Number,
      default: null
    },

    max: {
      type: Number,
      default: null
    },

    hasButton: {
      type: Boolean,
      default: false
    },

    buttonIcon: {
      type: String,
      default: 'add_icon_white.svg'
    },

    edit: {
      type: Boolean,
      default: false
    },

    inputLabel: {
      type: String,
      default: ''
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

    inputTextColor: {
      type: String,
      default: 'var(--black)'
    },

    inputFont: {
      type: String,
      default: 'Poppins Regular'
    },

    inputTextWeight: {
      type: String,
      default: '400'
    },

    backgroundInput: {
      type: String,
      default: 'transparent'
    },

    hasBorder: {
      type: Boolean,
      default: true
    },

    borderColor: {
      type: String,
      default: '#BEBEBE'
    },

    squareBorder: {
      type: Boolean,
      default: true
    },

    padding: {
      type: String,
      default: ''
    },

    placeholder: {
      type: String,
      default: ''
    },

    placeholderColor: {
      type: String,
      default: '#C9C9C9'
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
      internalValue: 0
    }
  },

  methods: {},

  computed: {
    _placeholder(): string {
      return this.disabled ? '' : this.placeholder
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
      class="w-full note1:text-[0.8rem] note2:text-[0.82rem] monitor1:text-[0.95rem] mb-[0.4rem] input-label"
      :class="{ 'invalid-color': errorMessage }"
      v-if="inputLabel"
    >
      {{ inputLabel }} <span class="text-[red]" v-if="mandatory">*</span>
    </div>

    <div class="flex gap-2">
      <InputNumber
        class="w-full"
        :class="{ 'p-invalid': errorMessage }"
        v-model="internalValue"
        :disabled="disabled"
        :placeholder="_placeholder"
        :prefix="prefix"
        :suffix="suffix"
        :min="min"
        :max="max"
        @update:model-value="$emit('update:modelValue', internalValue)"
        @change="$emit('change', $event)"
        @input="$emit('input', $event)"
        @blur="$emit('blur', $event)"
      />

      <div>
        <slot name="preButton"> </slot>
      </div>
    </div>

    <div class="h-[18px] invalid-label" v-if="errorMessage">* {{ errorMessage }}</div>
  </div>
</template>

<style scoped>
.input-label {
  color: v-bind('labelColor');
  font-family: v-bind('fontLabel');
  font-weight: v-bind('weightLabel');
}

:deep(.p-inputtext) {
  color: v-bind('inputTextColor') !important;
  width: 100%;
  background-color: v-bind('backgroundInput') !important;
  font-family: v-bind('inputFont');
  font-weight: v-bind('inputTextWeight') !important;
  padding: v-bind('padding ? padding : "0.5rem 0.2rem 0.5rem 1rem"') !important;
  border: v-bind(
    'hasBorder ? `1px solid ${errorMessage ? `var(--inputInvalidColor)` : `${borderColor}`}` : "none"'
  ) !important;
  border-radius: v-bind('squareBorder ? "0.28rem" : "0.5rem"') !important;
}

:deep(.p-inputtext::placeholder) {
  color: v-bind('placeholderColor') !important;
}
</style>
