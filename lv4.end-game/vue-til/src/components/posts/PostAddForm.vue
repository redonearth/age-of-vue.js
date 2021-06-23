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
          <textarea id="contents" type="text" rows="10" v-model="contents" />
        </div>
        <button type="submit" class="btn">등록하기</button>
      </form>
      <p class="log">
        {{ logMessage }}
      </p>
    </div>
  </div>
</template>

<script>
import { createPost } from '@/api/index';

export default {
  data() {
    return {
      title: '',
      contents: '',
      logMessage: '',
    };
  },
  methods: {
    async submitForm() {
      try {
        const { data } = await createPost({
          title: this.title,
          contents: this.contents,
        });
        console.log(data);
      } catch (error) {
        console.error(error.response.data.message);
        this.logMessage = error.response.data.message;
      }
    },
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
