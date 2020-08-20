<template>
  <header class="header">
    <nav class="navigation" id="nav">
      <router-link to="/">
        <span>Home</span>
      </router-link>
      <router-link to="/about">
        <span>About</span>
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.header {
  margin-bottom: auto;
}

.navigation {
  padding: 5px;
}

.navigation a {
  position: relative;
  display: inline-block;
  width: 130px;
  height: 40px;
  margin: 10px 20px;
  padding: 0;
  line-height: 42px;
  font-weight: 500;
  color: #000;
  text-decoration: none;
  background: transparent;
  border: none;
  outline: none !important;
  -webkit-transition: all 0.6s ease;
  transition: all 0.6s ease;
  cursor: pointer;
}
.navigation a span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  -webkit-transition: all 0.6s ease;
  transition: all 0.6s ease;
}
.navigation a:before,
.navigation a:after {
  position: absolute;
  content: "";
  right: 0;
  top: 0;
  background: #fff;
  -webkit-transition: all 0.6s ease;
  transition: all 0.6s ease;
}
.navigation a:before {
  height: 0%;
  width: 2px;
}
.navigation a:after {
  width: 0%;
  height: 2px;
}
.navigation a:hover:before {
  height: 100%;
}
.navigation a:hover:after {
  width: 100%;
}
.navigation a span:before,
.navigation a span:after {
  position: absolute;
  content: "";
  left: 0;
  bottom: 0;
  background: #fff;
  -webkit-transition: all 0.6s ease;
  transition: all 0.6s ease;
}
.navigation a span:before {
  width: 2px;
  height: 0%;
}
.navigation a span:after {
  width: 0%;
  height: 2px;
}
.navigation a span:hover:before {
  height: 100%;
}
.navigation a span:hover:after {
  width: 100%;
}

.navigation a span:hover {
  color: #fff;
}

.navigation a.router-link-exact-active span {
  color: #42b983;
}

@media (max-width: 350px) {
  .navigation a {
    width: 100px;
    height: 32px;
    line-height: 32px;
  }
}

@media (max-width: 319px) {
  .navigation a {
    width: 80px;
    height: 32px;
    line-height: 32px;
  }
}
</style>