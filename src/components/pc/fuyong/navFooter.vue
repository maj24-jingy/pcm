<template>
    <div id="footer">
        <div class="tableTitle"></div>

        <div class="footer_beian">菲玩国际旅行社有限公司 <span style="padding-left:10px;">旅行社业务经营许可证编号：L-PH-CJ00056</span><br>Copyright
            © 2020 www.wan.ph. PM2.Globel.co 有限公司版权所有 <a href="#" target="_blank">营业执照</a> <a href="#" target="_blank">沪ICP备13011172号-3</a>
            增值电信业务经营许可证编号：<a href="#" target="_blank">沪B9-20190030</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "navFooter"
    }
</script>

<style lang="less">
.tableTitle {
    position: relative;
    margin: 0 auto;
    width: 100%;
    height: 1px;
    margin-top: 10px;
    background-color: #d4d4d4;
    text-align: center;
    font-size: 17px;
    color: rgba(101, 101, 101, 1);
  }
    #footer {
        .footer_beian {
            text-align: center;
            padding: 5px 0;
            line-height: 22px;
            margin: 0 auto;
            font-size: 14px;
            color: #666;
            a {
                color: #666;
            }
        }
    }
</style>
