<template>
  <div class="world">
    <h3>Rest Of The World</h3>
    <CountDown launch="Nov 19, 2020 00:00:00" />
  </div>
</template>

<script>
import CountDown from "../components/CountDown";
export default {
  name: "World",
  data() {
    return {
      launche: "Nov 19, 2020 00:00:00",
    };
  },
  components: {
    CountDown,
  },
};
</script>

<style scoped>
.world {
  text-align: center;
}
</style>