import DataHelper from "./DataHelper";
import ItemData from "../model/ItemData";
import Category from "@/model/CateEnum";

class ActionHelper {
  // 数据处理
  dataHelper: DataHelper = new DataHelper("memoData", "id");
  memoList!: Array<ItemData>;

  // 业务处理
  // 新增笔记
  add(item: ItemData): number {
    item.id = this.dataHelper.addData(item);
    this.memoList.push(item);
    this.dataHelper.saveData(this.memoList);
    return item.id;
  }
  // 修改笔记
  edit(item: ItemData): void {
    let editItem: ItemData | undefined = this.memoList.find(ele => {
      return ele.id == item.id;
    });
    if (editItem) {
      editItem.cateid = item.cateid;
      editItem.title = item.title;
      editItem.content = item.content;
    }
    this.dataHelper.saveData(this.memoList);
  }
  // 删除笔记
  remove(id: number): void {
    let index: number = this.memoList.findIndex(ele => {
      return ele.id == id;
    });
    if (index > -1) {
      this.memoList.splice(index, 1);
      this.dataHelper.saveData(this.memoList);
    }
  }

  constructor() {
    this.memoList = this.readData();
  }

  getCategoryName(cateid: Category): string {
    const arrNames = ["工作", "生活", "学习"];
    return arrNames[cateid];
  }

  readData(): Array<ItemData> {
    let arrObj = this.dataHelper.readData();
    let arrItem = arrObj.map((ele: any) => {
      let item: ItemData = new ItemData();
      item.id = ele.id;
      item.cateid = ele.cateid;
      item.title = ele.title;
      item.content = ele.content;
      item.createTime = ele.createTime;
      return item;
    });
    return arrItem;
  }
}

export default ActionHelper;
