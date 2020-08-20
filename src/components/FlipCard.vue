<template>
  <div class="flip-card__wrap">
    <b-container class="d-flex justify-content-center align-items-center">
      <transition name="fade"></transition>
      <template v-if="needLoader">
        <Loader />
      </template>
      <template v-else>
        <button
          type="button"
          :class="[btnClass, btnOutlineClass,prevClass, disablePrevButton]"
          @click="prevWord"
        >
          <b-icon-chevron-left></b-icon-chevron-left>
        </button>
        <vue-flip active-click width="250px" height="250px" class="flip-card__item">
          <template v-slot:front class="front">{{ list[index].word }}</template>
          <template v-slot:back class="back">{{list[index].translation}}</template>
        </vue-flip>
        <button
          type="button"
          :class="[btnClass, btnOutlineClass,nextClass, disableNextButton]"
          @click="nextWord"
        >
          <b-icon-chevron-right></b-icon-chevron-right>
        </button>
      </template>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import VueFlip from "vue-flip";
import Loader from "../components/Loader";

export default {
  name: "FlipCard",
  components: { VueFlip, Loader },
  props: {
    list: {
      type: Array,
      required: true
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data: () => ({
    btnClass: "btn",
    btnOutlineClass: "btn-outline-light",
    prevClass: "prev",
    nextClass: "next",
    disabledClassPrev: null,
    disabledClassNext: null
  }),
  methods: {
    ...mapActions("words", ["showNextWord", "showPrevWord", "fetchWords"]),
    async nextWord() {
      if (this.allowFetchingNext) {
        if (this.list.length === this.index + 1) await this.fetchWords();
        this.showNextWord();
      } else {
        if (this.list.length > this.currentIndex + 1) {
          this.showNextWord();
        }
      }
    },
    prevWord() {
      if (this.index - 1 >= 0) {
        this.showPrevWord();
      }
    }
  },
  computed: {
    ...mapGetters(["showLoader"]),
    ...mapGetters("words", ["currentIndex", "allowFetchingNext"]),
    needLoader() {
      return Boolean(this.showLoader || !this.list.length);
    },
    disablePrevButton() {
      if (this.currentIndex > 0) {
        return null;
      } else {
        return "disabled";
      }
    },
    disableNextButton() {
      if (this.allowFetchingNext || this.list.length > this.currentIndex + 1) {
        return null;
      } else {
        return "disabled";
      }
    }
  }
};
</script>

<style scoped>
.flip-card__wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 290px;
  padding: 20px 0;
}
.flip-card__wrap >>> .flip-card__item {
  margin: 0 15px;
}
.flip-card__wrap >>> .front,
.flip-card__wrap >>> .back {
  font-size: 20px;
  color: #000;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0 0 30px 2px #000;
  cursor: pointer;
}
.flip-card__wrap >>> .front,
.flip-card__wrap >>> .back {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.btn {
  padding: 0.275em 0.45em;
  -webkit-transition: all 0.6s ease;
  transition: all 0.6s ease;
}
.btn:focus:not(.disabled),
.btn:active:not(.disabled) {
  color: #212529;
  box-shadow: none;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}
.btn-outline-light:not(:disabled):not(.disabled):active:focus,
.btn-outline-light:not(:disabled):not(.disabled).active:focus,
.show > .btn-outline-light.dropdown-toggle:focus,
.btn-outline-light.disabled {
  box-shadow: none;
}
.btn.disabled {
  cursor: not-allowed;
}

@media (max-width: 350px) {
  .flip-card__wrap .container {
    flex-direction: column;
    position: relative;
  }
  .btn {
    position: absolute;
    bottom: -70px;
  }
  .btn.prev {
    left: 50px;
  }
  .btn.next {
    right: 50px;
  }
}
</style>
