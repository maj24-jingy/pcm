<template>
  <div class="teacher-card">
    <p class="pHead">{{cover}}</p>
    <div>
      <p><span>{{price}}</span>%</p>
      <p>$<span>{{teacher}}</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "teacherCard",
  props: {
    cover: {
      type: String,
      default:
        "AMC",
    },
    price: {
      type: String,
      default: "1.28",
    },
    teacher: {
      type: String,
      default: "4399",
    },
  },
};
</script>

<style lang="less" scoped>
.teacher-card {
//   @include arou;
display: flex;
    justify-content: space-around;
    align-items: center;
  width: calc((100% - 140px) / 3);
  height: 100px;
  background: #fff;
  margin: 10px 0;
  padding: 15px 10px;
  cursor: pointer;
  border-radius: 1px;
  transition: 0.4s all;
  .pHead {
    font-weight: bolder;
    font-size: 30px;
  }
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 25px 58px 0 rgba(0, 0, 0, 0.1);
  }
  > div {
    width: 65%;
    text-align: right;
    p:nth-child(1) {
      // @include over(100%);
      overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 100%;
    -webkit-box-orient: vertical;
      font-size: 20px;
      color: #f40;
      font-weight: 900;
      font-family: Microsoft Yahei;
      span {
      height: 10px;
      line-height: 15px;
      vertical-align: middle;
      font-size: 12px;
      color: hotpink;
      padding: 5px 10px 3px 10px;
      border-radius: 15px;
    }
    }
    p:nth-child(2) {
    //   @include over(100%);
    overflow: hidden;
    text-overflow: ellipsis;
    // display: -webkit-box;
    -webkit-line-clamp: 100%;
    text-align: right;
      font-size: 16px;
      color: #000000;
      font-weight: 600;
      font-family: Microsoft Yahei;
      margin: 8px 0 10px 0;
    }
    
  }
}
</style>
