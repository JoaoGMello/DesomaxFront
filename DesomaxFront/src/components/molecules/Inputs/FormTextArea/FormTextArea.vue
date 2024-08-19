<script lang="ts">
import { defineComponent } from "vue";
import TextArea from 'primevue/textarea'

const name = 'FormTextArea'

export default defineComponent({
  name,

  emits: [ 'update:modelValue', 'change', 'input', 'blur' ],

  components: {
    TextArea
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

    maxLength: {
      type: Number,
      default: null
    },

    rows: {
      type: String,
      default: '5',
    },
    
    cols: {
      type: String,
      default: '40',
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
      default: 'var(--inputBorderColor)'
    },

    squareBorder: {
      type: Boolean,
      default: true
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

  updated() { },

  data() {
    return {
      internalValue: '',
    }
  },

  methods: { 
    updateVModel(eventName: any, event: any) {
      this.$emit('update:modelValue', this.internalValue)
      this.$emit(eventName, event)
    },
  },

  computed: { 
    _placeholder(): string {
      return this.disabled ? '' : this.placeholder
    },
  },

  watch: {
    modelValue(newValue) {
      this.internalValue = newValue
    },
  },
});
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

    <TextArea
      class="h-auto w-full"
      :class="{ 'p-invalid': errorMessage }"
      :disabled="disabled"
      :placeholder="_placeholder"
      :maxlength="maxLength"
      :rows="rows"
      :cols="cols"
      v-model="internalValue"
      @change="updateVModel('change', $event)"
      @input="updateVModel('input', $event)"
      @blur="updateVModel('blur', $event)"
    >
    </TextArea>

    <div class="max-h-[18px] h-[18px] invalid-label" v-if="errorMessage">* {{errorMessage}}</div>
  </div>
</template>

<style scoped>
.input-label {
  color: v-bind('labelColor');
  font-family: v-bind('fontLabel');
  font-weight: v-bind('weightLabel');
}

.p-inputtext {
  height: auto !important;
  color: v-bind('inputTextColor') !important;
  background-color: v-bind('backgroundInput') !important;
  font-family: v-bind('inputFont');
  font-weight: v-bind('inputTextWeight') !important;
  border: v-bind('`1px solid ${errorMessage ? `var(--inputInvalidColor)` : `${borderColor}`}`') !important;
  border-radius: v-bind('squareBorder ? "0.28rem" : "0.5rem"') !important;
}

.p-inputtext::placeholder {
  color: v-bind('placeholderColor') !important;
}
</style>
