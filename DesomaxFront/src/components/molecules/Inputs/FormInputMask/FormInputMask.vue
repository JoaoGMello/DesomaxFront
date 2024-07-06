<script lang="ts">
import { defineComponent } from 'vue'
import InputMask from 'primevue/inputmask'

const name = 'FormInputMask'

export default defineComponent({
  name,

  emits: ['update:modelValue', 'keydown', 'change', 'input', 'blur', 'actionButton'],

  components: {
    InputMask
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

    mask: {
      type: String,
      default: ''
    },

    unmask: {
      type: Boolean,
      default: false
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

    alignText: {
      type: String,
      default: 'left'
    },

    mandatory: {
      type: Boolean,
      default: false
    },

    autoClear: {
      type: Boolean,
      default: true
    }
  },

  mounted() {
    this.internalValue = this.modelValue as any
  },

  updated() {},

  data() {
    return {
      internalValue: ''
    }
  },

  methods: {
    updateVModel(eventName: any, event: Event) {
      this.$emit('update:modelValue', this.internalValue)
      this.$emit(eventName, event)
    }
  },

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
      {{ inputLabel }}<span class="text-[red]" v-if="mandatory"> *</span>
    </div>

    <div class="flex gap-2">
      <InputMask
        class="w-full"
        :class="{ 'p-invalid': errorMessage }"
        :disabled="disabled"
        :mask="mask"
        :unmask="unmask"
        :autoClear="autoClear"
        v-model="internalValue"
        :placeholder="_placeholder"
        @change="updateVModel('change', $event)"
        @input="updateVModel('input', $event)"
        @blur="updateVModel('blur', $event)"
        @keydown="updateVModel('keydown', $event)"
      />
    </div>

    <div class="max-h-[18px] h-[18px] invalid-label" v-if="errorMessage">* {{ errorMessage }}</div>
  </div>
</template>

<style scoped>
.input-label {
  color: v-bind('labelColor');
  font-family: v-bind('fontLabel');
  font-weight: v-bind('weightLabel');
}

.p-inputtext {
  background-color: v-bind('backgroundInput') !important;
  color: v-bind('inputTextColor') !important;
  text-align: v-bind('alignText');
  font-family: v-bind('inputFont');
  padding: v-bind('padding ? padding : "0.5rem 0.2rem 0.5rem 1rem"') !important;
  border: v-bind(
    'hasBorder ? `1px solid ${errorMessage ? `var(--inputInvalidColor)` : `${borderColor}`}` : "none"'
  ) !important;
  border-radius: v-bind('squareBorder ? "0.28rem" : "0.5rem"') !important;
}

.p-inputtext::placeholder {
  color: v-bind('placeholderColor') !important;
}
</style>
