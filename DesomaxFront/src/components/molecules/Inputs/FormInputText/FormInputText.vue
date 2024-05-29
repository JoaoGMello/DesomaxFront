<script lang="ts">
import { defineComponent } from "vue";
import InputText from 'primevue/inputtext';
import PrimaryButton from "../../../atoms/PrimaryButton/PrimaryButton.vue";

const name = 'FormInputText'

export default defineComponent({
  name, 

  emits: [ 'update:modelValue', 'change', 'input', 'blur', 'actionButton' ],

  components: {
    InputText,
    PrimaryButton
  }, 

  props: {
    modelValue: {},

    disabled: {
      type: Boolean,
      default: false
    },

    errorMessage: {
      type: String,
      default: ''
    },

    maxLength: {
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

    subLabel: {
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
    },
  },

  mounted() {
    this.internalValue = this.modelValue as any
  },

  updated() { },

  data() {
    return {
      internalValue: null
    }
  },

  methods: {
    updateVModel(eventName: any, event: Event) {
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
      this.internalValue = newValue;
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
    
    <div class="flex gap-2">
      <InputText
        class="w-full"
        :class="{ 'p-invalid': errorMessage }"
        v-model="internalValue"
        :disabled="disabled"
        :placeholder="_placeholder"
        :maxlength="maxLength"
        @change="updateVModel('change', $event)"
        @input="updateVModel('input', $event)"
        @blur="updateVModel('blur', $event)"
      />

      <div v-if="hasButton">
        <div 
          class="h-[2.5rem] w-[2.5rem]"
          @click="$emit('actionButton', $event)"
        >
          <PrimaryButton
            just-icon
            button-color="var(--primary-color)"
            hover-color="var(--hover-primary-color)"
            :icon-name="!edit ? buttonIcon : 'edit_icon_white.svg'"
            :icon-height-resp="edit ? '0.9rem' : '1rem'"
            :icon-height="edit ? '0.9rem' : '1rem'"
            :rounding="squareBorder ? '0.35rem' : '0.5rem'"
          />
        </div>
      </div>
    </div>

    <div class="flex items-baseline">
      <div class="max-h-[18px] h-[18px] w-full invalid-label" v-if="errorMessage">* {{ errorMessage }}</div>
      
      <div class="flex items-center justify-end w-full max-h-[18px] h-[18px] note1:text-[0.6rem] note2:text-[0.62rem] monitor1:text-[0.75rem] text-[var(--primary-color)] sub-label" v-if="subLabel">
        {{ subLabel }}
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

.sub-label {
  font-family: v-bind('fontLabel');
  font-weight: v-bind('weightLabel');
}


.p-inputtext {
  background-color: v-bind('backgroundInput') !important;
  color: v-bind('inputTextColor') !important;
  font-family: v-bind('inputFont');
  font-weight: v-bind('inputTextWeight') !important;
  padding: v-bind('padding ? padding : "0.5rem 0.2rem 0.5rem 1rem"') !important;
  border: v-bind('hasBorder ? `1px solid ${errorMessage ? `var(--inputInvalidColor)` : `${borderColor}`}` : "none"') !important;
  border-radius: v-bind('squareBorder ? "0.28rem" : "0.5rem"') !important;
}

.p-inputtext::placeholder {
  color: v-bind('placeholderColor') !important;
}
</style>
