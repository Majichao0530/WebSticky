// 导入vuex和vue
import Vuex from "vuex";
import Vue from "vue";
import ActionHelper from "./ActionHelper";

// 注册vuex到vue中
Vue.use(Vuex);

// 创建vuex的仓库对象 state 共享对象和数据 mutations 共享方法
let store = new Vuex.Store({
  state: {
    aHelper: new ActionHelper(),
    isShow: false,
    transMemo: null,
    filterCateId: -1 // 筛选笔记分类id
  },
  mutations: {
    showEditMemo(state: any, editMemo: any) {
      // 将传递来的editMemo赋值给transMemo
      state.transMemo = editMemo;
      // 显示编辑框
      state.isShow = true;
    }
  }
});

// 导出仓库对象
export default store;
