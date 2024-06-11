<script lang="ts">
import { defineComponent } from "vue";
import InputText from 'primevue/inputtext';
import Icon from "@/components/atoms/Icon/Icon.vue";

const name = 'InputTextLogin'

export default defineComponent({
  name,

  emits: ['update:modelValue', 'blur', 'change', 'input'],

  components: { InputText, Icon }, 

  props: { 
    modelValue: {
      default: '',
      required: true
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

    placeholder: {
      type: String,
      default: 'Digite o nome de usuário'
    },

    disabled: {
      type: Boolean,
      default: false
    },

    maxLength: {
      type: Number,
      default: 40
    },

    iconName: {
      type: String,
      default: ''
    },

    mandatory: {
      type: Boolean,
      default: false
    },

    errorMessage: {
      type: String,
      default: ''
    }
  },

  mounted () { 
    this.internalValue = this.modelValue
  },

  updated () { },

  data () {
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
    _placeholder() {
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
  <div>
    <div class="note2:text-[0.9rem] monitor1:text-[1rem] mb-[0.15rem] input-label" v-if="!withoutLabel">{{ inputLabel }}<span class="text-[red]" v-if="mandatory"> *</span></div>

    <div class="flex flex-col">
      <div
        class="flex items-center border border-[#d6d6d6] rounded-[0.7rem] note1:p-[0.3rem] monitor1:p-[0.5rem]"
        :class="{'invalid': errorMessage === '' ? false : true}"
      >
        <Icon
          class="px-2 pt-0.5"
          :its-url="false"
          iconHeight="1.4rem"
          iconHeightResp="1.2rem"
          iconName="pi pi-user"
        />

        <InputText
          class="w-full poppins-regular"
          :disabled="disabled"
          :maxlength="maxLength"
          :placeholder="_placeholder"
          v-model="internalValue"
          @change="updateVModel('change', $event)"
          @input="updateVModel('input', $event)"
          @blur="updateVModel('blur', $event)"
        />
      </div>
      <span v-show="errorMessage" class="text-center text-sm text-[red]">* {{ errorMessage }} </span>
    </div>
  </div>
</template>


<style scoped>
.p-inputtext {
  background-color: transparent;
  border: none;
  border: 0px;
}

:deep(.p-inputtext:enabled:focus){
  border: none;
  border: 0px;
}

.input-label {
  color: v-bind('labelColor');
}

.invalid {
  border: 1px solid var(--inputInvalidColor);
}
</style>