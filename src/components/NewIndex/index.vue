<template>
  <div>
    {{ message }}
    {{ message2 }}
    <p v-if="seen">show</p>
    <button v-on:click="reverseMessage1">反转消息</button>
    <p>翻转{{ reverseMessage }}</p>
  </div>
</template>

<script>
export default {
  name: " ",
  data() {
    return {
      message: "hell",
      seen: true,
      message2: "4212",
    };
  },
  methods: {
    reverseMessage1() {
      this.message2 = this.message2.split("").reverse().join("");
    },
  },
  computed: {
    reverseMessage() {
      return (this.message = this.message.split("").reverse().join(""));
    },
  },
};
</script>
<style scoped></style>
