<template>
  <footer class="footer">
    <Copyright />
  </footer>
</template>

<script>
import Copyright from "./Copyright";

export default {
  name: "Footer",
  components: { Copyright }
};
</script>

<style scoped>
.footer {
  margin-top: auto;
  padding: 30px;
}
@media (max-width: 350px) {
  .footer {
    padding: 15px;
  }
}
</style>