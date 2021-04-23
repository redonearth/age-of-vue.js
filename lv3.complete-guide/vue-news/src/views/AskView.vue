<template>
  <div>
    <ul class="news-list">
      <li v-for="item in fetchedAsk" :key="item.id" class="news-item">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="news-title">
            <router-link :to="`/item/${item.id}`">
              {{ item.title }}
            </router-link>
            <small class="link-text">
              {{ item.time_ago }} by
              <router-link :to="`/user/${item.user}`" class="link-text">
                {{ item.user }}
              </router-link>
            </small>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["fetchedAsk"]),
  },
  created() {
    this.$store.dispatch("FETCH_ASK");
  },
};
</script>


<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.news-item {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 60px;
  color: #42b883;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>