<style lang="less" scoped>
.v-footer {
  position: relative;
  background: #778a9d;
  padding: 0 15px;
  img {
    width: 40px;
    width: 40px;
    margin: 0 10px;
  }
  ul {
    padding: 0;
    li {
      float: left;
      list-style-type: none;
      margin-right: 5px;
      a {
        width: 50px;
        height: 50px;
        display: block;
        text-align: center;
        padding: 5px 0;
        margin-right: 10px;
        cursor: pointer;
        img {
          width: 40px;
          height: 40px;
        }
        span {
          font-size: 0.9rem;
          display: block;
          white-space: pre;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
    .active {
      background: rgba(0, 0, 0, 0.3);
    }
  }
}
</style>
<template>
	<footer class="v-footer">
    <ul>
      <li v-for="(list, index) in links" :key="index" :class="{active:list._active}">
         <a v-if="list.appkey!==''" @click="linkTab(list)" @mousedown="showDeleteButton(list)" @mouseup="clearLoop">
           <img :src="'http://t3cloud.jp/'+list.icourl" />
         </a>
         <a v-else @click="linkTab(list)">
           <img src="../img/logo64.png" />
         </a>
      </li>
    </ul>
  </footer>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import { SET_STORE } from 'store/info';

export default {
  data() {
    return {
      links: []
    };
  },
  methods: {
    ...mapActions([SET_STORE]),
    appLink: _.debounce(function() {
      let _this = this;
      let _links = [
        {
          appkey: ''
        }
      ];
      _this.routePath.forEach(function(d) {
        let r = _.find(_this.userApps, function(o) {
          return '/' + o.appkey === d;
        });
        if (r) {
          if (_this.$route.path === '/' + r.appkey) {
            r._active = true;
          } else {
            r._active = false;
          }
          _links.push(r);
        }
      });
      _this.links = _links;
    }, 10),
    linkTab: function(list) {
      // 使用路由打开内部页
      this.$router.replace({ path: '/' + list.appkey });
    },
    // 长按删除
    showDeleteButton(t) {
      clearInterval(this.Loop); //再次清空定时器，防止重复注册定时器
      this.Loop = setTimeout(() => {
        this.closeApps(t);
      }, 1000);
    },
    clearLoop() {
      clearInterval(this.Loop);
    },
    closeApps(t) {
      debugger;
      //t.appkey;
      let r = this.routePath;
      let index = r.indexOf('/'+t.appkey);
      let s = [];
      r.forEach(function(d){
        if( '/'+t.appkey !== d ){
          s.push(d);
        }
      })
      this.SET_STORE({ routePath: s });
      if( this.oldRoutePath === '/'+t.appkey ){
         this.$router.replace({ path: '/' });
      }
    }
  },
  computed: mapState({
    userApps: state => state.info.userApps,
    routePath: state => state.info.routePath,
    oldRoutePath: state => state.info.oldRoutePath
  }),
  watch: {
    routePath: function() {
      this.appLink();
    },
    userApps: function() {
      this.appLink();
    },
    $route: 'appLink'
  }
};
</script>