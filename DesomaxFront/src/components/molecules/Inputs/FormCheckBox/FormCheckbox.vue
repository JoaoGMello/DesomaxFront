<script lang="ts">
import { defineComponent } from 'vue'
import Checkbox from 'primevue/checkbox'
import type LabelValue from '@/shared/LabelValue'

const name = 'FormCheckbox'

export default defineComponent({
  name,

  emits: ['update:modelValue', 'change', 'input', 'blur'],

  components: {
    Checkbox
  },

  props: {
    modelValue: {},

    disabled: {
      type: Boolean,
      default: false
    },

    maxLength: {
      type: Number,
      default: 40
    },

    options: {
      type: Array<LabelValue>,
      default: []
    },

    optionLabel: {
      type: String,
      default: ''
    },

    optionValue: {},

    vertical: {
      type: Boolean,
      default: true
    },

    horizontal: {
      type: Boolean,
      default: false
    },

    breakOptions: {
      type: Boolean,
      default: true
    },

    binary: {
      type: Boolean,
      default: true
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

    withoutLabel: {
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

    labelCheckboxColor: {
      type: String,
      default: '#505050'
    },

    fontLabelCheckbox: {
      type: String,
      default: 'Poppins Medium'
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
    },

    margin: {
      type: Boolean,
      default: true
    }
  },

  mounted() {},

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

    // returnsCheckLabel(o: any) : string {
    //   return this.optionLabel != null ? o[this.optionLabel] : o
    // },

    // returnsCheckValue(o: any) : number {
    //   return this.optionValue ? o[this.optionValue] : o
    // },
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
  <div class="h-max" :class="{ 'mt-7': margin }">
    <div
      class="w-full note1:text-[0.8rem] note2:text-[0.82rem] monitor1:text-[0.95rem] mb-[0.5rem] input-label"
      :class="{ 'invalid-color': isInvalid }"
      v-if="inputLabel"
    >
      {{ inputLabel }}<span class="text-[red]" v-if="mandatory"> *</span>
    </div>

    <div class="flex flex-wrap gap-x-6 gap-y-2" :class="{ 'flex-col': vertical }">
      <div v-for="(o, index) in options" :key="index">
        <div class="flex items-start gap-x-2">
          <Checkbox
            :class="{ 'p-invalid': isInvalid }"
            :value="o.value"
            :disabled="disabled"
            v-model="internalValue"
            :binary="binary"
            @change="updateVModel('change', $event)"
            @input="updateVModel('input', $event)"
            @blur="updateVModel('blur', $event)"
          />
          <div
            class="note1:text-[0.8rem] note2:text-[0.82rem] monitor1:text-[0.9rem] label-checkbox"
          >
            {{ o.label }}
          </div>
        </div>
      </div>
    </div>

    <div class="max-h-[18px] h-[18px] mt-0 invalid-label" v-if="errorMessage">
      {{ errorMessage }}
    </div>
  </div>
</template>

<style scoped>
.input-label {
  color: v-bind('labelColor');
  font-family: v-bind('fontLabel');
  font-weight: v-bind('weightLabel');
}

.label-checkbox {
  color: v-bind('labelCheckboxColor');
  font-family: v-bind('fontLabelCheckbox');
}

.vertical {
  grid-auto-flow: row;
  grid-template-columns: auto;
}

.horizontal {
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  grid-template-rows: max-content;
}
</style>
