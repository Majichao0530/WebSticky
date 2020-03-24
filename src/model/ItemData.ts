import Category from "./CateEnum";

class ItemData {
  id!: number;
  cateid!: Category;
  title!: string;
  content!: string;
  createTime!: string;

  constructor(
    id: number = -1,
    cateid: Category = -1,
    title: string = "",
    content: string = ""
  ) {
    this.id = id;
    this.cateid = cateid;
    this.title = title;
    this.content = content;
    this.createTime = this.toFormatDate(Date.now());
  }

  toFormatDate(timeSpan: number): string {
    let date = new Date(timeSpan);
    let str =
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1) +
      "-" +
      date.getDate() +
      " " +
      date.getHours() +
      ":" +
      date.getMinutes();
    return str;
  }
}

export default ItemData;
