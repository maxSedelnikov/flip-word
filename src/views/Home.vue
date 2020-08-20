<template>
  <section class="home">
    <h1 class="home-title">Flip The Word</h1>
    <FlipCard :list="wordsList" :index="currentIndex" />
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import FlipCard from "../components/FlipCard";

export default {
  name: "Home",
  components: { FlipCard },
  data: () => ({}),
  computed: {
    ...mapGetters("words", ["wordsList", "currentIndex"])
  }
};
</script>

<style scoped>
.home-title {
  margin: 0;
  padding: 1rem 0;
}
@media (max-width: 350px) {
  .home-title {
    padding: 0.5rem 0;
    font-size: 2.1rem;
  }
}
</style>
