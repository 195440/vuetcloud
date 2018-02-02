<style lang="less" scoped>
.layout-body {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .layout-main {
    flex: 1;
    display: inline-flex;
  }
}
@media screen and (max-width: 768px) {
  .v-left {
    flex: 1;
    width: auto;
    display: none;
  }
}
</style>
<template>
	<div class="layout-body">
		<v-header v-show="this.oldRoutePath==='/'"></v-header>
		<div class="layout-main">
			<v-left v-show="this.oldRoutePath==='/'"></v-left>
			<v-right v-show="this.oldRoutePath==='/'"></v-right>
      <v-main v-show="this.oldRoutePath!=='/'"></v-main>
		</div>
		<v-footer></v-footer>
	</div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
import { SET_STORE } from 'store/info';

export default {
  methods: {
    ...mapActions([SET_STORE]),
    routeComplete() {
      debugger;
      if (this.routePath.indexOf(this.$route.path) === -1) {
        let newRoutePath = [].concat(this.routePath);
        debugger;
        newRoutePath.push(this.$route.path);
        this.SET_STORE({ routePath: newRoutePath });
      }
      this.SET_STORE({ oldRoutePath: this.$route.path });
    }
  },
  mounted() {
    // 组件创建完后
    this.routeComplete();
  },
  computed: mapState({
    routePath: state => state.info.routePath,
    oldRoutePath: state => state.info.oldRoutePath
  }),
  watch: {
    $route: 'routeComplete'
  }
};
</script>