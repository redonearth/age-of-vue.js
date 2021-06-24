<template>
  <div class="contents">
    <div class="form-wrapper">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="title">제목</label>
          <input id="title" type="text" v-model="title" />
        </div>
        <div>
          <label for="contents">내용</label>
          <textarea id="contents" type="text" rows="5" v-model="contents" />
          <p v-if="!isContentsValid" class="validation-text warning">
            글자 수는 200자 이하여야 합니다.
          </p>
        </div>
        <button type="submit" class="btn">수정하기</button>
      </form>
      <p class="log">
        {{ logMessage }}
      </p>
    </div>
  </div>
</template>

<script>
import { fetchPost } from '@/api/posts';

export default {
  data() {
    return {
      title: '',
      contents: '',
      logMessage: '',
    };
  },
  computed: {
    isContentsValid() {
      return this.contents.length <= 200;
    },
  },
  methods: {
    submitForm() {},
  },
  async created() {
    const id = this.$route.params.id;
    const { data } = await fetchPost(id);
    this.title = data.title;
    this.contents = data.contents;
  },
};
</script>

<style scoped>
.form-wrapper .form {
  width: 100%;
}
.btn {
  color: white;
}
</style>
