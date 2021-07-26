<template>
  <v-file-input
    accept="image/*"
    label="File input"
  ></v-file-input>
</template>


<script>

export default {
  name: "TImageInput",

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

    };
  },

  watch: {
    data: {}
  },

  created() {
  },

  methods: {
  },
};
</script>
