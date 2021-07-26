<template>
  <v-chip v-bind="attrs">{{ data.value }}</v-chip>
</template>

<script>
export default {
  name: "TChip",

  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      attrs: {},
    };
  },

  watch: {
    data: {
      handler(data) {
        this.attrs = {
          value: data.value,
          filter: data.filter,
          outlined: data.outlined,
          color: data.color,
          textColor: data.textColor,
          label: data.tile,
          [data.size]: true,
        };
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>
