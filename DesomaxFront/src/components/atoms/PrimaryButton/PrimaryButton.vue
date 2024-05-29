<script lang="ts">
import { defineComponent } from "vue";
const name = 'PrimaryButton'

export default defineComponent({
  name,

  components: { }, 

  props: { 
    text: {
      type: String,
      default: ''
    },

    textColor: {
      type: String,
      default: '#fff'
    },

    hoverTextColor: {
      type: String,
      default: ''
    },

    textSpacing: {
      type: String,
      default: ''
    },

    textSizeNote1: {
      type: String,
      default: '0.9rem'
    },

    textSizeNote2: {
      type: String,
      default: '0.95rem'
    },

    textSizeMonitor1: {
      type: String,
      default: '1rem'
    },

    fontFamily: {
      type: String,
      default: 'Poppins Regular'
    },

    weightText: {
      type: String,
      default: "600"
    },

    uppercase: {
      type: Boolean,
      default: false
    },

    buttonColor: {
      type: String,
      default: ''
    },

    hoverColor: {
      type: String,
      default: ''
    },

    buttonGap: {
      type: String,
      default: '0.5rem'
    },

    iconName: {
      type: String,
      default: ''
    },

    itsIcon: {
      type: Boolean,
      default: true
    },

    itsSvgIcon: {
      type: Boolean,
      default: true
    },

    justIcon: {
      type: Boolean,
      dafault: false
    },

    iconSizeResp: {
      type: String,
      default: ''
    },

    iconSize: {
      type: String,
      default: ''
    },

    btnIconColor: {
      type: String,
      default: ''
    },

    rightIcon: {
      type: Boolean,
      default: false
    },

    iconHeightResp: {
      type: String,
      default: '0.95rem'
    },

    iconHeight: {
      type: String,
      default: '1rem'
    },

    borderColor: {
      type: String,
      default: ''
    },

    rounding: {
      type: String,
      default: '0.45rem'
    },

    paddingResp: {
      type: String,
      default: '0'
    },

    padding: {
      type: String,
      default: '0'
    },

    hoverPadding: {
      type: String,
      default: ''
    },

    shadow: {
      type: String,
      default: ''
    },

    shadowHover: {
      type: String,
      default: ''
    },

    globalClassText: {
      type: String,
      default: ''
    },

    globalClass: {
      type: String,
      default: ''
    },

    hasSlot: {
      type: Boolean,
      default: false
    },

    disabled: {
      type: Boolean,
      default: false
    },

    justSlot: {
      type: Boolean,
      default: false
    },

    onClickAsync: {
      type: Function,
      default: async () => {}
    }
  },

  mounted () { },

  updated () { },

  data () {
    return { 
      isBusy: false
    }
  },

  methods: { },

  computed: { }, 

});
</script>

<template>
  <button class="h-full w-full select-none center-full button-content" :disabled="disabled">
    <div
      class="center button-label"
      :class="{ 'uppercase': uppercase }"
      v-if="!justIcon && !justSlot"
    >
      {{ text }}
    </div>

    <div v-if="justSlot">
      <slot></slot>
    </div>
  </button>
</template>


<style scoped>
.button-content {
  background-color: v-bind('disabled ? `#f1f1f1` : `${buttonColor}`');
  display: flex;
  flex-direction: v-bind('rightIcon ? "row" : "row-reverse"');
  align-items: center;
  justify-content: center;
  gap: v-bind('buttonGap');
  border: v-bind('borderColor ? `1px solid ${borderColor}` : "none"');
  border-radius: v-bind('rounding');
  box-shadow: v-bind('shadow ? `${shadow}` : "none"');
  transition: 0.2s;
}

.button-content:hover {
  background-color: v-bind('disabled ? "#ddd" : `${hoverColor ? hoverColor : buttonColor}`');
  box-shadow: v-bind('shadowHover ? shadowHover : shadow');
}

.button-label {
  color: v-bind('textColor');
  font-weight: v-bind('weightText');
  font-family: v-bind('fontFamily');
  letter-spacing: v-bind('textSpacing');
}

.button-label:hover {
  color: v-bind('hoverTextColor ? hoverTextColor : textColor');
}

.button-icon {
  height: v-bind('iconHeight');
  color: v-bind('btnIconColor');
}

@media (min-width: 1024px) {
  .button-content {
    padding: v-bind('paddingResp');
  }

  .button-content:hover {
    padding: v-bind('hoverPadding ? hoverPadding : paddingResp');
  }

  .button-label {

  }
}

@media (min-width: 1240px) {
  .button-label {
  }
}

@media (min-width: 1500px) {
  .button-content {
    padding: v-bind('padding');
  }

  .button-content:hover {
    padding: v-bind('hoverPadding ? hoverPadding : padding');
  }

  .button-label {
  }
}
</style>
