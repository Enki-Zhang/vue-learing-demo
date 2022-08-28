<template>
  <div>
    demo
    {{ message }}
    <span :title="message"></span>
    <span v-if="seen">看看我</span>
    <ol>
      <li v-for="todo in todos">
        {{ todo.text }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "views-demo",
  data() {
    return {
      message: "hello world",
      seen: false,
      todos: [
        { text: "学习 JavaScript" },
        { text: "学习 Vue" },
        { text: "整个牛项目" },
      ],
    };
  },
};
</script>
<style scoped></style>
