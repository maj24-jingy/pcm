<template>
  <div class="base">
    <p>Account Settings</p>
    <el-card shadow="hover">
      <div class="head">
        <h1>Real name authentication</h1>
      </div>
      <div class="base-confim">
        <div class="idNumber">
          <p>ID number</p>
          <el-input v-model="idNumber" placeholder="please enter id number"></el-input>
        </div>
        <div class="imgBox">
          <p>Please upload the photo of the front of your passport and your passport in hand</p>
          <el-upload
            ref="imgBroadcastUpload"
            :auto-upload="false" multiple
            :file-list="diaLogForm.imgBroadcastList"
            list-type="picture-card"
            :on-change="imgBroadcastChange"
            :on-remove="imgBroadcastRemove"
            accept="image/jpg,image/png,image/jpeg"
            action="">
            <i class="el-icon-plus"></i>
            <div slot="tip" class="el-upload__tip">Only jpg/png files can be uploaded, and no more than 2M</div>
          </el-upload>
          <el-button @click="submitDialogData">Submit certification</el-button> 
        </div>
      </div>
    </el-card>
    <el-card shadow="hover" class="elCardTwo">
      <div class="setName">
        <p>Password Setting</p>
      </div>
      <div class="setItem">
        <p>Reset login in password</p>
        <el-button type="primary">Reset Password</el-button>
      </div>
    </el-card>

  </div>
</template>

<script>
import Global from '../../../utils/global'

export default {
  name: 'zichan',
  data() {
    return {
      idNumber:'',
      diaLogForm: {
        goodsName:'', // 商品名称字段
        imgBroadcastList:[], // 储存选中的图片列表
        imgsStr:''   // 后端需要的多张图base64字符串 , 分割  2832738378@qq.com
      },
      idcard: Global.formDate,
      getFile1: [],
      getFile2: []
    };
  },

  mounted() {
    
  },

  methods: {
    // 图片选择后 保存在 diaLogForm.imgBroadcastList 对象中
   imgBroadcastChange (file, fileList) {
    // console.log(formData);
    // console.log(file);
    // this.idcard = formData
    //this.idcardInHands = formData1
    const isLt2M = file.size / 1024 / 1024 < 2 // 上传头像图片大小不能超过 2MB
    if (!isLt2M) {
     this.diaLogForm.imgBroadcastList = fileList.filter(v => v.uid !== file.uid)
     this.$message.error('图片选择失败，每张图片大小不能超过 2MB,请重新选择!')
    } else {
     this.diaLogForm.imgBroadcastList.push(file)
    }
   },
   // 有图片移除后 触发
   imgBroadcastRemove (file, fileList) {
    this.diaLogForm.imgBroadcastList = fileList
   },
   // 提交弹窗数据
   async submitDialogData () {
    //  this.diaLogForm.imgBroadcastList.map(async file => {
    //    http.post('/fileUp/upload',file.row,{headers: {
    //         Authorization: "Bearer " + this.token
    //       }}).then(res => {
    //    console.log(res);
    //  })
    //  })
    // const afiles = this.file
    // this.diaLogForm.imgBroadcastList.map(async afiles => {
    // this.idcard.append('idcard', file1)
    // this.idcard.append('idcardInHands', file1)
      console.log(this.getFile1[1]);
      const formData = new FormData();
      formData.append('idcard', this.getFile1[0].raw)
      formData.append('idcardInHands', this.getFile1[1].raw)
      console.log("formData:"+formData.get('idcardInHands'));
      //console.log(this.idcardInHands);
      const res = await this.$http.post('/fileUp/upload',formData)
      console.log(res);
    // })
   }
  },
};
</script>

<style lang="less" scoped>
  .base {
    //重置密码css
    .elCardTwo {
      margin-top: 50px;
      .setName {
        p {
          font-size: 22px;
          font-weight: bold;
          margin-bottom: 20px;
          color: #231F2A;
        }
      }
      .setItem {
        display: flex;
        p {
          line-height: 60px;
          font-size: 18px;
          color: #000;
        }
        .el-button {
          margin-left: 40px;
          font-size: 18px;
          width: 200px;
          height: 60px;
          color: #000;
          background-color: #f0b90b;
          border: 0;
        }
      }
    }

    //中间验证部分css
    .el-card {
      .head {
        margin: 20px 0px;
        h1 {
          font-size: 22px;
          font-weight: bold;
          margin-bottom: 20px;
          color: #231F2A;
        }
      }
      .base-confim {
        margin-top: 50px;
        .idNumber {
          p {
            color: #231F2A;
            font-size: 20px;
            margin-bottom: 20px;
          }
          .el-input {
            width: 60%;
          }
        }
        .imgBox {
          >p {
            margin: 30px 0 20px;
            font-size: 20px;
            color: #000;
          }
          .el-upload__tip {
            font-size: 16px;
            color: #a691ca;
            margin-bottom: 20px;
          }
          >.el-button {
            width: 200px;
            height: 55px;
            font-size: 18px;
            background-color: #f0b90b;
          }
        }
      }
    }
    //最上面的文字css
    >p {
      width: 165px;
      height: 38px;
      // background-color: brown;
      border-bottom: 3px solid #f0b90b;
      font-size: 20px;
      font-weight: 700;
      color: #231f2a;
      position: relative;
      padding-bottom: 4px;
      margin-bottom: 40px;
    }
  }
</style>