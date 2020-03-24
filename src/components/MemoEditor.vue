<template>
  <!-- 便签新增/编辑区 -->
  <div>
    <div class="cover-layer"></div>
    <div id="new-markdown" class="editor-layer">
      <div class="editor-top">
        <input class="editor-title form-control" type="text" placeholder="标题" v-model="memo.title" />
        <div class="dropdown select-category">
          <button class="btn btn-default dropdown-toggle" data-toggle="dropdown">
            <span class="category">{{this.$store.state.aHelper.getCategoryName(memo.cateid)}}</span>
            <span class="caret"></span>
          </button>
          <ul class="dropdown-menu">
            <li @click="memo.cateid = 0">
              <a>工作</a>
            </li>
            <li @click="memo.cateid = 1">
              <a>生活</a>
            </li>
            <li @click="memo.cateid = 2">
              <a>学习</a>
            </li>
          </ul>
        </div>
        <ul class="tools">
          <li class="save" @click="saveNew"></li>
          <li class="cancel" @click="closeWin"></li>
        </ul>
      </div>
      <textarea class="text-content form-control" placeholder="内容" v-model="memo.content"></textarea>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ItemData from "../model/ItemData";

@Component({
  components: {}
})
export default class MemoEditor extends Vue {
  // 设置用来保存编辑框的数据
  memo: ItemData = new ItemData(undefined, 0);

  // 组件创建时执行函数
  created(): void {
    // 接收Vuex传递过来的笔记副本
    this.memo = this.$store.state.transMemo;
  }

  // 点击关闭编辑框
  closeWin(): void {
    this.$store.state.isShow = false;
  }

  // 点击保存
  saveNew(): void {
    // 验证memo数据是否符合标准
    if (
      this.memo &&
      this.memo.cateid > -1 &&
      this.memo.title.trim().length > 0 &&
      this.memo.content.trim().length > 0
    ) {
      // 判断 新建/编辑操作
      if (this.memo.id == -1) {
        // 添加到memoList和localStorage 即调用add方法
        this.$store.state.aHelper.add(this.memo);
      } else {
        this.$store.state.aHelper.edit(this.memo);
      }
      this.$store.state.isShow = false;
    } else {
      window.alert("您创建的笔记有误，请改正后重试");
    }
  }
}
</script>