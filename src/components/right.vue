<style lang="less" scoped>
.v-right {
  position: relative;
  line-height: 38px;
  color: #fff;
  padding: 0 15px;
  flex: 1;
  overflow: auto;
  ul {
    padding: 0;
    margin-top: 20px;
    li {
      float: left;
      list-style-type: none;
      margin-bottom: 5px;
      a {
        width: 100px;
        height: 100px;
        display: block;
        text-align: center;
        padding: 5px;
        cursor: pointer;
        img {
          width: 50px;
          height: 50px;
        }
        span {
          font-size: 0.9rem;
          display: block;
          white-space: pre;
          text-overflow: ellipsis;
          overflow: hidden;
          text-shadow: 1px 1px 1px #000;
        }
      }
    }
  }
}
</style>
<template>
	<div class="v-right">
		<ul>
      <li v-for="(list, key) in appDatas" :key="key">
        <a @click="opentapp(list)">
          <img :src="'http://t3cloud.jp/'+list.icourl" />
          <span>{{ list.name }}</span>
        </a>
      </li>
    </ul>
	</div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
import { SET_STORE } from 'store/info';

export default {
  data() {
    return {
      appDatas: []
    };
  },
  methods: {
    ...mapActions([SET_STORE]),
    appList() {
      let _this = this;
      $.get(restpath + '/apps').done(function(data) {
        _this.appDatas = data;
        _this.SET_STORE({ userApps: data });
      });
    },
    opentapp(list) {
      debugger;
      // 如果是链接则外部打开
      if (list.scut === 'true') {
        window.open(list.scutopenurl);
      } else {
        debugger;
        // 使用路由打开内部页
        this.$router.replace({ path: '' + list.appkey });
        //window.location.href='#/'+list.appkey;
      }
    }
  },
  mounted() {
    // 组件创建完后
    this.appList();
  }
};
</script>