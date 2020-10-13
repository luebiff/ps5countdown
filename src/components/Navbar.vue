<template>
  <div class="nav">
    <div class="logo">
      <router-link to="/"
        ><img src="../assets/ps5-logo.jpg" alt="" srcset=""
      /></router-link>
    </div>
    <div class="links">
      <div @click="toggleNav()" class="small">
        <div class="hamSpan">
          <span></span>
          <span></span>
        </div>
        <div class="xSpan">
          <span></span>
          <span></span>
        </div>

        <div class="smallLinks">
          <router-link to="/">Home</router-link>
          <router-link to="/us">12th</router-link>
          <router-link to="/world">19th</router-link>
        </div>
      </div>
      <div class="large">
        <router-link to="/">Home</router-link>
        <router-link to="/us">12th</router-link>
        <router-link to="/world">19th</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      navOpen: false,
    };
  },
  methods: {
    toggleNav() {
      console.log("click");
      let smallLinks = document.querySelector(".smallLinks");
      // let spans = document.querySelectorAll(".spans");

      this.navOpen = !this.navOpen;
      if (this.navOpen === true) {
        smallLinks.style.display = "flex";
      } else {
        smallLinks.style.display = "none";
      }
    },
  },
};
</script>

<style scoped>
.nav {
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav a {
  padding: 0 10px;
  color: rgb(240, 241, 255);
  text-decoration: none;
  font-size: 1.5rem;
}
.nav a.router-link-exact-active {
  /* color: rgb(184, 184, 185); */
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

.logo {
  width: 100px;
  height: 27px;
}

.logo a {
  padding: 0;
}

.logo img {
  height: 100%;
  width: 100%;
}

.smallLinks {
  display: none;
}
@media (max-width: 800px) {
  .small span {
    background-color: rgb(240, 241, 255);
    height: 3px;
    width: 30px;
    margin-bottom: 5px;
    display: block;
    z-index: 5;
    position: absolute;
    right: 20px;
  }
  .small span:nth-child(1) {
    top: 15px;
  }
  .small span:nth-child(2) {
    top: 25px;
    width: 40px;
  }
  .hamSpan {
    display: none;
  }

  .xSpan {
    color: red;
  }
  .large {
    display: none;
  }
  .smallLinks {
    display: none;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #121212;
    width: 80vw;
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
  }

  .smallLinks a {
    padding: 20px;
  }
}
</style>