<template>
  <div id="app">
    <Notification />
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Notification from "./components/Notification";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: { Notification, Header, Main, Footer }
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Montserrat", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background-color: #7f5a83;
  background-image: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%);
}
@media (min-height: 451px) {
  #app {
    height: 100vh;
  }
}
@media (max-width: 350px) {
  h1 {
    font-size: 2.1rem;
  }
}
</style>
