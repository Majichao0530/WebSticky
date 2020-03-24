<template>
  <div class="memo-container">
    <div class="memo">
      <div class="mark"></div>
      <div class="memo-heading">
        <h5 class="title">{{memo.title}}</h5>
        <ul class="tools">
          <li class="edit" @click="showEdit"></li>
          <li class="delete" @click="doDel"></li>
        </ul>
      </div>
      <h6 class="memo-info">
        <span class="timeStamp">{{memo.createTime}}</span>
        <span class="category">分类:{{$store.state.aHelper.getCategoryName(memo.cateid)}}</span>
      </h6>
      <div class="content">
        <div class="text">{{memo.content}}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ItemData from "../model/ItemData";

@Component
export default class MemoItem extends Vue {
  @Prop() memo!: ItemData;

  // 删除方法
  doDel(): void {
    // 询问是否确定删除
    if (!window.confirm(`确认要删除[${this.memo.title}]这篇笔记吗？`)) return;
    // 调用删除方法
    this.$store.state.aHelper.remove(this.memo.id);
  }

  showEdit(): void {
    // 创建笔记副本
    let memoCopy = JSON.parse(JSON.stringify(this.memo));
    // 传递笔记副本给Vuex
    this.$store.commit("showEditMemo", memoCopy);
  }
}
</script>