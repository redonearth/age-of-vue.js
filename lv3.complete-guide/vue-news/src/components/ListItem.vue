<template>
  <div>
    <ul class="fetched-list">
      <li v-for="item in listItems" :key="item.id" class="fetched-item">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="fetched-title">
            <a :href="item.url">
              {{ item.title }}
            </a>
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
export default {
  created() {
    const name = this.$route.name;
    let actionName;
    switch (name) {
      case "news":
        actionName = "FETCH_NEWS";
        break;
      case "ask":
        actionName = "FETCH_ASK";
        break;
      case "jobs":
        actionName = "FETCH_JOBS";
        break;
    }
    this.$store.dispatch(actionName);
  },
  computed: {
    listItems() {
      const name = this.$route.name;
      const state = this.$store.state;
      switch (name) {
        case "news":
          return state.news;
        case "ask":
          return state.ask;
        case "jobs":
          return state.jobs;
        default:
          return false;
      }
    },
  },
};
</script>


<style scoped>
.fetched-list {
  margin: 0;
  padding: 0;
}
.fetched-item {
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
.fetched-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>