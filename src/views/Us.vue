<template>
  <div class="us">
    <h3>US, JAPAN, CANADA, MEXICO, AUSTRALIA, NEW ZEALAND, SOUTH KOREA</h3>
    <CountDown launch="Nov 12, 2020 00:00:00" />
  </div>
</template>

<script>
import CountDown from "../components/CountDown";
export default {
  name: "Us",
  data() {
    return {
      usLaunche: "Nov 12, 2020 00:00:00",
    };
  },
  components: {
    CountDown,
  },
};
</script>

<style scoped>
.us {
  text-align: center;
}
h3 {
  padding: 0 20px;
}
</style>