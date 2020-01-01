<template>
  <div id="app">
    <div class="container-fluid col-lg-6 col-sm-12 mx-auto text-mono">
      <h1 class="display-1 text-center glow">curvyslist</h1>
      <p class="small text-center">the officially inofficial C.U.R.V.Y. tag exchange</p>
      <navigation />
      <hr>
      <!-- This is where all the routes are being rendered -->
      <transition>
        <!-- keep-alive remembers what users changed -->
        <!-- this is useful if they accidentally exit a form -->
        <keep-alive>
          <router-view />
        </keep-alive>
      </transition>
      <hr>
      <p class="small text-center">
        Automatically aggregated content, no guarantees given.
      </p>
      <p class="text-center">
        &#129414;
      </p>
    </div>
  </div>
</template>

<script>
  import Navigation from './components/Navigation.vue'

  export default {
    components: {
      Navigation
    }
  }
</script>

<style>
  /* what can I say I'm a glowy boi */
  .glow {
    color: white;
    -webkit-animation: neon 1.5s ease-in-out infinite alternate;
    -moz-animation: neon 1.5s ease-in-out infinite alternate;
    animation: neon 1.5s ease-in-out infinite alternate;
  }
  @-webkit-keyframes neon {
    from {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00de, 0 0 70px #ff00de, 0 0 80px #ff00de, 0 0 100px #ff00de, 0 0 150px #ff00de;
    }
    to {
      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00de, 0 0 35px #ff00de, 0 0 40px #ff00de, 0 0 50px #ff00de, 0 0 75px #ff00de;
    }
  }
  @-moz-keyframes neon {
    from {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00de, 0 0 70px #ff00de, 0 0 80px #ff00de, 0 0 100px #ff00de, 0 0 150px #ff00de;
    }
    to {
      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00de, 0 0 35px #ff00de, 0 0 40px #ff00de, 0 0 50px #ff00de, 0 0 75px #ff00de;
    }
  }
  @keyframes neon {
    from {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00de, 0 0 70px #ff00de, 0 0 80px #ff00de, 0 0 100px #ff00de, 0 0 150px #ff00de;
    }
    to {
      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00de, 0 0 35px #ff00de, 0 0 40px #ff00de, 0 0 50px #ff00de, 0 0 75px #ff00de;
    }
  }
</style>