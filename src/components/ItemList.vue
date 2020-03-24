<template>
  <div id="memos" class="container">
    <MemoItem v-for="item in filterMemo()" :key="item.id" :memo="item" />
  </div>
</template>

<script lang="ts">
// 导入vue
import { Vue, Component } from "vue-property-decorator";
import ItemData from "../model/ItemData";
import MemoItem from "./MemoItem.vue";

@Component({
  components: {
    MemoItem
  }
})

// 编写组件类
export default class ItemList extends Vue {
  // 声明笔记数组
  memoArr: Array<ItemData> = this.$store.state.aHelper.memoList;

  // 分类显示笔记方法
  filterMemo() {
    if (this.$store.state.filterCateId == -1) {
      return this.memoArr;
    } else {
      return this.memoArr.filter((ele: any) => {
        return ele.cateid == this.$store.state.filterCateId;
      });
    }
  }
}
</script>