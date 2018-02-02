<style lang="less" scoped>
.v-main {
  position: relative;
  flex: 1;
  overflow: auto;
}
.v-box {
  width: 100%;
  height: 100%;
  overflow: hidden;
  iframe {
    width: 100%;
    height: 100%;
    border: none;
    background: #fff;
    margin: 0;
    padding: 0;
    display: flex;
    flex: 1;
  }
}
</style>
<template>
	<div class="v-main">

   <!-- <iframe v-for="(list, index) in links" :key="index" :class="{active:list._active}" src="http://www.baidu.com"></iframe>-->
    <div class="v-box" v-show="iframeShow(list)" v-for="(list, index) in routePath" :key="index">
      <iframe :id="'v-iframe-'+list.replace('/','')" src="http://www.baidu.com"></iframe>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  methods: {
    iframeShow: function(list) {
      let c = this.oldRoutePath === list && list !== '/';
      // 对应chrome内嵌iframe滚动条消失bug
      if (c) {
        setTimeout(function() {
          $('#v-iframe-' + list.replace('/', '')).css(
            'height',
            'calc( 100% + 1px )'
          );
        }, 10);
        setTimeout(function() {
          $('#v-iframe-' + list.replace('/', '')).css('height', '100%');
        }, 50);
      }
      return c;
    }
  },
  computed: mapState({
    oldRoutePath: state => state.info.oldRoutePath,
    routePath: state => state.info.routePath
  })
};
</script>