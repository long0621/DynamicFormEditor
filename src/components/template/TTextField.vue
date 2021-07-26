<template>
  <v-flex :style="style" >
    <v-text-field
      v-model="innerValue"
      v-bind="attrs"
      class="mx-2 "
      hide-details
      :label="label"
      :class="{'centered-input': textCenter}"
      @click="elementFocus"
    ></v-text-field>
  </v-flex>
</template>

<script>
import disabledMixin from "./disabledMixin.js";


export default {
  name: "TTextField",

  props: {
    data: {
      type: Object,
      default: () => {},
    },
    value: {
      type: undefined,
    },
    formDisabled: {
      type: [Boolean, undefined],
      default: undefined,
    },
  },

  mixins: [disabledMixin],

  data() {
    return {
      style: {},
      attrs: {},
      innerValue: "",
      label:"",
      textCenter:false
    };
  },

  watch: {
    disabled(disabled) {
      this.attrs.disabled = disabled;
    },
    data: {
      handler(data) {
        this.style = {
          flexGrow: data.grow,
          flexShrink: data.shrink,
          flexBasis: data.flexBasis,
          marginTop: data.marginTop,
          marginLeft: data.marginLeft,
          marginBottom: data.marginBottom,
          marginRight: data.marginRight,
          backgroundColor: data.backgroundColor,
          width: data.width,
        };
        this.attrs = {
          disabled: this.disabled,
          label: data.label,
          dense: true,
          [data.style]: true,
        };
        this.label = data.label;
        this.textCenter = data.textCenter;
      },
      immediate: true,
      deep: true,
    },
    value(newValue) {
      this.innerValue = newValue;
    },
    innerValue(newValue) {
      this.$emit("input", newValue);
    },
  },

  created() {
    this.innerValue = this.value;
  },
  methods:{
    elementFocus(){
      this.$store.commit("formFocusElement",this.data.bindingKey)
    }
  },
  // computed: {
  //   ...mapState(['formElementFocus']),
  // }
};
</script>

<style >
  .centered-input input {
    text-align: center;
  }
</style>

