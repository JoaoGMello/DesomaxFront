<script lang="ts">
import { defineComponent } from 'vue'
import Calendar from 'primevue/calendar'

const name = 'FormInputDate'

export default defineComponent({
  name,

  emits: ['update:date', 'change', 'input', 'blur'],

  components: { Calendar },

  props: {
    date: {
      type: [String, Date]
    },

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

    placeholder: {
      type: String,
      default: ''
    },

    minDate: {
      type: Date
    },

    maxDate: {
      type: Date
    },

    maxDateCount: {
      type: Number
    },

    showIcon: {
      type: Boolean,
      default: true
    },

    showButtonBar: {
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

    mandatory: {
      type: Boolean,
      default: false
    },

    hasShowTime: {
      type: Boolean,
      default: false
    },

    minFractionDigits: {
      type: Number,
      default: 0
    },

    maxFractionDigits: {
      type: Number,
      default: 0
    },

    noDate: {
      type: Boolean
    }
  },

  mounted() {
    this.formatDate()
  },

  updated() {},

  data() {
    return {
      dateValue: '' as any
    }
  },

  methods: {
    updateVModel(eventName: any, event: any) {
      this.$emit('update:date', this.dateValue)
      this.$emit(eventName, event)
    },

    formatDate() {
      setTimeout(() => (this.dateValue = this.date), 500)
    }
  },

  computed: {
    _placeholder() {
      return this.disabled ? '' : this.placeholder
    }
  },

  watch: {
    dateValue(newValue) {
      if (!newValue || newValue === '' || (newValue === null && this.noDate)) {
        this.dateValue = null
      } else {
        if (String(newValue).match(/^(\d{2})\/(\d{2})\/(\d{4})$/)) this.dateValue = newValue
        else
          this.dateValue =
            !newValue || newValue === '' || newValue === null
              ? new Date()
              : new Date(newValue).toLocaleDateString('pt-BR')
        this.$emit('update:date', this.dateValue)
      }
    },

    date(newValue) {
      this.dateValue = newValue
    },

    noDate() {
      if (this.noDate) {
        this.dateValue = null
      }
    }
  }
})
</script>

<template>
  <div>
    <div
      class="w-full note1:text-[0.8rem] note2:text-[0.82rem] monitor1:text-[0.95rem] mb-[0.4rem] input-label"
      :class="{ 'invalid-color': errorMessage }"
      v-if="inputLabel"
    >
      {{ inputLabel }}<span class="text-[red]" v-if="mandatory"> *</span>
    </div>

    <Calendar
      class="h-[2.5rem] w-full"
      :class="{ invalid: errorMessage }"
      :placeholder="placeholder"
      date-format="dd/mm/yy"
      selection-mode="single"
      :show-icon="showIcon"
      :min-date="minDate"
      :max-date="maxDate"
      :showTime="hasShowTime"
      hourFormat="24"
      :max-date-count="maxDateCount"
      :show-button-bar="showButtonBar"
      :disabled="disabled"
      @change="updateVModel('change', $event)"
      @input="updateVModel('input', $event)"
      @blur="updateVModel('blur', $event)"
      v-model="dateValue"
    />

    <div class="max-h-[18px] h-[18px] invalid-label" v-if="errorMessage">* {{ errorMessage }}</div>
  </div>
</template>

<style scoped>
.invalid {
  border: 1px solid red;
  border-radius: 0.28rem;
  &:deep(.p-inputtext) {
    border: none;
  }

  &:deep(.p-button) {
    border: none;
    border-left: 1px solid red;
  }
}
.input-label {
  color: v-bind('labelColor');
  font-family: v-bind('fontLabel');
  font-weight: v-bind('weightLabel');
}

:deep(.p-inputtext) {
  font-family: 'Poppins Regular';
}

:deep(.p-inputtext::placeholder) {
  font-size: 0.9rem;
  color: #bebebe !important;
}
</style>
