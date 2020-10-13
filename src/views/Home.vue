<template>
  <div class="home">
    <div class="container">
      <h1>Time to PlayStation 5 launches</h1>
      <h2>NOVEMBER</h2>
      <div class="date">
        <router-link
          class="link"
          @mouseover.native="changeImage('us')"
          @mouseleave.native="resetImage()"
          to="/us"
          >12th</router-link
        >
        <router-link
          class="link"
          @mouseover.native="changeImage('world')"
          @mouseleave.native="resetImage()"
          to="/world"
          >19th</router-link
        >
        <!-- <span @mouseover="changeImage('us')" @mouseleave="resetImage()"
          >12th
        </span>
        <span @mouseover="changeImage('world')" @mouseleave="resetImage()"
          >19th</span
        > -->
      </div>

      <img class="map" src="../assets/world.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {
    changeImage(mapView) {
      const map = document.querySelector(".map");
      if (mapView === "us") {
        map.src = require("@/assets/usgold.png");
      } else if (mapView === "world") {
        map.src = require("@/assets/rotwgold.png");
      }
    },
    resetImage() {
      const map = document.querySelector(".map");
      map.src = require("@/assets/world.png");
    },
  },
};
</script>

<style scoped>
.home {
  background-color: rgb(0, 1, 43);
}
.container {
  text-align: center;
  margin-top: 40px;
}

.date {
  margin: 40px 0 0px;
}

.link {
  font-size: 2rem;
  padding: 20px;
  text-decoration: none;
  color: rgb(240, 241, 255);
}

.link:nth-child(1):hover {
  background-image: linear-gradient(
    to right,
    #462523 0,
    #cb9b51 22%,
    #f6e27a 45%,
    #fff9a1 50%,
    #f6e27a 55%,
    #cb9b51 78%,
    #462523 100%
  );
  color: transparent;
  -webkit-background-clip: text;
}

.link:nth-child(2):hover {
  background-image: linear-gradient(
    to right,
    #462523 0,
    #cb9b51 22%,
    #f6e27a 45%,
    #fff9a1 50%,
    #f6e27a 55%,
    #cb9b51 78%,
    #462523 100%
  );
  color: transparent;
  -webkit-background-clip: text;
}
.map {
  width: 100%;
}
</style>