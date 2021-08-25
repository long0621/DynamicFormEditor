<template>
  <!-- <v-row justify="center"> -->
    <div style="width: 100%;" @click="(e)=>e.stopPropagation()">
      <v-expansion-panels >
        <v-expansion-panel>
          <v-expansion-panel-header>{{headerAttrs.label}}</v-expansion-panel-header>
          <v-expansion-panel-content style="padding-top:10px;">
            <slot></slot>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  <!-- </v-row> -->
</template>


<script>

export default {
  name: "TExpansionPanel",

  props: {
    data: {
      type: Object,
      default: () => {},
    },
    value: {
      type: undefined,
    },
    disabled: {
      type: [Boolean, undefined],
      default: undefined,
    },
  },

  components: {
  },

  data() {
    return {
      style: {},
      attrs: {},
      headerAttrs: {}
    };
  },

  watch: {
    data: {
      handler(data) {
        this.headerAttrs = {
          label: data.label
        };
        this.style = {
          // width: "100%",
          flexGrow: data.flexGrow,
          flexShrink: data.flexShrink,
          flexBasis: data.flexBasis,
          marginTop: data.marginTop,
          marginLeft: data.marginLeft,
          marginBottom: data.marginBottom,
          marginRight: data.marginRight,
          // TODO: paddingAll
          // padding: data.paddingAll,
          paddingTop: data.paddingTop,
          paddingRight: data.paddingRight,
          paddingBottom: data.paddingBottom,
          paddingLeft: data.paddingLeft,
          backgroundColor: data.backgroundColor,
        };
        this.attrs = {
          [data.layout]: true,
          [data.alignItems]: true,
          wrap: data.wrap,
          [data.justifyContent]: true,
          fillHeight: data.fillHeight,
        };
      },
      immediate: true,
      deep: true,
    },
  },

  created() {
  },

  methods: {
  },
};
</script>
