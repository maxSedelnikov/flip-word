<template>
  <section class="about">
    <h1 class="about-title">About page</h1>
    <b-container>
      <div class="info">
        <p>This is the first version of my pet project, the functionality of an application will develope in future.</p>
        <ul>
          <h2>Availible features</h2>
          <li>
            <b-icon-file-text></b-icon-file-text>
            <span>Getting random english words and their translition into russian</span>
          </li>
          <li>
            <b-icon-hand-index-thumb></b-icon-hand-index-thumb>
            <span>Flip on click and see the word's translation</span>
          </li>
        </ul>
        <h3>
          Warning&nbsp;
          <b-icon-exclamation-circle></b-icon-exclamation-circle>
        </h3>
        <p>The appplication has little limits on how often you can ask for new words, you will get a notification when you reach it</p>
      </div>
    </b-container>
  </section>
</template>

<style scoped>
.about-title {
  margin: 0;
  padding: 1rem 0;
}
.info {
  min-height: 290px;
}
ul {
  padding: 0;
  list-style: none;
}
li {
  margin-bottom: 5px;
}
li span {
  padding-left: 5px;
}
@media (max-width: 350px) {
  .about-title {
    padding: 0.5rem 0;
    font-size: 2.1rem;
  }
  h2,
  h3 {
    font-size: 1.5rem;
  }
  p,
  span {
    font-size: 0.9rem;
  }
}
</style>
