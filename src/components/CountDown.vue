<template>
  <div class="timeLeft">
    <div class="timeCont"><span class="days"></span> Days</div>
    <div class="timeCont"><span class="hours"></span> hours</div>
    <div class="timeCont"><span class="minutes"></span> minutes</div>
    <div class="timeCont"><span class="seconds"></span> seconds</div>
  </div>
</template>

<script>
let timer;
export default {
  name: "CountDown",
  props: ["launch"],
  data() {
    return {
      launchDate: this.launch,
    };
  },
  methods: {
    countDown() {
      timer = setInterval(() => {
        let launchDate = new Date(this.launchDate).getTime();
        // Get today's date and time
        let now = new Date().getTime();

        // Find the distance between now and the count down date
        let distance = launchDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        (document.querySelector(".days").innerText = days),
          (document.querySelector(".hours").innerText = hours),
          (document.querySelector(".minutes").innerText = minutes),
          (document.querySelector(".seconds").innerText = seconds);

        // If the count down is finished, write some text
        if (distance < 0) {
          clearInterval(timer);
          document.querySelector(".timeLeft").innerHTML = "PS5 HAS LAUNCHED";
        }
      }, 1000);
    },
  },
  mounted: function () {
    // console.log("mounted");
    this.countDown();
  },
  beforeDestroy: function () {
    // console.log("UNmounted");
    clearInterval(timer);
  },
};
</script>

<style scoped>
.timeLeft {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
}

.timeCont {
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-size: 1.5rem;
  text-transform: uppercase;
}

.timeCont span {
  margin-bottom: 15px;
  font-size: 4.3rem;
}
@media (max-width: 800px) {
  .timeCont {
    font-size: 1.8rem;
  }
  .timeCont span {
    font-size: 3.5rem;
  }
}
@media (max-width: 800px) {
  .timeCont {
    font-size: 0.8rem;
    padding: 10px;
  }
  .timeCont span {
    font-size: 2.5rem;
  }
}
</style>