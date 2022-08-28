<template>
  <div>
    <!-- 三级联动全局 -->
    <type-nav></type-nav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Floor></Floor>
    <Brand></Brand>
    <button @click="add">点击我来自new-feature</button>
    <span>{{ count }}</span>
  </div>
</template>

<script>
import ListContainer from "./ListContainer";
import Recommend from "./Recommend";
import Rank from "./Rank";
import Like from "./Like";
import Floor from "./Floor";
import Brand from "./Brand";
// import { mapActions, mapState } from "vuex";

export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
  computed: {
    // ...mapState([`count`]),
  },
  methods: {
    // action
    // ...mapActions([`add`]),
  },
};
</script>
<style scoped></style>
