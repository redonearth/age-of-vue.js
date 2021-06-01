<template>
  <div>
    <ul>
      <item>아이템 1</item>
      <item>
        아이템 2
        <button>클릭</button>
      </item>
      <item>
        <div>아이템 3</div>
        <img src="./assets/logo.png" alt="Vue.js" />
      </item>
      <item>
        <div style="color: blue; font-size: 2.5rem">아이템 4</div>
      </item>
    </ul>
  </div>
</template>

<script>
import Item from "./Item.vue";

export default {
  components: {
    Item,
  },
};
</script>
