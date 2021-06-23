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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      contents: '',
    };
  },
  methods: {
    submitForm() {},
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
