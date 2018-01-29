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
         <a @click="linkTab(list)">
           <img :src="'http://t3cloud.jp/'+list.icourl" />
         </a>
      </li>
    </ul>
  </footer>
</template>
<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      links: []
    };
  },
  methods: {
    appLink: _.debounce(function() {

      let _this = this;
      console.log('1111');
      let _links = [];
      _this.routePath.forEach(function(d) {
        let r = _.find(_this.userApps, function(o) {
          return o.appkey === d.replace('/', '');
        });
        if (r) {
          if (_this.$route.path.replace('/', '') === r.appkey) {
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
      this.$router.replace({ path: '' + list.appkey });
    }
  },
  computed: mapState({
    userApps: state => state.info.userApps,
    routePath: state => state.info.routePath
  }),
  watch: {
    routePath: function() {
      this.appLink();
    },
    userApps: function() {
      this.appLink();
    },
    $route: 'appLink'
  },

};
</script>